import Candidat from '../models/Candidat.js';


//connexion
const loginCandidat = async (req,res) =>{
    res.json({mssg:'login candidat chakal'})
}

//inscription
const signupCandidat = async (req,res) =>{
    res.json({mssg:'signup candidat chakal'})
}

export{
    loginCandidat,
    signupCandidat
};