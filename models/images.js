import {models, model, Schema} from 'mongoose';

const imageSchema = new Schema({
    name : {
        type : String,
        required : [true, 'The name of image is required']
    },
    code_hex : {
        type : String
    },
    mineType : {
        type : String
    }
})

const Image = models.Image || model('Image', imageSchema)
export  default Image