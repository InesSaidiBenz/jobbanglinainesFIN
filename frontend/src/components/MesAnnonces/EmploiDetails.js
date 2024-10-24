import { useState } from 'react';
import { useEmploiContext } from "../../hooks/useEmploiContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const EmploiDetail = ({ emploi }) => {
  const { dispatch } = useEmploiContext();
  const [showDetails, setShowDetails] = useState(false); // État pour afficher/masquer les détails

  const handleClick = async () => {
    const response = await fetch('/api/offreEmploi/' + emploi._id, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      console.log('Suppression réussie:', json);
      dispatch({ type: 'DELETE_EMPLOIS', payload: json });
    }
  };

  // Fonction pour basculer l'affichage des détails
  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <div>
      <ul className="lmj-emploi-list">
        <div className={`emploi-container ${showDetails ? 'details-visible' : ''}`} onClick={toggleDetails}>
          <h5 className="jobTitle">{emploi.nom_poste}</h5>
          <span className="jobEntreprise">{emploi.nom_entreprise}</span>
          <span className="jobSector">{emploi.categorie}</span>
          <span className="jobSalary">{emploi.salaire}</span>
          <span className="jobLocation">{emploi.emplacement}</span>
          <span className="jobLocation">{emploi.email_employeur}</span>
          <div>
           <p className="jobDescription">Description du poste : {emploi.description}</p>
           <p className="jobResponsabilite">Responsabilités : {emploi.responsabilite}</p>
           <p className="jobExigence">Exigences : {emploi.exigence}</p>
         </div>

          <p>{formatDistanceToNow(new Date(emploi.createdAt), { addSuffix: true })}</p>
          <button className="deleteButton" onClick={handleClick}>Supprimer</button>

         
        </div>
      </ul>
    </div>
  );
};

export default EmploiDetail;
