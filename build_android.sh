#!/bin/bash
# AudioX Ultra Pro Max - Android Build Script
# This script builds the APK when Java is available

echo "AudioX Ultra Pro Max - Android Build"
echo "====================================="

# Check for Java
if ! command -v java &> /dev/null; then
    echo "ERROR: Java not found!"
    echo "Please install JDK 17 and set JAVA_HOME"
    echo ""
    echo "On Ubuntu/Debian: sudo apt-get install openjdk-17-jdk"
    echo "On macOS: brew install openjdk@17"
    exit 1
fi

# Build debug APK
cd android
./gradlew assembleDebug

# Check result
if [ -f "app/build/outputs/apk/debug/app-debug.apk" ]; then
    echo ""
    echo "✅ SUCCESS! APK built at:"
    echo "   android/app/build/outputs/apk/debug/app-debug.apk"
    cp app/build/outputs/apk/debug/app-debug.apk ../AudioX-Ultra-Pro-Max-debug.apk
    echo ""
    echo "📦 Also copied to: AudioX-Ultra-Pro-Max-debug.apk"
else
    echo "❌ Build failed!"
    exit 1
fi
