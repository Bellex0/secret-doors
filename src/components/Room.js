import React from 'react';
import Sound from 'react-sound';
import UIfx from 'uifx'
import alien from '../music/alien.mp3'
import tribal from '../music/tribalDrums.mp3'

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



    // const handleClick = (evt) => {
    //     console.log(evt.target.id)
    //     alienSong.toggleplay()
    // }
    
    // return  <Sound 
    //  url={alien}
    //  playStatus={Sound.status.PLAYING}
    //  />

   return (
       <div id="button-grid">
           <button id="btn1" onClick={togglePlay}>1</button>
           <button id="btn2" onClick={togglePlay1}>2</button>

       </div>
   ) 
}