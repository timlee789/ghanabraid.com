import LandingPage from "../components/landingpage";
import {MongoClient} from 'mongodb'

export async function getStaticPaths(){
                let response = await fetch("http://localhost:3000/api/post");
                let users = await response.json()
                return {
                 paths : users.message.map((store) => ({
                        params: {storename: store.storename.toString()}})),
                fallback: false
                } 
}

export async function getStaticProps(context){
         const storename = context.params.storename;
        const client = await MongoClient.connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
                );
        const db = client.db();
        const myCollection = db.collection('usavipstores');
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
                                name: users.name,
                                img1: users.img1,
                                img2: users.img2,
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