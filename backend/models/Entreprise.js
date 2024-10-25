import mongoose from "mongoose";
import bcrypt from ('bcrypt')


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
    mot_de_passeEntreprise: {
        type: String,
        required: true
    }
 });



 entrepriseSchema.statics.signupEntreprise = async function(
    nom_entreprise,
    nom_employeur,
    email_entreprise,
    telephone,
    adresse,
    mot_de_passeEntreprise
 ) {
    const exists = await this.findOne({email_entreprise})

    if(exists){
        throw Error('Email deja utiliser');
      }

      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(mot_de_passeEntreprise,salt)

      const entreprise = await this.create({
        nom_entreprise,
        nom_employeur,
        email_entreprise,
        telephone,
        adresse,
        mot_de_passeEntreprise: hash})

        return entreprise
 }

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);
export default Entreprise;
