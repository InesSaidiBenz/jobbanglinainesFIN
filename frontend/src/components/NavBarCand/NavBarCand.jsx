import React from "react";
import { Link } from "react-router-dom";
import "./NavBarCand.css";
import Logo from "../../images/logo.jpg";
import { FaHeart } from "react-icons/fa";
import { useCandidatLougout } from "../../hooks/useCandidatLogout";
import { useCandidatContext } from "../../hooks/useCandidatContext";
// Importez le hook useLogout
const NavBarCand = () => {
  const {candidat} = useCandidatContext()
  const { lougoutcandidat } = useCandidatLougout();
  const handleClick = () => {
    lougoutcandidat();
  };



  const menuOptions = [{ text: "Accueil", path: "/" }];
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo-and-link">
          <img src={Logo} alt="Logo" />
          <Link to="/" className="navbar-link navbar-link-bold">
            Accueil
          </Link>
          <Link to="/like" className="heart2-iconn">
            <FaHeart color="white" size={25} />
          </Link>

    {candidat &&(
      <div>
          <span>{candidat.email_candidat} </span>
          <button onClick={handleClick} className="logout-button">
            Log out
          </button>{" "}
          {/* Bouton Log out */}
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};
export default NavBarCand;
