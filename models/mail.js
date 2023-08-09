import { Schema, models, model } from "mongoose";

const newsletterSchema = new Schema({
    mail : {
        type : String,
        required : [true, "Vous n'avez pas entrez votre d'adresse mail"]
    }
})

const Mail = models.Mail || model('Mail', newsletterSchema)
export default Mail