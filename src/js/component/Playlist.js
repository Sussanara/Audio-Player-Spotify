import React, { useRef, useState } from "react";
import Canciones from "./Canciones.js";

const Playlist = (props) => {
  return (
    <div className="container mt-3">
      <div className="list-group">
        {props.audios.length > 0 &&
          props.audios.map((audio) => (
            <div className="col" key={audio.id}>
              <Canciones
                src={audio.src}
                alt={`Image ${audio.id}`}
                setAudioSelected={props.setAudioSelected}
                name={audio.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Playlist;