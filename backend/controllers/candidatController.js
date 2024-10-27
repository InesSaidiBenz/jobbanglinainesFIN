import Candidat from '../models/Candidat.js';
import jwt from 'jsonwebtoken'



const createToken = (_id)=>{

    return  jwt.sign({_id}, process.env.SECRET, {expiresIn: '4d' })

}



//connexion
const loginCandidat = async (req,res) =>{

    const {
        email_candidat,
         mot_de_passeCandidat} = req.body

    try{
        const candidat = await Candidat.loginCandidat(
            email_candidat,
            mot_de_passeCandidat)


            const token = createToken(candidat._id)


        res.status(200).json({email_candidat,token})
    }
    catch(error){
            res.status(400).json({error:error.message})
    }


}

//inscription
const signupCandidat = async (req,res) =>{
    const {
        nom_candidat,
        email_candidat,
         mot_de_passeCandidat} = req.body

    try{
        const candidat = await Candidat.signupCandidat(
            nom_candidat,
            email_candidat,
            mot_de_passeCandidat)


            const token = createToken(candidat._id)


        res.status(200).json({email_candidat,token})
    }
    catch(error){
            res.status(400).json({error:error.message})
    }


  
}

export{
    loginCandidat,
    signupCandidat
};