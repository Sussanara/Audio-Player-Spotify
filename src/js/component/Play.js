import React, { useRef, useState } from 'react';



const Play1 = (props) => {

    return (
        <div className="btn">
            <button className="btn-sm" onClick={props.previous}><i className="fas fa-arrow-circle-left fa-2x"></i></button>
            <button className="btn-sm" onClick={props.bplay}><i className="far fa-play-circle fa-2x"></i></button>
            <button className="btn-sm" onClick={props.pause}><i className="far fa-pause-circle fa-2x"></i></button>
            <button className="btn-sm" onClick={props.next}><i className="fas fa-arrow-circle-right fa-2x"></i></button>
        <div className= "rep">
            <audio ref={props.audioRef} controls autoPlay ></audio>
            </div>
        </div>
    )
}


export default Play1;