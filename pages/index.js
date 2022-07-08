import cla from '../styles/form.module.css';
import axios from 'axios';
import StoreList from '../components/storeList';
import Head from 'next/head';


export default function Home({landingdata}) {
  
  return (
    <div className={cla.main}>
       <Head>  
        <meta name="viewport" content="width=1150"/>
        <title>3X Ghana Braid Giveaway Event</title>
        <meta name="description" content="3X Ghana Braid Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg" />     
        <meta property="og:title" content="3X Ghana Braid Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg"/>
        <meta property="og:description" content="3X Ghana Braid Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
    </Head>
      <main className={cla.body}>
      
       <div className={cla.phototitle}>SNS Advertising Stores</div>
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
//   const client = await MongoClient.connect(
//     `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertim.koved.mongodb.net/Landing?retryWrites=true&w=majority`
//     );
// const db = client.db();
// const myCollection = db.collection('stores');
// const users = await myCollection.find({}, {storename: 1}).toArray(); 
// client.close();
  const res = await axios.get('https://ghanabraid.com/api/store');
  return {
    props: {
      landingdata: res.data
      // {
      //   id: users._id,
      //   storename: users.storename,
      //   img1: users.img1,
      //   img2: users.img2,
      // },
    }
  }
}