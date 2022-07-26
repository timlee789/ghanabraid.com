import cla from '../styles/form.module.css';

import { useState } from 'react';


export default function Home({landingdata}) {
  const [pass, setPass] = useState()
 
  const handleChange =(e) => setPass(e.target.value);
 

  return (
    <div className={cla.main}>
      
      <main className={cla.body}>
      
       
       <div className={cla.phototitle}>SNS Advertising Stores</div>
       <div className={cla.album}>
       {/* <form>
          <input type='text' onChange={handleChange} placeholder='Enter password'/>
          <button>LOGIN</button>
        </form> */}
        
        
       {/* <StoreList storeList={landingdata} /> */}
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

