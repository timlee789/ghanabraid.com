import React, {  useState} from 'react';
import cla from '../styles/Home.module.css';


function store(props) {
 
  return (
    
    <div className={cla.card}>
        <a href={`/${props.storename}`} >
         <img src={props.img1}  width="300" height='400' />
         </a>
        <div className={cla.title}>{props.name}</div>
        <div className={cla.url}>https://ghanabraid.com/{props.storename}</div>
        <div className={cla.title}>STATE : {props.state}</div>
        <div>
        <a href={`/storeid/${props.id}`} >
          <button className={cla.btn}>STORE AD STATUS</button>
          </a>
        
          </div>
        </div>
  )
        
   
}

export default store