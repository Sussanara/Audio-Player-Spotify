import React, { useRef, useState, useEffect } from "react";
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
  let idRef = useRef(null);
  const [audios] = useState(initialState);
  let audioRef = useRef(null);
  const setAudioSelected = ({ id }) => {
    idRef.current = id;
    for (var song of audios) {
      if (song.id === idRef.current) {
        audioRef.current.src = song.src;
      }
    }
    bplay();
  };

  const previous = () => {
    if (idRef.current === null) {
      setAudioSelected({ id: initialState.length });
    } else if (idRef.current === 1) {
      setAudioSelected({ id: initialState.length });
    } else {
      idRef.current = idRef.current - 1;
      setAudioSelected({ id: idRef.current });
    }
  };
  const bplay = () => {
    audioRef.current.play();
  };
  const pause = () => {
    audioRef.current.pause();
  };
  const next = () => {
    if (idRef.current === null) {
      setAudioSelected({ id: 2 });
    } else if (idRef.current === initialState.length) {
      setAudioSelected({ id: 1 });
    } else {
      idRef.current = idRef.current + 1;
      setAudioSelected({ id: idRef.current });
    }
  };

  useEffect(() => {
    getAudios();
  }, [])
  
  const getAudios = () => {
    fetch("https://assets.breatheco.de/apis/sound/songs", {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then ((response) => {
      return response.json(); 
    })
    .then((data) => { 
      console.log(data)})
  
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <>
      <Playlist audios={audios} setAudioSelected={setAudioSelected} />
      <Play1
        audioRef={audioRef}
        setAudioSelected={setAudioSelected}
        previous={previous}
        bplay={bplay}
        pause={pause}
        next={next}
      />
    </>
  );
};

export default Home;
