import { useState } from 'react';
import cla from '../styles/storeinfo.module.css';
import Image from 'next/image';

export default function StoreInfo({storeinfo}) {
 
  return (
    <div className={cla.main}>
      <main className={cla.body}>
        <center>
       <a href='https://bijouxhair.com' target='_blank' rel="noreferrer">
      <img src={storeinfo.img1} alt='banner' className={cla.image}/></a>

      
      <div className={cla.inputframe}>
          
        <div className={cla.storename}>
          Campaign INFO:
        </div>

        
               { storeinfo.campaign.map((cam, index) => (
               <div key={cam.reach} className={cla.campaigninfobox}>
                <div>
                    <div className={cla.campaignresult}> Event Name : <span className={cla.data2}>{cam.campaignname}</span></div>
                    <div className={cla.campaignresult}> Event Period : <span className={cla.data}>{cam.period}</span> </div>
                    <div className={cla.campaignresult}>Number of AD Reach Person :<span className={cla.data}> {cam.reach}</span></div>
                    <div className={cla.campaignresult}> Number of Landing Page Visitors:<span className={cla.data}> {cam.visit}</span></div>
                    <div className={cla.campaignresult}> Event Participants : <span className={cla.data}> {cam.participation}</span></div>
                </div>
                <div> 
                   
                    
                      <Image src={cam.content} alt={cam.campaignname} width='200px' height='200px'/>
                </div>

               </div>
      
            ))}        
        
       </div>
       
     
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      </div>
      </div>
       </center>
        </main>
       
     
       </div>
      


  )
}
