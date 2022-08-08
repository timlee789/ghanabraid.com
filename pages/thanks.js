import React from 'react'
import cla from '../styles/form.module.css';
function Thanks() {
  return (
    <div>
         
        <main>
        <center>
       
      <img src='https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg' alt='banner'/>
        <div className={cla.thanks}>
        Thanks for participating.<br/>
        We annouce the winners every 2 weeks by Instagram and contact the winners by email.
       <br/> And send giveaway by UPS as soon as we get the winners address.
       </div>
       </center>
       
      </main>
      {/* <!-- FOOTER --> */}


      <div>
      <div className={cla.footer}>
        <div className={cla.footimage}>
        <a href="https://bijouxhair.com/"
          ><img alt=""  src="https://bijouxhair.com/catalog/webmain/beautyelementlogo.jpg" /></a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Thanks