import mongoose from "mongoose";

const Schema = mongoose.Schema;

const candidatSchema = new Schema({
    nom_candidat: {
        type: String,
        required: true
      },
      email_candidat: {
        type: String,
        required: true
      },
     mot_de_passe: {
        type: String,
        required: true
      }
      
    }, { timestamps: true });


 

    const Candidat = mongoose.model('Candidat', candidatSchema);
    export default Candidat;










