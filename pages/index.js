import cla from '../styles/form.module.css';
import axios from 'axios';
import StoreList from '../components/storeList';
import Head from 'next/head';
import {MongoClient} from 'mongodb';
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

export const getServerSideProps = async() => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
    );
const db = client.db();
const myCollection = db.collection('vip_usa');
const myData = await myCollection.find({}, {storename: 1}).toArray(); 
client.close();
  //const res = await axios.get('https://ghanabraid.com/api/store');
  return {
    props: {
      landingdata: myData.map(Data => ({
        id: Data._id.toString() ,
        storename: Data.storename || null,
        img1: Data.img1,
        contents: Data.contents,
       
  }))
     
    }
  }
}