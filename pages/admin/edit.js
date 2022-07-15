import React from 'react'
import {MongoClient} from 'mongodb';

function edit({landingdata}) {
    console.log(landingdata)
  return (
    <div>
        {landingdata.map(data => (
            <div>
                {data.name}
            </div>
        ))}
    </div>
  )
}

export const getServerSideProps = async() => {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
      );
  const db = client.db();
  const myCollection = db.collection('stores');
  const myData = await myCollection.find({}, {storename: 1}).toArray(); 
  client.close();
    //const res = await axios.get('https://ghanabraid.com/api/store');
    return {
      props: {
        landingdata: myData.map(Data => ({
          id: Data._id.toString() ,
          storename: Data.storename ,
          storename: Data.name || null,
          img1: Data.img1,
         
    }))
       
      }
    }
  }

  export default edit;