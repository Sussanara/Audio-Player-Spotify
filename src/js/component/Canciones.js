import React, { useRef, useState } from 'react';

const Canciones = ({ id, alt = 'Audio', setAudioSelected, name}) => {
    return (
        <>
            <ul className="list-group" onClick={() => {setAudioSelected({id: id})}}>
                <li className="list-group-item" alt={alt}>{name}</li>
            </ul>
        </>
    )
}

export default Canciones;