import React from 'react';
import Room from './Room';
import {Link} from 'react-router-dom';

export default function Main() {

    const rando = () => {
       return  Math.floor(Math.random() * 100)
    }

    return (
        <div id="door">
<div id="room-num">
    Room {rando()}
</div>
<div>
<Link to="/room"><button id="enterButton">Enter</button></Link>
</div>


        </div>
    )
} 