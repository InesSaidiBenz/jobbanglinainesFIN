import React from 'react';
import './NavBarEnt.css'; 
import Logo from '../../images/logo.jpg';
import { useEntrepriseLougout } from "../../hooks/useEntrepriseLogout"; // Importez le hook useLogout
import { useEntrepriseContext } from '../../hooks/useEntrepriseContext';
  
const NavBarEnt = () => {
  const {entreprise}= useEntrepriseContext()
  const { lougoutentreprise } =  useEntrepriseLougout();
  const handleClick = () => {
    lougoutentreprise();
  };

  const menuOptions = [
    { text: "Acceuil", path: "./ent" },

   
  ];

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo-and-link">
          <img src={Logo} alt="Logo" />
          <a href="/ent" className="navbar-link navbar-link-bold">Accueil</a>
        </div>

{entreprise &&(
        <div>
        <span>{entreprise.email_entreprise} </span>
        <button onClick={handleClick} className="logoutEnt-button">
            Log out
          </button>{" "}
          {/* Bouton Log out */}
          </div>
          )}
      </div>
    </nav>
  );
};

export default NavBarEnt;
