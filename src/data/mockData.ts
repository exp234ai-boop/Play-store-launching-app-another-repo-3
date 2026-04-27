import { Song, Artist, Album, Playlist, Podcast, PodcastCategory } from "../types";
const artistNames = ["Aurora Skies","Midnight Pulse","Electric Dreams","Crystal Echo","Neon Horizon","Shadow Frequency","Lunar Wave","Solar Flare","Cosmic Drift","Urban Symphony"];
const albumTitles = ["Ethereal Nights","Digital Dawn","Frequency Shift","Quantum Leap","Stellar Journey","Infinite Loop","Sonic Horizons","Beat Revolution","Wave Function","Crystal Matrix"];
const playlistNames = ["Chill Vibes","Workout Energy","Late Night Drive","Focus Mode","Party Starter","Throwback Hits","Mood Booster","Acoustic Sessions","Electronic Mix","Indie Discoveries"];
const songTitles = ["Starlight Serenade","Midnight Magic","Electric Heart","Cosmic Dance","Crystal Waters","Neon Lights","Shadow Games","Lunar Dream","Solar Wind","Urban Jungle"];
const podcastTitles = ["Daily Insights","Tech Talk","True Crime Files","Comedy Hour","News Digest","Education Express","Science Simplified","History Revealed","Business Boss","Health Hub"];
const categories: PodcastCategory[] = [
  {id:"1",name:"True Crime",description:"Investigative stories",image:"https://picsum.photos/seed/truecrime/400",podcastCount:45},
  {id:"2",name:"Comedy",description:"Laugh-out-loud",image:"https://picsum.photos/seed/comedy/400",podcastCount:78},
  {id:"3",name:"News",description:"Current events",image:"https://picsum.photos/seed/news/400",podcastCount:56},
  {id:"4",name:"Education",description:"Learn something new",image:"https://picsum.photos/seed/education/400",podcastCount:89},
];

export const generateArtists = (): Artist[] => artistNames.map((name,i)=>({id:`artist-${i}`,name,image:`https://picsum.photos/seed/${name.replace(" ","")}/400`,bio:`${name} is amazing`,followers:Math.floor(Math.random()*1e6),monthlyListeners:Math.floor(Math.random()*5e6),genres:["Electronic"],socialLinks:{},albums:[],isFollowing:Math.random()>0.7,verified:Math.random()>0.5}));
export const generateAlbums = (artists: Artist[]): Album[] => artists.map((artist,i)=>({id:`album-${i}`,title:albumTitles[i%10],artist,coverArt:`https://picsum.photos/seed/album${i}/400`,releaseDate:"2024-01-01",tracks:[],genre:"Electronic",trackCount:10,isLiked:false}));
export const generatePlaylists = (): Playlist[] => playlistNames.map((name,i)=>({id:`playlist-${i}`,name,description:"Curated playlist",coverArt:`https://picsum.photos/seed/playlist${i}/400`,songs:[],trackCount:15,totalDuration:3600,isLiked:Math.random()>0.7}));
export const generatePodcasts = (): Podcast[] => podcastTitles.map((title,i)=>({id:`podcast-${i}`,title,description:"Podcast description",image:`https://picsum.photos/seed/podcast${i}/400`,author:`Host ${i}`,category:categories[i%4],episodes:[],subscribers:Math.floor(Math.random()*5e5),isSubscribed:Math.random()>0.6}));

const artists = generateArtists();
export const MOCK_ARTISTS = artists;
export const MOCK_ALBUMS = generateAlbums(artists);
export const MOCK_PLAYLISTS = generatePlaylists();
export const MOCK_PODCASTS = generatePodcasts();
export const MOCK_CATEGORIES = categories;
export const MOCK_NEW_RELEASES = MOCK_ALBUMS.slice(0,10);
export const MOCK_RECOMMENDED = MOCK_PLAYLISTS.slice(0,10);
