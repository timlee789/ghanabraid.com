import cla from '../styles/Home.module.css';
//import db from '../data/db';
import StoreList from '../components/storeList';

import {MongoClient} from 'mongodb';
import { useState } from 'react';


export default function Home({landingdata}) {
  const [pass, setPass] = useState()
 
  const handleChange =(e) => setPass(e.target.value);


  return (
    <div className={cla.main}>

      <main className={cla.body}>
       
       <div className={cla.phototitle}>Social Media Store Marketing USA</div>
       <div className={cla.album}>        
       <StoreList storeList={landingdata} />
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
const myCollection = db.collection('usavipstores');
const myData = await myCollection.find({}).sort({state: 1}).toArray(); 
client.close();
  //const res = await axios.get('https://ghanabraid.com/api/store');
  // let response = await fetch("http://localhost:3000/api/post")
  // let myData = await response.json()
  return {
    props: {
      landingdata: myData.map(Data => ({
        id: Data._id.toString() ,
        name: Data.name || null,
        img1: Data.img1 || null,
        state: Data.state || null,
        storename: Data.storename || null,
  }))
      
    }
  }
}