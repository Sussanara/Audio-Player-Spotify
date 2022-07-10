import React, { useRef, useState } from "react";
import playlist from "./playlist.js";

const initialState = [
  {
    id: 1,
    category: "game",
    name: "Mario Castle",
    url: "files/mario/songs/castle.mp3",
  },
  {
    id: 2,
    category: "game",
    name: "Mario Star",
    url: "files/mario/songs/hurry-starman.mp3",
  },
  {
    id: 3,
    category: "game",
    name: "Mario Overworld",
    url: "files/mario/songs/overworld.mp3",
  },
];

const Home = () => {
  const [Audio] = useState(initialState);
  let audRef = useRef(null);
  const setaudSelected = ({ src }) => {
    audRef.current.src = src;
    reproducir = play();
  };

  return (
    <>
      <h5>Music Player</h5>
      <div className="container">
        <playList Audio={Audio} setaudSelected={setaudSelected} />
        <play audRef={audRef} setaudSelected={setaudSelected} />
      </div>
    </>
  );
};

export default Home;