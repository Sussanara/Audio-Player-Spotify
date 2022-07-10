import React, { useRef, useState } from 'react';
const estiloDiv = {
    width: "400px"
}

const playlist = (props) => {

    return (
        <div className="list-group" style={estiloDiv}>
            {
                props.Audio.length > 0 &&
                props.Audio.map((Audio) => (
                    <div className='col' key={Audio.id}>
                        <canciones src={Audio.src} alt={`Image ${Audio.id}`} setaudSelected={props.setaudSelected} name={Audio.name} />
                    </div>
                ))
            }
        </div>
    )
}


export default playlist; 