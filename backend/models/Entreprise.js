import mongoose from "mongoose";

const Schema = mongoose.Schema;

const entrepriseSchema = new Schema({
    nom_entreprise: {
        type: String,
        required: true
    },
    nom_employeur: {
        type: String,
        required: true
    },
    email_entreprise: {
        type: String,
        required: true,
        unique:true
    },
    telephone: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    mot_de_passe: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);
export default Entreprise;
