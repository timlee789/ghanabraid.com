import LandingPage from "../components/landingpage";
import axios from 'axios';
import {MongoClient} from 'mongodb'

export async function getStaticPaths(){
        const client = await MongoClient.connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
                );
        const db = client.db();
        const myCollection = db.collection('stores');
        const users = await myCollection.find({}, {storename: 1}).toArray(); 
        client.close();
                // const res = await axios.get('http://localhost:3000/api/store');
                // const posts = await res.json();
                // console.log(posts);
                const  paths = users.map((store) => ({
                        params: {storename: store.storename},
                }))
                return {
                 paths,
                fallback: false
                }
               
}

export async function getStaticProps(context){
         const storename = context.params.storename;
        const client = await MongoClient.connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
                );
        const db = client.db();
        const myCollection = db.collection('stores');
        const users = await myCollection.findOne({storename: storename.toString()}); 
        //const myData = users
        //client.close();
        // const res = await axios.get('http://localhost:3000/api/store');
        // const posts = await res.json();
        
        return{
                props:{  
                        storename:{ 
                                id: users._id.toString(),
                                storename: users.storename,
                                img1: users.img1,
                        }    
                        },
                }
        }

export default function GotoLanding({storename}){
     
    return(
            <div>
                   
                <LandingPage storename={storename} />
                  
                    
                   
            </div>
    )

}