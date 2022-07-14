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
  let audioRef = useRef(null);
  const setAudioSelected = ({ src }) => {
    audioRef.current.src = src;
    bplay();
  };

  const previous = () => {
    let position= useRef!== null ? useRef == 0 ? state.length -1 : useRef -1 : 0; 
    setAudioSelected (state[position].url, position);
    bplay();
  }

  const bplay = () => {
    audioRef.current.play()
  }
  const pause = () => {
    audioRef.current.pause()
  }
  const next = () => {
    let position= songsActive !== null ? songsActive == state.length - 1 ? 0 : songsActive + 1 : 0;
    setSingleSong(state[position].url, position)
  }
  return (
    <>
      <Playlist audios={audios} setAudioSelected={setAudioSelected} />
      <Play1 audioRef={audioRef} setAudioSelected={setAudioSelected} previous={previous} bplay={bplay} pause={pause} next={next}/>
    </>
  );
};

export default Home;