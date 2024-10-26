import express from 'express';
import { creeOffre, avoirOffre, avoirOffres, supprimerEmploi, modifierEmploi } from '../controllers/emploiController.js';
const router = express.Router();


//avoir toutes les offres
router.get('/', avoirOffres) ;

//avoir une offre
router.get('/:id', avoirOffre);

//cree offre
router.post('/', creeOffre);


//supprimer une offre
router.delete('/:id', supprimerEmploi);

//Modifier une offre
router.patch('/:id', modifierEmploi);

// Assurez-vous d'exporter le routeur
export default router;
