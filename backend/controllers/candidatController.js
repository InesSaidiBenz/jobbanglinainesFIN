import Candidat from '../models/Candidat.js';


//connexion
const loginCandidat = async (req,res) =>{
    res.json({mssg:'login candidat chakal'})
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
        res.status(200).json({email_candidat,candidat})
    }
    catch(error){
            res.status(400).json({error:error.message})
    }


  
}

export{
    loginCandidat,
    signupCandidat
};