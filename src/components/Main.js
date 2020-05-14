import React from 'react';
import Room from './Room';
import {Link} from 'react-router-dom';

export default function Main() {

    const rando = () => {
       return  Math.floor(Math.random() * 100)
    }

    return (
        <div id="door">
<div >
    <h1 id="room-num">Room {rando()}</h1>
</div>
<div>
<Link to="/room"><button id="enterButton">Enter</button></Link>
</div>


        </div>
    )
} 