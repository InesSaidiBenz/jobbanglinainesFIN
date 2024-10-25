import Entreprise from '../models/Entreprise.js';



//connexion
const loginEntreprise = async (req,res) =>{
    res.json({mssg:'login entreprise chakal'})
}

//inscription
const signupEntreprise = async (req,res) =>{
    res.json({mssg:'signup entreprise chakal'})
}

export{
    loginEntreprise,
    signupEntreprise
};