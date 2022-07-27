import React from 'react';
import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';

function Ghanabraid( ) {
   
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
    <div>
        
        <center>
      

      
      <div className={cla.ula}>Fill out the Registration and Win !</div>
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
         <li> - 5 winners will be selected every Monday.</li>
         <li> - 5 Packs 3x Ghana braid 50 for each Winner.</li>
       </ul>
       </div>
       </center>
       {/* <div>
       <Modals1/>
       <div className={cla.videotitle}>Caribbean Braid Hair Style - Click here </div>
       </div> */}
        
      
       <div className={cla.phototitle}>Realistic 3X Ghana Braid</div>
       <div className={cla.album}>
       <Image src='https://bijouxhair.com/tim/landing2/3xghanapackage.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 40 50 60 70</div>
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid is Highend Braid</div>
       <Image src='https://bijouxhair.com/tim/landing2/3xghanacolor.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>Over 50 different colors</div>
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto5.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}>3X Ghana Braid 100% Kanekalon </div>
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/uDyX878Q8mc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Wynwood Miami FL</div>
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/dr8M6brJB4s?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Bahamas</div>   
       <iframe width="100%" height="300" src="https://www.youtube.com/embed/mnM5Noi_W7c?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
       <div className={cla.videotitle}>3X Ghana Braid in Kingston Jamaica</div>
       <div >
      {/* <a href="https://www.cosmopolitan.com/style-beauty/beauty/g36815240/ghana-braids-ideas/" target="_blank" rel="noreferrer">
        <Image src='https://bijouxhair.com/tim/landing2/cosmopolitanbtn.jpg' alt='btn' className={cla.stylealbum}/>
        <div className={cla.videotitle}>From Cosmopolitan Magazin </div>
      </a> */}
      </div>
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto2.jpg' alt='banner' width='800px' height='960px' className={cla.image}/>
       <div className={cla.videotitle}> Try new style with 3X Ghana Braid  </div>
      
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaphoto1.jpg' alt='banner' width='800px' height='900px' className={cla.image}/>
      
       <Image src='https://bijouxhair.com/tim/landing2/3xghanaspec.jpg' alt='banner' width='600px' height='200px' className={cla.image}/>
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><Image alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" width='250px' height='100px' /></a>
      </div>
      </div>
       </div>
    </div>
  )
}

export default Ghanabraid