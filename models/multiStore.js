import mongoose from 'mongoose';

const StoreSchema = new mongoose.Schema({
    storename: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },
    img1: {
        type: String,
        required: true,
    },
    img2: {
        type: String,
        required: false,
    },
    img3: {
        type: String,
        required: false,
    },
    img4: {
        type: String,
        required: false,
    },
  
},
 {timestamps: true}
)

export default mongoose.models.Store ||
 mongoose.model("Store", StoreSchema);