import dbConnect from "../../../util/mongo";
import Store from "../../../models/multiStore";

export default async function handler(req, res) {
    const { method } = req;
    dbConnect();
    if(method == "GET") {
        try{
            const stores = await Store.find();
            res.status(200).json(stores)
        }catch(err){
            res.status(500).json(err)
        }
    }
    
    if(method == "POST") {
        try{
            const store = await Store.create(req.body);
            res.status(201).json(store)
        }catch(err) {
            res.status(500).json(err)
        }
    }
  }