import React, { useState } from 'react';
import { Route, Routes , Navigate} from 'react-router-dom';  
import Acceuil from './components/Acceuil/Acceuil'; 
import Connexion from './components/Connexion/Connexion'; 
import Inscription from './components/Inscription/Inscription'; 
import { Entreprise } from "./components/Entreprise/Entreprise";
import ConnexionEnt from './components/ConnexionEnt/ConnexionEnt'; 
import InscriptionEnt from './components/InscriptionEnt/InscriptionEnt'; 
import Candidat from './components/Candidat/Candidat'; 
import OffreEmploi from './components/OffreEmploi/OffreEmploi'; 
import EmploiItem from './components/EmploiItem/EmploiItem'; 
import MesAnnonces from './components/MesAnnonces/MesAnnonces'; 
import MesAnnoncesPage from './components/MesAnnoncesPage/MesAnnoncesPage'; 
import PostesLiker from './components/PostesLiker/PostesLiker';
import { useEntrepriseContext } from './hooks/useEntrepriseContext';
import { useCandidatContext } from './hooks/useCandidatContext';
import './App.css';
 
function App() {
  const {entreprise} = useEntrepriseContext()
  const {candidat} = useCandidatContext()
  const [likedJobs, setLikedJobs] = useState(new Set());
 
  return (
  
<Routes>
<Route path="/" element={<Acceuil />} />
<Route path="/con" element={<Connexion />} />
<Route path="/ins" element={<Inscription />} />
<Route path="/ent" element={<Entreprise />} />
<Route path="/inscent" element={<InscriptionEnt />} />
{/* Selon si lentreprise n'est pas connecter, le navigate vers.... jai mis / car je ne sais pas, cest un exemple, regarder video16 au pire  */}
<Route path="/conent" element={entreprise ? <ConnexionEnt /> :<Navigate to="/" />} />
<Route 
        path="/cand" 
        element={<Candidat likedJobs={likedJobs} setLikedJobs={setLikedJobs} />} 
      />
<Route 
        path="/off" 
        element={<OffreEmploi />} 
      />
<Route 
        path="/emp" 
        element={<EmploiItem likedJobs={likedJobs} setLikedJobs={setLikedJobs} />} 
      />
<Route 
        path="/like" 
        element={<PostesLiker likedJobs={likedJobs} />} 
      />
<Route path="/ann" element={<MesAnnonces />} />
<Route path="/annp" element={<MesAnnoncesPage />} />
</Routes>

  );
}
 
export default App;