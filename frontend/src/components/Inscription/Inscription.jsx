
import React, { useState } from "react";
import "./Inscription.css";
import NavBar from '../NavBar/NavBar';
import { useCandidatContext } from "../../hooks/useCandidatContext";
import { useInscriptionCandidat } from "../../hooks/useInscriptionCandidat";
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
 
const Inscription = () => {
  const { dispatch } = useCandidatContext();
  const [nomCandidat, setNomCandidat] = useState('');
  const [emailCandidat, setEmailCandidat] = useState('');
  const [mot_de_passeCandidat, setMDPcandidat] = useState('');
  const { inscriptionCad, error, isLoading } = useInscriptionCandidat();
  const navigate = useNavigate(); // Initialiser useNavigate
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await inscriptionCad(
      nomCandidat,
      emailCandidat,
      mot_de_passeCandidat
    );
 
    // Redirige vers /cand après l'inscription réussie
    navigate('/cand');
 
    const candidat = {
      nom_candidat: nomCandidat,
      email_candidat: emailCandidat,
      mot_de_passeCandidat: mot_de_passeCandidat
    };
 
    // Vous pouvez également garder l'objet candidat si vous avez besoin
  }
 
  return (
    <div>
      <NavBar />
      <div className="inscription-container">
        <h2>Inscription candidat</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nom du candidat</label>
            <input
              type="text"
              value={nomCandidat}
              onChange={(e) => setNomCandidat(e.target.value)}
              required
            />
          </div>
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
          <button disabled={isLoading} type="submit" className="submit-btn">S'inscrire</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};
 
export default Inscription;



/*
import React, { useState } from "react";
import "./Inscription.css";
import NavBar from '../NavBar/NavBar';
import { useCandidatContext } from "../../hooks/useCandidatContext";
import { useInscriptionCandidat } from "../../hooks/useInscriptionCandidat";
//import { useNavigate } from 'react-router-dom'; // Pour naviguer après la soumission




const Inscription = () => {
  const {dispatch} = useCandidatContext()
  const [nomCandidat,setNomCandidat] = useState('')
  const [emailCandidat, setEmailCandidat] = useState('')
  const [mot_de_passeCandidat, setMDPcandidat] = useState('')
  const { inscriptionCad, error, isLoading } = useInscriptionCandidat();


  const handleSubmit = async (e) => {
    e.preventDefault()
    await inscriptionCad(
      nomCandidat,
       emailCandidat, 
       mot_de_passeCandidat)


const candidat = {
  nom_candidat:nomCandidat,
  email_candidat:emailCandidat,
  mot_de_passeCandidat:mot_de_passeCandidat

}





}


  return (
    <div>
      <NavBar />
      <div className="inscription-container">
        <h2>Inscription candidat</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nom du candidat</label>
            <input
              type="text"
              value={nomCandidat}
              onChange={(e) => setNomCandidat(e.target.value)}
              required
            />
          </div>
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
          <button disabled={isLoading} type="submit" className="submit-btn">S'inscrire</button>
          {error && <p className="error">{error}</p>}
        </form>
        
      </div>
    </div>
  );
};

export default Inscription;




*/




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