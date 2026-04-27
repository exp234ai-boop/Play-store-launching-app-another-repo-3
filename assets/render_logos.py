"""Render branding PNGs from the source SVGs.

This generates:
  - assets/icon.png            (1024x1024, primary launcher art)
  - assets/adaptive-icon.png   (1024x1024, foreground-only for Android adaptive)
  - assets/favicon.png         (192x192)
  - assets/splash.png          (2048x2048 splash)
  - android/app/src/main/res/mipmap-*/ic_launcher{,_round}.png
  - android/app/src/main/res/mipmap-*/ic_launcher_foreground.png
"""
from __future__ import annotations

import io
import os
from pathlib import Path

import cairosvg
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
ANDROID_RES = ROOT / "android" / "app" / "src" / "main" / "res"

LOGO_SVG = ASSETS / "logo_source.svg"
FG_SVG = ASSETS / "logo_foreground.svg"
SPLASH_SVG = ASSETS / "splash_source.svg"

# Android mipmap densities -> launcher size in px
DENSITIES = {
    "mdpi": 48,
    "hdpi": 72,
    "xhdpi": 96,
    "xxhdpi": 144,
    "xxxhdpi": 192,
}
# Adaptive icon foreground PNGs are 108dp -> these px sizes:
FG_DENSITIES = {
    "mdpi": 108,
    "hdpi": 162,
    "xhdpi": 216,
    "xxhdpi": 324,
    "xxxhdpi": 432,
}


def render(svg_path: Path, size: int) -> Image.Image:
    png_bytes = cairosvg.svg2png(
        url=str(svg_path), output_width=size, output_height=size
    )
    return Image.open(io.BytesIO(png_bytes)).convert("RGBA")


def render_rect(svg_path: Path, w: int, h: int) -> Image.Image:
    png_bytes = cairosvg.svg2png(
        url=str(svg_path), output_width=w, output_height=h
    )
    return Image.open(io.BytesIO(png_bytes)).convert("RGBA")


def round_corners(img: Image.Image, radius_ratio: float = 0.22) -> Image.Image:
    """Return img with anti-aliased rounded square mask (for the round launcher variant we use a circle)."""
    w, h = img.size
    radius = int(min(w, h) * radius_ratio)
    mask = Image.new("L", (w, h), 0)
    from PIL import ImageDraw

    d = ImageDraw.Draw(mask)
    d.rounded_rectangle((0, 0, w, h), radius=radius, fill=255)
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask=mask)
    return out


def circle(img: Image.Image) -> Image.Image:
    w, h = img.size
    mask = Image.new("L", (w, h), 0)
    from PIL import ImageDraw

    d = ImageDraw.Draw(mask)
    d.ellipse((0, 0, w, h), fill=255)
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask=mask)
    return out


def main() -> None:
    print("Rendering master logo @1024 ...")
    master = render(LOGO_SVG, 1024)
    master.save(ASSETS / "icon.png", "PNG")

    print("Rendering adaptive foreground @1024 ...")
    fg_master = render(FG_SVG, 1024)
    fg_master.save(ASSETS / "adaptive-icon.png", "PNG")

    print("Rendering favicon @192 ...")
    render(LOGO_SVG, 192).save(ASSETS / "favicon.png", "PNG")

    print("Rendering splash @2048 ...")
    splash = render_rect(SPLASH_SVG, 2048, 2048)
    splash.save(ASSETS / "splash.png", "PNG")

    # Android launcher icons
    for d, size in DENSITIES.items():
        out_dir = ANDROID_RES / f"mipmap-{d}"
        out_dir.mkdir(parents=True, exist_ok=True)
        sq = render(LOGO_SVG, size)  # already squircle-clipped via the SVG
        sq.save(out_dir / "ic_launcher.png", "PNG")
        circle(render(LOGO_SVG, size)).save(out_dir / "ic_launcher_round.png", "PNG")
        print(f"  mipmap-{d}: ic_launcher {size}x{size}")

    for d, size in FG_DENSITIES.items():
        out_dir = ANDROID_RES / f"mipmap-{d}"
        out_dir.mkdir(parents=True, exist_ok=True)
        render(FG_SVG, size).save(out_dir / "ic_launcher_foreground.png", "PNG")
        print(f"  mipmap-{d}: ic_launcher_foreground {size}x{size}")

    # Splash drawables (single + density-bucketed)
    drawable_dir = ANDROID_RES / "drawable"
    drawable_dir.mkdir(parents=True, exist_ok=True)
    render_rect(SPLASH_SVG, 1080, 1920).save(drawable_dir / "splashscreen_image.png", "PNG")

    print("Done.")


if __name__ == "__main__":
    main()
