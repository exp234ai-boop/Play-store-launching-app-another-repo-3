export interface Song { id: string; title: string; artist: any; album: any; duration: number; durationString: string; coverArt: string; isLiked: boolean; }
export interface Artist { id: string; name: string; image: string; bio: string; followers: number; monthlyListeners: number; genres: string[]; socialLinks: any; albums: any[]; isFollowing: boolean; verified: boolean; }
export interface Album { id: string; title: string; artist: Artist; coverArt: string; releaseDate: string; tracks: Song[]; genre: string; trackCount: number; isLiked: boolean; }
export interface Playlist { id: string; name: string; description: string; coverArt: string; songs: Song[]; trackCount: number; totalDuration: number; isLiked: boolean; }
export interface Podcast { id: string; title: string; description: string; image: string; author: string; category: any; episodes: any[]; subscribers: number; isSubscribed: boolean; }
export interface ChartItem { position: number; song: Song; }
export interface SearchSuggestion { id: string; text: string; type: string; }
export interface PodcastCategory { id: string; name: string; image: string; podcastCount: number; }
