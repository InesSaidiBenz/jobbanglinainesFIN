import React from 'react';
import NavBarEnt2 from '../NavBarEnt2/NavBarEnt2';
import './Entreprise.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Ajout de useLocation

export const Entreprise = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const connectedEmployerEmail = location.state?.connectedEmployerEmail;  // Récupère l'email ici

  const handleMesAnnoncesClick = () => {
    navigate('/annp', { state: { connectedEmployerEmail } });  // Passe l'email ici aussi
  };


  return (
    <div className="entreprise-container">
      <NavBarEnt2 />
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>Tableau de bord</li>
            <li>
              <button onClick={() => navigate('/off')} className="sidebar-link">
                Créer un poste
              </button>
            </li>
            <li onClick={handleMesAnnoncesClick} className="sidebar-link">
              Mes annonces
            </li>
          </ul>
        </aside>
        <div className="main-content2">
          <h1>Bienvenue dans l'espace entreprise !</h1>
          <p>Employeur connecté : {connectedEmployerEmail || "Aucun employeur connecté"}</p> {/* Affiche l'email ou un message par défaut */}
        </div>
      </div>
    </div>
  );
};


/*
  return (
    <div className="entreprise-container">
      <NavBarEnt2 />
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>Tableau de bord</li>
            <li>
              <a href="./off" className="sidebar-link">Créer un poste</a>
            </li>
            <li onClick={handleMesAnnoncesClick} className="sidebar-link">
              Mes annonces
            </li>
          </ul>
        </aside>
        <div className="main-content2">
          <h1>Bienvenue dans l'espace entreprise !</h1>
          <p>Employeur connecté : {connectedEmployerEmail}</p>  {/* Affichage de l'email *//*}*//*
        </div>
      </div>
    </div>
  );
};
*/
export default Entreprise;
