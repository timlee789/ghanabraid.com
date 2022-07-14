
import { connectToDb } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { useState } from 'react';
import Storeinfo from '../../components/storeinfo';
export default async function getPost(req,res){
      //const [storedata, setStoredata] = useState([])
        try {
            // connect to the database
            let { db } = await connectToDb();
           // const { id } = req.query.id
            // fetch the posts
            let posts = await db
                .collection('vip_usa')
                .findOne({
                  _id: ObjectId(req.query.id)
                })
                
            // return the posts
            const myData = res.json({
                message: JSON.parse(JSON.stringify(posts)),
                //success: true,
            });
            console.log(myData)
          
        } catch (error) {
            // return the error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
       return (
        <Storeinfo storedata= {myData} />
       )
    }

// export default function handler(req, res) {
//         const { id } = req.query
//         res.end(`Post: ${id}`)
//       }