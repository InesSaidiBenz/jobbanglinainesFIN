import mongoose from "mongoose";
import bcrypt from ('bcrypt')
const Schema = mongoose.Schema;

const candidatSchema = new Schema({
    nom_candidat: {
        type: String,
        required: true
      },
      email_candidat: {
        type: String,
        required: true,
        unique:true
      },
     mot_de_passeCandidat: {
        type: String,
        required: true
      }
      
    });

    //static signup
    candidatSchema.statics.singupCandidat = async function (
      nom_candidat,
      email_candidat,
      mot_de_passeCandidat){

        const exists = await this.findOne({email_candidat})

        if(exists){
          throw Error('Email deja utiliser');
          
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(mot_de_passeCandidat,salt)

        const candidat = await this.create({
          nom_candidat,
          email_candidat,
          mot_de_passeCandidat:hash
        })

        return candidat
    }
  


 

    const Candidat = mongoose.model('Candidat', candidatSchema);
    export default Candidat;










