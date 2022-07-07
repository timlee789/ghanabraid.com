import React from 'react';
import cla from '../styles/PizzaList.module.css';
import Store from './store';


function storeList({storeList}) {
  return (
    <div className={cla.container}>
        <h1 className={cla.title}>Store</h1>
        <div className={cla.wrapper}>
            {storeList.map((pizza) => (
                <Store key={pizza._id} 
                id={pizza._id}
                img1={pizza.img1}
                storename={pizza.storename}
                desc={pizza.desc}
                />
            ))}
          
            
        </div>
    </div>
  )
}

export default storeList