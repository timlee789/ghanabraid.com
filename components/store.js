import React from 'react';
import cla from '../styles/PizzaCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

function store(props) {
   //console.log(pizza)
  return (
    <div className={cla.container}>
        <a href={`/${props.storename}`} >
         <img src={props.img1}  width="300" height='400' />
         </a>
        <h2 className={cla.title}>{props.storename}</h2>
       
        <p className={cla.desc}>{props.desc}</p>
        
    </div>
  )
}

export default store