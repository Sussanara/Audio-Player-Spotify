import React, { useRef, useState } from 'react';

const canciones = ({src, alt= "Audio", setaudSelected, name }) => {
    return(
        <>
        <ul className='list-group' onClick={() => setaudSelected({src : src})}>
            <li src={src} className="list-group-item" alt={alt}>{name}</li>
        </ul>
        </>
    )
}
export default canciones;