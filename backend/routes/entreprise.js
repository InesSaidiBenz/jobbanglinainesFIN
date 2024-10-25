import express from 'express';
import {loginEntreprise,signupEntreprise } from '../controllers/entrepriseController.js';
const router = express.Router();

//connexion
router.post('/loginEntreprise',loginEntreprise)

//inscription
router.post('/signupEntreprise', signupEntreprise)


export default router;