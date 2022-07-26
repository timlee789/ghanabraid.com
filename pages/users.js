import React from 'react'
import cla from '../styles/form.module.css';
import { MongoClient } from 'mongodb';
import Image from 'next/image';
//import { CSVLink } from 'react-csv';
function users({userdata}) {
  return (
    <div>
       
        <main>
        <center>
       <h2 className={cla.phototitle}>3X Ghana Braid Giveaway Event</h2>
        <Image src='https://bijouxhair.com/tim/landing2/mainbanner.jpg' alt='fslf' width='1600' height="550"/>
        <div  className={cla.table}>
        {/* <CSVLink data={userdata} >DOWNLOAD LIST</CSVLink> */}
        {userdata.map( data => (
               <div key={data.id} className={cla.userbox}>
              <div className={cla.user}> {data.name} </div>
              <div className={cla.user}>{data.tel}</div>
               <div className={cla.user}>{data.email}</div>
               <div className={cla.user2}>{data.date}</div>
               </div>
            ))}
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


export const getServerSideProps = async() => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
    );
const db = client.db();
const myCollection = db.collection('usauserjuly');
const myData = await myCollection.find({}, {storename: 1}).toArray(); 
client.close();
  //const res = await axios.get('https://ghanabraid.com/api/store');
  return {
    props: {
      userdata: myData.map(Data => ({
      
        name: Data.name || null,
        tel: Data.tel || null,
        email: Data.email || null,
        date: Data.date
       
  }))
     
    }
  }
}


export default users

