import React, { useRef, useState } from "react";
import Play1 from "./Play.js";
import Playlist from "./Playlist.js";


const initialState = [
  {
    id: 1,
    src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
    name: "1 Mario's castle theme",
  },
  {
    id: 2,
    src: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3",
    name: "2 Mario's Hurry-Starman theme",
  },
  {
    id: 3,
    src: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
    name: "3 Mario's Overworld theme",
  },
];


const Home = () => {
  const [audios] = useState(initialState);
  const [actualSong, setActualSong] = useState(null)
  let audioRef = useRef(null);
  const setAudioSelected = ({ src }) => {
    audioRef.current.src = src;
    bplay();
  };

  
  
  const previous = () => {

  }
  const bplay = () => {
    audioRef.current.play()
  }
  const pause = () => {
    audioRef.current.pause()
  }
  const next = () => {
    audioRef.current.src = audioRef.current.src[alt+1];
  }
   

  return (
    <>
      <Playlist audios={audios} setAudioSelected={setAudioSelected} />
      <Play1 audioRef={audioRef} setAudioSelected={setAudioSelected} previous={previous} bplay={bplay} pause={pause} next={next}/>
    </>
  );
  }

export default Home;