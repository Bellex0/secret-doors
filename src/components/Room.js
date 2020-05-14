import React from 'react';
// import Sound from 'react-sound';
import UIfx from 'uifx'
import alien from '../music/alien.mp3'
import tribal from '../music/tribalDrums.mp3'
import drumCircle from '../music/drumCircle.mp3'
import bell from '../music/bells.mp3'

export default function Room() {

var isPlaying = false;

const alienSong = new UIfx (
   alien,
    {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )
function togglePlay () {
  if (isPlaying) {
    return null
  } else {
    alienSong.play();
  }
};

const tribalSong = new UIfx (
    tribal,
     {
       volume: 0.4, // number between 0.0 ~ 1.0
       throttleMs: 100
     }
   )

   function togglePlay1 () {
    if (isPlaying) {
      return null
    } else {
      tribalSong.play();
    }
  };

  const drumCircleSong = new UIfx (
      drumCircle, 
      {
        volume: 0.4, // number between 0.0 ~ 1.0
        throttleMs: 100
      }
  )

  const bellSong = new UIfx (
      bell, {
        volume: 0.4, // number between 0.0 ~ 1.0
        throttleMs: 100
      }
  )

    const handleClick = () => {
        return drumCircleSong.play()
    }

    const handleClick2 = () => {
        return bellSong.play()
    }

   return (
       <div id="button-grid">
           <button id="playBtn" onClick={togglePlay}>1</button>
           <button id="playBtn" onClick={togglePlay1}>2</button>
           <button id="playBtn" onClick={handleClick}>3</button>
           <button id="playBtn" onClick={handleClick2}>4</button>

       </div>
   ) 
}