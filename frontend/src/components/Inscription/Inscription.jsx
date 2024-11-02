import React, { useState } from "react";
import "./Inscription.css";
import NavBar from '../NavBar/NavBar';
import { useCandidatContext } from "../../hooks/useCandidatContext";
import { useInscriptionCandidat } from "../../hooks/useInscriptionCandidat";
import { useNavigate } from 'react-router-dom';

const Inscription = () => {
  const { dispatch } = useCandidatContext();
  const [nomCandidat, setNomCandidat] = useState('');
  const [emailCandidat, setEmailCandidat] = useState('');
  const [mot_de_passeCandidat, setMDPcandidat] = useState('');
  const { inscriptionCad, error, isLoading } = useInscriptionCandidat();
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mot_de_passeCandidat !== confirmPassword) {
      setFormError("*Les mots de passe ne correspondent pas.");
      return;
    }
    setFormError('');
    await inscriptionCad(nomCandidat, emailCandidat, mot_de_passeCandidat);
    navigate('/cand');
  };

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
          <div className="input-group">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {formError && <div className="error-message">{formError}</div>}
          </div>
          <button disabled={isLoading} type="submit" className="submit-btn">S'inscrire</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Inscription;
