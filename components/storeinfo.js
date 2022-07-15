import { useState } from 'react';
import cla from '../styles/storeinfo.module.css';


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
        <div className={cla.campaignunit}>
        <div className={cla.campaigntitle}>
          Store Name : {storeinfo.name} {storeinfo.contents}
        </div>
        <div className={cla.campaigntitle}>
        Period : {storeinfo.campaign}
        </div>
        <div className={cla.campaigntitle}>
        AD Contents : <img src={storeinfo.contents} alt='r'  className={cla.contentsimage}/>
        </div>
        <div className={cla.campaigntitle}>
        AD Result : 
        </div>
        <div className={cla.campaignresult}>
        <br/>Reach- 8900 <br/>  Visit - 560 <br/> Participation - 28
        </div>
        </div>
       
       </div>
       <div className={cla.textbox}>
       <ul className={cla.ula}>
         <li> UPLOAD STORE PHOTOS</li>
         <li> UPLOAD STORE FLYER</li>
       </ul>
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
