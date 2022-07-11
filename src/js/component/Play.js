import React, { useRef, useState } from 'react';


const previous = {
    
}
const bplay = {

}
const pause = {

}
const next = {

}
const Play1 = (props) => {
    return (
        <div className="btn">
            <button className="btn-sm" onClick={previous}id="boton"><i class="fas fa-arrow-circle-left fa-2x"></i></button>
            <button className="btn-sm" onClick={bplay}><i class="far fa-play-circle fa-2x"></i></button>
            <button className="btn-sm" onClick={pause}><i class="far fa-pause-circle fa-2x"></i></button>
            <button className="btn-sm" onClick={next}><i class="fas fa-arrow-circle-right fa-2x"></i></button>
        <div className= "rep">
            <audio ref={props.audioRef} controls autoPlay ></audio>
            </div>
        </div>
    )
}


export default Play1;