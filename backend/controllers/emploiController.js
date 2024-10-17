import OffreEmploi from '../models/OffreEmploi.js';
import mongoose from 'mongoose';

//avoir tt les offres
const avoirOffres = async (req,res) => {
    const offreEmploi = await OffreEmploi.find({}).sort({createdAt: -1});
    res.status(200).json(offreEmploi);
}


//avoir une offre
const avoirOffre = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error: 'il ny a pas cette offre'});
    }
    const offreEmploi = await OffreEmploi.findById(id);

    if(!offreEmploi){
      return res.status(404).json({error: 'pas ce genre doffre'});
        }
    res.status(200).json(offreEmploi);
}



//cree une offre
const creeOffre = async(req,res) =>
     {
    const{nom_entreprise,nom_poste,salaire,emplacement,categorie,email_employeur} = req.body;

try{
    const emploi = await OffreEmploi.create({
        nom_entreprise,nom_poste,salaire,emplacement,categorie,email_employeur
    });
    res.status(200).json(emploi);
    }catch(error){
    res.status(400).json({error: error.message});
}}

//supprimer une offre
const supprimerEmploi = async (req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error: 'il ny a pas cette offre'});
    }
    const offreEmploi = await OffreEmploi.findOneAndDelete({_id: id});

    if(!offreEmploi){
      return res.status(404).json({error: 'pas ce genre doffre'});
        }
    res.status(200).json(offreEmploi);
}


//modifier une offre
const modifierEmploi = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error: 'il ny a pas cette offre'});
    }
    const offreEmploi = await OffreEmploi.findOneAndUpdate({_id: id},
    {   ...req.body });

    if(!offreEmploi){
      return res.status(404).json({error: 'pas ce genre doffre'});
        }
    res.status(200).json(offreEmploi);
}




export { 
    creeOffre,
    avoirOffre, 
    avoirOffres ,
    supprimerEmploi,
    modifierEmploi};

