import Entreprise from '../models/Entreprise.js';



//connexion
const loginEntreprise = async (req,res) =>{
   



    res.json({mssg:'login entreprise chakal'})
}

//inscription
const inscriptionEntreprise = async (req,res) =>{

    const{ 
        nom_entreprise,
        nom_employeur,
        email_entreprise,
        telephone,
        adresse,
        mot_de_passeEntreprise} = req.body

        try{
            const entreprise = await Entreprise.inscriptionEntreprise(
                nom_entreprise,
                nom_employeur,
                email_entreprise,
                telephone,
                adresse,
                mot_de_passeEntreprise)

            res.status(200).json({email_entreprise, entreprise}) 
        }
        catch(error){
            res.status(400).json({error:error.message})

        }
    
}

export{
    loginEntreprise,
    inscriptionEntreprise
};