import { Schema, model, models } from "mongoose";


const RessourceSchema = new Schema({
    images : {
        type : String,
        required : [true]
    },
    titre : {
        type : String,
        required : [true, 'User Name is requered'],
    },
    description : {
        type : String,
        required : [true, 'User Name is requered'],
    },
    createdAt : {
        type : String,
        required : [true, 'password is required'],
    },
    createdBy : {
        type :  Object({
            name : {
                type : String,
                required : true,
            },
            surname : String,
            user_id : String
        }),
        required : true
    },
    categorie : {
        type : String,
    },
    like :  {
        type : Array,
    },
    share : {
        type : Array,
    },
    download : {
        type : Array,
    }
});

const Ressource = models.Ressource || model('Ressource', RessourceSchema);

export default Ressource