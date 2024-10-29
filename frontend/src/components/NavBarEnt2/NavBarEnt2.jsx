import React from 'react';
import './NavBarEnt2.css'; 
import Logo from '../../images/logo.jpg';
import { useEntrepriseLougout } from "../../hooks/useEntrepriseLogout"; // Importez le hook useLogout

const NavBarEnt2 = () => {

  const { lougoutentreprise } =  useEntrepriseLougout();
  const handleClick = () => {
    lougoutentreprise();
  };

  const menuOptions = [
    { text: "Acceuil", path: "./" },

   
  ];

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo-and-link">
          <img src={Logo} alt="Logo" />
          <a href="/" className="navbar-link navbar-link-bold">Accueil</a>
        </div>
        <button onClick={handleClick} className="logoutEnt2-button">
            Log out
          </button>{" "}
          {/* Bouton Log out */}
      </div>
    </nav>
  );
};

export default NavBarEnt2;
