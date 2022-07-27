import React from 'react';
import cla from '../styles/PizzaList.module.css';
import Store from './store';


function storeList({storeList}) {
  return (
    <div className={cla.container}>
       
        <div>
          <img src='https://bijouxhair.com/tim/landing2/mainbanner.jpg' alt='mainbanner' />
        </div>
        <div className={cla.title}>3X Ghana Braid Giveaway Event (July 15 - 25)</div>
        <div className={cla.wrapper}>
            {storeList.map((pizza) => (
                <Store key={pizza.id} 
                id={pizza.id}
                img1={pizza.img1}
                storename={pizza.storename}
                name={pizza.name}
                state={pizza.state}
                
                />
            ))}  
        </div>
    </div>
  )
}

export default storeList