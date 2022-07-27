import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import Ghanabraid from './Ghanabraid';
import TapeClip from './TapeClip';
import Modals1 from './Modals1';
import Modals2 from './Modals2';
import { Fragment } from 'react';


export default function LandingPage({storename}) {
  

          const camp = () => {
            switch(storename.img2) {
              case '1' :
                return ( <Ghanabraid />)
              case '2' :
                return ( <TapeClip />)
            }
            }

  return (
    <div className={cla.main}>
    <Head>  
         <meta name="viewport" content="width=1150"/> 
        <title>3X Ghana Braid Giveaway Event</title>
        <meta name="description" content="3X Ghana Braid Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg" />     
        <meta property="og:title" content="3X Ghana Braid Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg"/>
        <meta property="og:description" content="3X Ghana Braid Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <main className={cla.body}>
      <div className={cla.title}>3X Ghana Braid Giveaway Event</div>
      
      <a href='https://bijouxhair.com' target='_blank' rel="noreferrer">
     <img src={storename.img1} alt='banner' className={cla.image} /></a>
       
      
       <div>{camp(storename.img2)}</div>
      
        
          
      </main>

</div>
  )
}
