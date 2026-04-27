import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  dark: {
    background: { primary: '#0A0A0F', secondary: '#12121A', card: '#1A1A24' },
    accent: { primary: '#6366F1', secondary: '#8B5CF6', gradient: ['#6366F1', '#8B5CF6'] },
    text: { primary: '#FFFFFF', secondary: '#A1A1AA', muted: '#71717A' },
    glass: { background: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.12)' },
  },
  light: {
    background: { primary: '#FAFAFA', secondary: '#F4F4F5', card: '#FFFFFF' },
    accent: { primary: '#6366F1', secondary: '#8B5CF6', gradient: ['#6366F1', '#8B5CF6'] },
    text: { primary: '#18181B', secondary: '#52525B', muted: '#A1A1AA' },
    glass: { background: 'rgba(255,255,255,0.8)', border: 'rgba(0,0,0,0.08)' },
  },
};

export const FONTS = { sizes: { xs: 11, sm: 13, md: 15, lg: 17, xl: 20, xxl: 24, xxxl: 32 }, weights: { regular: '400', medium: '500', semibold: '600', bold: '700' } };
export const SPACING = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 };
export const BORDER_RADIUS = { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 };
export const DIMENSIONS = { screenWidth: width, screenHeight: height, tabBarHeight: 80 };
export const ANIMATION = { duration: { fast: 150, normal: 300, slow: 500 }, spring: { damping: 15, stiffness: 150 } };
export type ThemeMode = 'dark' | 'light';
export const getThemeColors = (mode: ThemeMode) => COLORS[mode];
