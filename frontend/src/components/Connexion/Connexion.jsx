import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importer useNavigate
import "./Connexion.css";
import NavBar from '../NavBar/NavBar';
//import { CandidatsList } from '../../data/candidats'; // Importer la liste des candidats
import { useCandidatContext } from "../../hooks/useCandidatContext";
import { useConnexionCandidat } from "../../hooks/useConnexionCandidat";
// Pour naviguer après la soumission




const Connexion = () => {
  //const {dispatch} = useCandidatContext()
  const [emailCandidat, setEmailCandidat] = useState('')
  const [mot_de_passeCandidat, setMDPcandidat] = useState('')
  const {connexionCad, error, isLoading} = useConnexionCandidat()


  const handleSubmit = async (e) => {
    e.preventDefault()
    connexionCad( emailCandidat, mot_de_passeCandidat)

    /*
const candidat = {
  email_candidat:emailCandidat,
  mot_de_passeCandidat:mot_de_passeCandidat

}

const response = await fetch('/api/candidat/', {
  method:'POST',
  body: JSON.stringify(candidat),
  headers:{
      'Content-Type': 'application/json'
  }
})
const json = await response.json()

if(!response.ok){
      setError(json.error)
}
if(response.ok){

  setEmailCandidat('')
  setMDPcandidat('')
  setError(null)
  console.log('compte entreprise Ajouter mon amour')
  dispatch({type: 'LOGINCANDIDAT', payload:json})
}


*/


}


return (
  <div>
    <NavBar />
    <div className="connexion-container">
      <h2>Connexion candidat</h2>
      <form onSubmit={handleSubmit}>
  
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={emailCandidat}
            onChange={(e) => setEmailCandidat(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={mot_de_passeCandidat}
            onChange={(e) => setMDPcandidat(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Se connecter</button>
      </form>

      <div className="signup">
          <p>Pas de compte avec nous ?</p>
          <br />
          <a href="./ins">
            <button disabled={isLoading} className="signup-btn">Créer un compte</button>
            {error && <div>{error}</div>}

          </a> 
        </div>
        
      {error && <p className="error">{error}</p>}
      
    </div>
  </div>
);
};

export default Connexion;









/*

function Inscription() {
  const [userType] = useState("candidat");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Pour rediriger vers la page candidat

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("*Les mots de passe ne correspondent pas. Veuillez réessayer.");
      return;
    }
    setError("");
    console.log(`Registering as ${userType} with name: ${name}, email: ${email}`);
    navigate('/cand'); // Rediriger après l'inscription réussie
  };

  return (
    <div>
      <NavBar />
      <div className="inscription-container">
        <h2>Inscription</h2>
        <p>Candidat</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          <button type="submit" className="submit-btn">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
*/



















/*
function Connexion() {
  const [userType] = useState("candidat"); // Default to "candidat"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour le message d'erreur
  const navigate = useNavigate();  // Utiliser useNavigate pour rediriger

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifiez si l'email et le mot de passe sont corrects
    const candidat = CandidatsList.find(c => c.email === email && c.mot_de_passe === password);
    
    if (candidat) {
      console.log(`Logging in as ${userType} with email: ${email}`);
      // Rediriger vers la page candidat après connexion réussie
      navigate("/cand");
    } else {
      setErrorMessage("Email ou mot de passe incorrect."); // Définir le message d'erreur
    }
  };

  return (
    <div>
      <NavBar />
      <div className="connexion-container">
        <h2>Connexion</h2>
        <p>Candidat</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Entrez votre email"
            />
          </div>
          <div className="input-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <button type="submit" className="login-btn">Se connecter</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Afficher le message d'erreur *//*}*//*
        </form>
       
        <div className="signup">
          <p>Pas de compte avec nous ?</p>
          <br />
          <a href="./ins">
            <button className="signup-btn">Créer un compte</button>
          </a> 
        </div>
        
      </div>
    </div>
  );
}

export default Connexion;
*/