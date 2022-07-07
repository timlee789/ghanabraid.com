import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import axios from 'axios';
import StoreList from './storeList';
import Head from 'next/head';

export default function Caribbeanstyle({storename}) {
  
    
  return (
    <div className={cla.main}>
     
      <main className={cla.body}>
     
        
       <div className={cla.title}>
        3X Ghana Braid Giveaway Event
       </div>
      
       <div className={cla.phototitle}>Realistic 3X Ghana Braid</div>
       <div className={cla.album}>
       
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid is Highend Braid</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto5.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 100% Kanekalon </div>
      
       <div className={cla.videotitle}>3X Ghana Braid in Bahamas Cable Beach</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanacolor.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid over 50 different colors</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanapackage.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div>
       
       <div className={cla.videotitle}>3X Ghana Braid in Kingston Jamaica</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto2.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}> Try new style with 3X Ghana Braid  </div>
       
       <div className={cla.videotitle}>3X Ghana Braid in Wynwood Miami FL</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto1.jpg' alt='banner' className={cla.image}/>
      
       <img src='https://bijouxhair.com/tim/landing2/3xghanaspec.jpg' alt='banner' className={cla.image}/>
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      </div>
      </div>
       </div>
      </main>

</div>
  )
}
