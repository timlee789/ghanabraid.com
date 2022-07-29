import {MongoClient, ObjectId} from 'mongodb'
import Storeinfo from "../../components/storeinfo";

export async function getStaticPaths(){
                const client = await MongoClient.connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
                );
                const db = client.db();
                const myCollection = db.collection('usavipstores');
                const myData = await myCollection.find({}, {storename: 1}).toArray(); 
                client.close();
                // let response = await fetch("http://localhost:3000/api/post");
                // let store = await response.json();
                return {
                 paths : myData.map((data) => ({
                        params: {id: data._id.toString()}})),
                fallback: false
                }            
}

export async function getStaticProps(context){
         const storeid = context.params.id;
        const client = await MongoClient.connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
                );
        const db = client.db();
        const myCollection = db.collection('usavipstores');
        const store = await myCollection.findOne({_id: ObjectId(storeid)}); 
        //const myData = users
        client.close();

        return{
                props:{  
                        storeinfo:{ 
                                id: store._id.toString() || null,
                                storename: store.storename || null,
                                name: store.name || null,
                                phone: store.phone || null,
                                address: store.address || null,
                                city: store.City || null,
                                zip: store.zip || null,
                                state: store.state || null,
                                img1: store.img1 || null,
                                campaign:store.campaign || null,
                
                        }    
                        },
                }
        }

export default function GotoStoreinf({storeinfo}){
     
    return(
            <div>     
                <Storeinfo storeinfo={storeinfo} />        
            </div>
    )

}