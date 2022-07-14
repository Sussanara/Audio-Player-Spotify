import React, { useRef, useState } from 'react';

const Canciones = ({ src, alt = 'Audio', setAudioSelected, name }) => {
    return (
        <>
            <ul className="list-group" onClick={() => setAudioSelected({src : src})}>
                <li className="list-group-item" alt={alt}>{name}</li>
            </ul>
        </>
    )
}

export default Canciones;