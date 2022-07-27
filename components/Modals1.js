import React, {useState } from 'react';
import Image from 'next/image';
import TapeClip from './TapeClip';
import cla from '../styles/form.module.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
function Modals1() {
    const[showModal, setShowModal] = useState(false);
  

  return (
    <div  >
        <div>
        <button onClick={() => setShowModal(true)} >
        <img src='https://bijouxhair.com/tim/landing2/caribbeanbtn.jpg' alt='btn' className={cla.stylealbum}/> 
         </button>
        </div>
        {showModal ? 
        (<div>
            <div className={cla.closebtn}>
            <button onClick={() => setShowModal(false)} >
             X CLOSE
            </button>
            </div>
            <TapeClip />
        </div>)
        : null}
    </div>
  )
}

export default Modals1