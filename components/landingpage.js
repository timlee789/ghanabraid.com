import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import Modals1 from './Modals1';

export default function LandingPage({storename}) {
  
     const refName = useRef();
     const refTel = useRef();
     const refEmail = useRef();
    
     const router = useRouter()
     const [Radio, setRadio] = useState();
     
     async function submitHandler(event) {
       event.preventDefault();
       const enteredName = refName.current.value;
       const enteredTel = refTel.current.value;
       const enteredEmail = refEmail.current.value;
       const enteredPrize = Radio;
      
       const inputData ={
         name: enteredName,
         tel: enteredTel,
         email: enteredEmail,
         prize: enteredPrize,
         date: Date(),
       }
       console.log(inputData);
       addDataHandler(inputData)

        document.getElementById('name').value='';
        document.getElementById('tel').value='';
        document.getElementById('email').value='';
        document.getElementsByName('prize').value='';
     }
     async function addDataHandler(inputData) {

      const response = await fetch('/api/post',
          {
              method: 'POST',
              body: JSON.stringify(inputData),
              headers: {
                  'Content-type': 'application/json'
              }
          })
      const data = await response.json();
      router.push('/thanks')
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
     
        <center>
       <div className={cla.title}>3X Ghana Braid Giveaway Event</div>
      
       <a href='https://bijouxhair.com' target='_blank' rel="noreferrer">
      <img src={storename.img1} alt='banner' className={cla.image}/></a>

      
      <div className={cla.ula}>Fill out the registration</div>
      <div className={cla.inputframe}>
      <form onSubmit={submitHandler}>
         <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox} required /><br/>
         <input type='text' id='tel' ref={refTel} placeholder='Tel' className={cla.inputbox} required /><br/>
         <input type='text' id='email' ref={refEmail} placeholder='Email' className={cla.inputbox} required /> 
         <button className={cla.btn}>Submit</button>
       </form>
       </div>
       <div className={cla.textbox}>
       <ul className={cla.ula}>
         <li> 5 winners are selected every Monday.</li>
       </ul>
       </div>
       </center>
       <div>
       <Modals1/>
       <div className={cla.videotitle}>Caribbean Braid Hair Style - Click here </div>
       </div>
        
      
       <div className={cla.phototitle}>Realistic 3X Ghana Braid</div>
       <div className={cla.album}>
       
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid is Highend Braid</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto5.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 100% Kanekalon </div>
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/dr8M6brJB4s?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Bahamas</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanacolor.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>Over 50 different colors</div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanapackage.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div>
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/mnM5Noi_W7c?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Kingston Jamaica</div>
       <div >
      <a href="https://www.cosmopolitan.com/style-beauty/beauty/g36815240/ghana-braids-ideas/" target="_blank" rel="noreferrer">
        <img src='https://bijouxhair.com/tim/landing2/cosmopolitanbtn.jpg' alt='btn' className={cla.stylealbum}/>
        <div className={cla.videotitle}>From Cosmopolitan Magazin </div>
      </a>
      </div>
       <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto2.jpg' alt='banner' className={cla.image}/>
       <div className={cla.videotitle}> Try new style with 3X Ghana Braid  </div>
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/uDyX878Q8mc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
