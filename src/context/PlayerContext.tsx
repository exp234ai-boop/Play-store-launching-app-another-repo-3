import React, { createContext, useContext, useState, ReactNode } from "react";
import { Song, PlayerState } from "../types";
import * as Haptics from "expo-haptics";

interface PlayerContextType { player: PlayerState; playSong: (song: Song) => void; togglePlayPause: () => void; nextSong: () => void; previousSong: () => void; }
const PlayerContext = createContext<PlayerContextType|undefined>(undefined);

const initial: PlayerState = { currentSong:null, isPlaying:false, progress:0, duration:0, shuffle:false, repeat:"off", volume:0.8, queue:[], queueIndex:0, history:[] };

export const PlayerProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [player, setPlayer] = useState<PlayerState>(initial);
  const playSong = (song: Song) => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); setPlayer(p=>({...p, currentSong:song, isPlaying:true, progress:0})); };
  const togglePlayPause = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); setPlayer(p=>({...p, isPlaying:!p.isPlaying})); };
  const nextSong = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); };
  const previousSong = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); };
  return <PlayerContext.Provider value={{player, playSong, togglePlayPause, nextSong, previousSong}}>{{children}}</PlayerContext.Provider>;
};
export const usePlayer = () => { const c = useContext(PlayerContext); if(!c) throw new Error("usePlayer must be used within PlayerProvider"); return c; };
