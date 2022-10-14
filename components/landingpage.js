import cla from '../styles/form.module.css';
import Head from 'next/head';
import Ghanabraid from './Ghanabraid';
import Bundlehair from './Bundlehair';
import GhanaTwist from './GhanaTwist';
import TapeClip from './TapeClip';
import Modals1 from './Modals1';
import Modals2 from './Modals2';
import { Fragment, useState } from 'react';
import Destinywig from './Destinywig';
import Image from 'next/image';


export default function LandingPage({storename}) {
  const [menu, setMenu ] = useState(storename.img2)

          const camp = () => {
            switch(menu) {
              case '1' :
                return ( <Ghanabraid />)
              case '2' :
                return ( <TapeClip />)
              case '3' :
                return ( <Destinywig />)
              case '4' :
                return ( <Bundlehair />)
              case '5' :
                return ( <GhanaTwist />)
            }
            }
            const handleClick1 = (event) => {
              setMenu("1");
            }
            const handleClick2 = (event) => {
              setMenu("2");
            }
            const handleClick3 = (event) => {
              setMenu("3");
            }
            const handleClick4 = (event) => {
              setMenu("4");
            }
            const handleClick5 = (event) => {
              setMenu("5");
            }

  return (
    <div className={cla.main}>
    <Head>  
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
      {/* <div className={cla.title}>3X Ghana Braid Giveaway Event</div> */}
      
    
     <Image src={storename.img1} alt='banner' className={cla.image}  width="750" height="600"/>
    
       <div>
        
       <div className={cla.ula2}>On Going Free Giveaway Events !</div>
         <div className={cla.imagebtnbox}>
        
          <div className={cla.btnimage}  style={{display:"block"}}><button type='button' onClick={handleClick1}>
          <Image src="https://bijouxhair.com/tim/landing2/btnghanabraid2.jpg" alt='ddsl'  width={160} height={120} objectFit='cover'/>
          </button></div>
          
          <div className={cla.btnimage} ><button type='button' onClick={handleClick5}>
          <Image src="https://bijouxhair.com/tim/landing2/btnghanatwist2.jpg" alt='ddsl'  width={160} height={120} objectFit='cover' />
          </button></div>
         
         <div className={cla.btnimage} ><button type='button' onClick={handleClick3}>
          <Image src="https://bijouxhair.com/tim/landing2/btndestiny2.jpg" alt='ddsl'  width={160} height={120} objectFit='cover'/>
          </button></div>
          </div>
          

  
          <div className={cla.imagebtnbox}>
          <div className={cla.btnimage} ><button type='button' onClick={handleClick4}>
          <Image src="https://bijouxhair.com/tim/landing2/btntrio2.jpg" alt='ddsl'  width={160} height={120} objectFit='cover'/>
          </button></div>
          <div className={cla.btnimage} ><button type='button' onClick={handleClick2}>
          <Image src="https://bijouxhair.com/tim/landing2/btncliphair2.jpg" alt='ddsl'  width={160} height={120} objectFit='cover'/>
          </button></div>
         
         
          </div>
          
       </div>
       <div>{camp(storename.img2)}</div>
      
      {/* <Destinywig/> */}
          
      </main>

</div>
  )
}
