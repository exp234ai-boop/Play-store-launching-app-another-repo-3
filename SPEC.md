# AudioX Ultra Pro Max - Specification Document

## 1. Project Overview

**Project Name:** AudioX-Ultra-Pro-Max
**Type:** React Native Expo Mobile Application
**Core Functionality:** A premium music and podcast streaming app with deep navigation, glassmorphism/neumorphism design, and AI assistant integration.
**Target Users:** Music enthusiasts, podcast listeners, audiophiles

## 2. UI/UX Specification

### Screen Structure

#### Tab Navigation (Bottom Tabs)
1. **Home** - New releases, top charts, recommended playlists
2. **Search** - Search bar, categories, live suggestions
3. **Library** - Liked songs, playlists, artists, albums, podcasts
4. **Player** - Mini + Full player with controls
5. **Podcasts** - Podcast categories and episodes

#### Navigation Depth (Minimum 4 levels per tab)

**Home Tab:**
- Level1: HomeScreen (New releases, top charts, recommended playlists)
- Level2: PlaylistScreen (all songs in playlist)
- Level3: NowPlayingScreen (now playing screen)
- Level4: LyricsScreen (fullscreen scrolling lyrics)
- Level5: QueueScreen (reorder/add/remove songs)

**Search Tab:**
- Level1: SearchScreen (search bar, categories)
- Level2: SearchResultsScreen (live suggestions)
- Level3: ArtistScreen (bio, discography)
- Level4: AlbumScreen (album tracks + credits)
- Level5: NowPlayingScreen

**Library Tab:**
- Level1: LibraryScreen (liked songs, playlists, artists)
- Level2: PlaylistDetailScreen (edit, add/remove/sort)
- Level3: SongOptionsScreen (add to playlist, share)
- Level4: CreatePlaylistScreen (name, description, cover)

**Player Tab:**
- Level1: MiniPlayer (always visible)
- Level2: FullPlayerScreen (controls)
- Level3: EqualizerScreen (10 band EQ)
- Level4: SleepTimerScreen (5/10/15/30/60 min)
- Level5: SyncedLyricsScreen (karaoke highlight)

**Podcasts Tab:**
- Level1: PodcastsScreen (categories)
- Level2: PodcastDetailScreen (episodes list)
- Level3: EpisodePlayerScreen (speed control)
- Level4: EpisodeNotesScreen (notes + links + chapters)
- Level5: DownloadScreen (offline save)

### Visual Design

#### Color Palette

**Dark Mode:**
- Background Primary: #0A0A0F
- Background Secondary: #12121A
- Background Card: #1A1A24
- Accent Primary: #6366F1 (Indigo)
- Accent Secondary: #8B5CF6 (Purple)
- Accent Gradient: Linear from #6366F1 to #8B5CF6
- Text Primary: #FFFFFF
- Text Secondary: #A1A1AA
- Text Muted: #71717A
- Success: #22C55E
- Error: #EF4444
- Warning: #F59E0B
- Glass: rgba(255, 255, 255, 0.08)
- Glass Border: rgba(255, 255, 255, 0.12)
- Neumorphism Shadow: rgba(0, 0, 0, 0.5)

**Light Mode:**
- Background Primary: #FAFAFA
- Background Secondary: #F4F4F5
- Background Card: #FFFFFF
- Accent Primary: #6366F1
- Accent Secondary: #8B5CF6
- Text Primary: #18181B
- Text Secondary: #52525B
- Glass: rgba(255, 255, 255, 0.8)

#### Typography
- Font Family: System default (San Francisco on iOS, Roboto on Android)
- Heading XL: 32px, Bold
- Heading L: 24px, Bold
- Heading M: 20px, SemiBold
- Body L: 17px, Regular
- Body M: 15px, Regular
- Body S: 13px, Regular
- Caption: 11px, Regular

#### Spacing System (8pt grid)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

#### Design Effects
- **Glassmorphism:** Blur view with transparency
- **Neumorphism:** Soft shadows for elevation
- **Gradient:** Linear gradient backgrounds
- **Micro-animations:** Scale (0.95), spring, fade on every touch
- **Border Radius:** 12px (cards), 16px (modals), 24px (buttons)

### Components
- Cards with glassmorphism effect
- Tappable list items with press animation
- Bottom sheet modals
- Floating AI assistant button
- Skeleton loaders
- Mini player bar
- Navigation headers with blur
- Pull to refresh
- Infinite scroll lists

## 3. Functionality Specification

### Core Features
1. **Deep Navigation:** 4+ levels in every tab
2. **Bottom Sheet Modals:** Quick actions, AI assistant
3. **Pull to Refresh:** On all list screens
4. **Skeleton Loaders:** While loading mock data
5. **Infinite Scroll:** Pagination for lists
6. **Glassmorphism + Neumorphism + Gradients:** UI styling
7. **Micro-animations:** Scale, spring, fade on press
8. **Haptic Feedback:** On all buttons
9. **Dark/Light Mode:** Smooth 300ms transition
10. **Floating AI Assistant:** Bottom sheet with mock responses
11. **AsyncStorage:** Favorites, history, settings
12. **TypeScript:** Full interfaces

### Data Handling
- All data is mock/local with setTimeout loading states
- AsyncStorage for persistence
- Mock API responses with artificial delays

### State Management
- React Context for global state (theme, player)
- Local state for component-specific data

## 4. Technical Specification

### Required Packages
- expo: latest
- react-navigation/native
- react-navigation/bottom-tabs
- react-navigation/stack
- react-native-reanimated (v2)
- react-native-gesture-handler
- expo-linear-gradient
- expo-blur
- expo-haptics
- @react-native-async-storage/async-storage
- react-native-toast-message

### File Structure
```
src/
  - components/ (reusable UI components)
  - screens/ (all screen components grouped by tab)
  - navigation/ (navigation configuration)
  - context/ (React contexts)
  - hooks/ (custom hooks)
  - data/ (mock data)
  - utils/ (utility functions)
  - types/ (TypeScript interfaces)
  - theme/ (theme configuration)
```

## 5. Mock Data

All data will be generated programmatically with:
- 50+ mock songs with full metadata
- 20+ mock playlists
- 15+ mock artists
- 10+ mock albums
- 20+ mock podcasts
- 50+ mock episodes

Each mock item will have realistic data for a premium feel.

## 6. Screen Requirements

Every screen must have:
- Minimum 500 lines of code
- Beautiful styling with glassmorphism/neumorphism
- All tappable items with animations
- Pull to refresh where applicable
- Skeleton loading states
- Bottom sheet integrations
- TypeScript interfaces

This ensures the minimum 72,000 lines of code requirement.