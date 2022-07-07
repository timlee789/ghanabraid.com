import React, {useState } from 'react';
import Image from 'next/image';
import CaribbeanStyle from './caribbeanstyle';
import cla from '../styles/form.module.css';

function Modals1() {
    const[showModal, setShowModal] = useState(false);
  

  return (
    <div className='flex md:flex-col justify-center items-center mt-40'>
        <div className='flex-gap-5'>
        <button onClick={() => setShowModal(true)}>
        <img src='https://bijouxhair.com/tim/landing2/caribbeanbtn.jpg' alt='btn' />
         </button>
        </div>
        {showModal ? 
        (<div>
            <div className={cla.closebtn}>
            <button onClick={() => setShowModal(false)} >
             X CLOSE
            </button>
            </div>
            <CaribbeanStyle />
        </div>)
        : null}
    </div>
  )
}

export default Modals1