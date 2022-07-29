
import cla from '../styles/form.module.css';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  
     const refName = useRef();
     const refTel = useRef();
     const refEmail = useRef();
    
     const router = useRouter()
     const [Radio, setRadio] = useState();
     const [Check, setCheck] = useState();
     async function submitHandler(event) {
       event.preventDefault();
       const enteredName = refName.current.value;
       const enteredTel = refTel.current.value;
       const enteredEmail = refEmail.current.value;
       const enteredPrize = Radio;
       const enteredCheck = Check;
      
       const inputData ={
         name: enteredName,
         tel: enteredTel,
         email: enteredEmail,
         prize: enteredPrize,
         beautician: enteredCheck,
         date: Date(),
       }
       console.log(inputData);
       addDataHandler(inputData)

        document.getElementById('name').value='';
        document.getElementById('tel').value='';
        document.getElementById('email').value='';
        document.getElementsByName('prize').value='';
        document.getElementsByName('beautician').value='';
     }
     async function addDataHandler(inputData) {

      const response = await fetch('/api/texasevent',
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
      <main >
        <center>     
      <Image src='https://bijouxhair.com/tim/landing2/ghanatwisthead.jpg' alt='banner' width='800px' height='500px'/>
  
       <form onSubmit={submitHandler}>
       <div className={cla.ula2}>Fill out the Registration and Win !</div>
       <div className={cla.inputframe}>
         <input type='text' id='name' ref={refName} placeholder='Name' className={cla.inputbox} required /><br/>
         <input type='text' id='tel' ref={refTel} placeholder='Phone Number' className={cla.inputbox} required /><br/>
         <input type='text' id='email' ref={refEmail} placeholder='email' className={cla.inputbox} required />
         </div>
         <fieldset  className={cla.fieldset}>
         <div className={cla.ula2}>
			<legend >Which Hair do you prefer</legend>
      </div>
			<label className={cla.container}>Butterfly Locs 24 inch 
				<input  type="checkbox" value='butterflylocs' checked={Radio ==='butterflylocs'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox}/>       
        <span className={cla.checkmark}></span>
			</label>
      <label className={cla.container}>Passion Twist 24 inch
				<input  type="checkbox" value='passiontwist' checked={Radio ==='passiontwist'} onChange={(e) =>setRadio(e.target.value)} name='prize' className={cla.inputbox} />       
        <span className={cla.checkmark}></span>
			</label>
     
		</fieldset>
   
    <fieldset  className={cla.fieldset}>
    <div className={cla.ula2}>
    <legend >Beautician ?</legend>
    </div>
          <label className={cla.container}>I am a beautician.
              <input  type="radio" value='beautician' checked={Check ==='beautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />       
              <span className={cla.checkmark}></span>
            </label>
          <label className={cla.container}>I am not a beautician.
              <input  type="radio" value='nobeautician' checked={Check ==='nobeautician'} onChange={(e) =>setCheck(e.target.value)} name='beautician' className={cla.inputbox} />       
              <span className={cla.checkmark}></span>
            </label>
      </fieldset>
         <button className={cla.btn}>Submit</button>
       </form>
     
       <div className={cla.textbox}>
       <h3>To get the free giveaway Ghana Twist Hair: </h3>
       <ul className={cla.ula}>
         <li>Fill out the registration above.</li>
         <li>Select the Ghana Twist Hair you want bellow.</li>
         
         <li>5 winners are selected every 2 weeks.</li>
         <li>The hair (3 packs each winner) will be sent by mail.</li>
       </ul>
         
       </div>
       </center>
       <div className={cla.phototitle}>Ghana Twist </div>
       <div className={cla.album}>
       <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/ad/butterfly2.jpg' alt='dlfd' className={cla.image} width='600px' height='720'/>
          
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
          <Image src='https://bijouxhair.com/tim/ad/passiontwist2.jpg' alt='dlfd' className={cla.image}  width='600px' height='720'/>
          
        </div>
        </div>
        
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="340" height="170" src="https://www.youtube.com/embed/zHF94OrbGZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Butterfly Locs</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="340" height="170" src="https://www.youtube.com/embed/HxiXwmNJ8Kw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Butterfly Locs</center>
        </div>
        </div>
        <div className={cla.album} >
        <div className={cla.box} >
        <iframe width="340" height="170" src="https://www.youtube.com/embed/BJN6GuMt4Qc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Butterfly Locs</center>
        </div>
       </div>
       <div className={cla.album} >
        <div  className={cla.box} >
        <iframe width="340px" height="170" src="https://www.youtube.com/embed/hXoOTDoaLvc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
           <center className={cla.name}>Ghana Passion Tiwst</center>
        </div>
        </div>
       
       <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/" target='_blank' rel="noreferrer"
          ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      </div>
      </div>
     
      </main>
</div>
  )
}
