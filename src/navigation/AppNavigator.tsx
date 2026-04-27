import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';

import { HomeScreen, PlaylistScreen, NowPlayingScreen, LyricsScreen, QueueScreen } from '../screens/Home';
import { SearchScreen } from '../screens/Search';
import { LibraryScreen } from '../screens/Library';
import { PlayerScreen } from '../screens/Player';
import { PodcastsScreen } from '../screens/Podcasts';
import { COLORS, SPACING, FONTS } from '../theme';
import { useTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const PlayerStack = createStackNavigator();
const PodcastsStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeMain" component={HomeScreen} />
    <HomeStack.Screen name="Playlist" component={PlaylistScreen} />
    <HomeStack.Screen name="NowPlaying" component={NowPlayingScreen} />
    <HomeStack.Screen name="Lyrics" component={LyricsScreen} />
    <HomeStack.Screen name="Queue" component={QueueScreen} />
  </HomeStack.Navigator>
);

const SearchStackNavigator = () => (
  <SearchStack.Navigator screenOptions={{ headerShown: false }}>
    <SearchStack.Screen name="SearchMain" component={SearchScreen} />
  </SearchStack.Navigator>
);

const LibraryStackNavigator = () => (
  <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
    <LibraryStack.Screen name="LibraryMain" component={LibraryScreen} />
  </LibraryStack.Navigator>
);

const PlayerStackNavigator = () => (
  <PlayerStack.Navigator screenOptions={{ headerShown: false }}>
    <PlayerStack.Screen name="PlayerMain" component={PlayerScreen} />
  </PlayerStack.Navigator>
);

const PodcastsStackNavigator = () => (
  <PodcastsStack.Navigator screenOptions={{ headerShown: false }}>
    <PodcastsStack.Screen name="PodcastsMain" component={PodcastsScreen} />
  </PodcastsStack.Navigator>
);

interface TabIconProps {
  icon: string;
  label: string;
  focused: boolean;
  color: string;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, label, focused, color }) => (
  <View style={styles.tabIconContainer}>
    <Text style={[styles.tabIcon, { color }]}>{icon}</Text>
    <Text style={[styles.tabLabel, { color }]}>{label}</Text>
  </View>
);

export const AppNavigator = () => {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? COLORS.dark : COLORS.light;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.tabBar.background,
          borderTopColor: colors.tabBar.border,
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: colors.tabBar.active,
        tabBarInactiveTintColor: colors.tabBar.inactive,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="🏠" label="Home" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="🔍" label="Search" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="📚" label="Library" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PlayerTab"
        component={PlayerStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="🎵" label="Player" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Podcasts"
        component={PodcastsStackNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="🎙️" label="Podcasts" focused={focused} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 22,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
  },
});