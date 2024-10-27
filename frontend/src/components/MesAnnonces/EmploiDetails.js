import { useState } from 'react';
import { useEmploiContext } from "../../hooks/useEmploiContext"; // Hook pour accéder au contexte de l'emploi et le dispatcher
import "./EmploiDetails.css";
import edit from '../../images/edit.png';
import { locations } from '../../data/locations'; // Liste des emplacements possibles pour les emplois

// Composant EmploiDetail qui affiche les détails d'une offre d'emploi
const EmploiDetail = ({ emploi }) => {
  const { dispatch } = useEmploiContext(); // Utilise le dispatcher du contexte pour les actions de modification
  const [showDetails, setShowDetails] = useState(false); // Gère l'affichage des détails de l'emploi
  const [showEmail, setShowEmail] = useState(false); // Gère l'affichage de l'email de l'employeur
  const [loading, setLoading] = useState(false); // Gère l'état de chargement lors de la suppression de l'emploi
  const [error, setError] = useState(null); // Stocke les erreurs en cas de problème
  const [isEditing, setIsEditing] = useState(false); // Gère le mode édition
  const [editedEmploi, setEditedEmploi] = useState({ ...emploi }); // Stocke les modifications apportées à l'emploi

  // Fonction pour supprimer l'emploi
  const handleClick = async () => {
    setLoading(true);
    setError(null); // Réinitialise les erreurs
    const response = await fetch('/api/offreEmploi/' + emploi._id, {
      method: 'DELETE',
    });
    const json = await response.json();
    setLoading(false);
    if (response.ok) {
      dispatch({ type: 'DELETE_EMPLOIS', payload: json }); // Supprime l'emploi du contexte
    } else {
      setError('Échec de la suppression: ' + json.message); // Affiche l'erreur si la suppression échoue
    }
  };

  // Affiche/masque les détails de l'emploi
  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  // Affiche/masque l'email de l'employeur
  const toggleEmail = () => {
    setShowEmail(prevState => !prevState);
  };

  // Active/désactive le mode édition
  const toggleEdit = () => {
    setIsEditing(prevState => !prevState);
  };

  // Met à jour les champs en cours d'édition
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmploi(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Envoie les modifications apportées
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    console.log("Données mises à jour :", editedEmploi);
    toggleEdit(); // Quitte le mode édition après soumission
  };

  return (
    <div className="emploi-detail-container">
      <ul className="lmj-emploi-list">
        <div className={`emploi-container ${isEditing ? "editing" : ""}`}> 
          {/* Icone d'édition cliquable pour passer en mode édition */}
          <div className="image-containerB" onClick={toggleEdit}>
            <img src={edit} alt="edit" className="small-image" />
          </div>
          
          {/* Détails de l'emploi affichés */}
          <h3 className="jobTitle" onClick={toggleDetails} style={{ cursor: "pointer" }}>
            {emploi.nom_poste}
          </h3>
          <span className="jobEntreprise">
            <span className="label">Entreprise:</span> {emploi.nom_entreprise}
          </span>
          <span className="jobLocation">
            <span className="label">Emplacement:</span> {emploi.emplacement}
          </span>
          <span className="jobSalary">
            <span className="label">Salaire:</span> {emploi.salaire}
          </span>
          <span className="jobSector">
            <span className="label">Catégorie:</span> {emploi.categorie}
          </span>
          <button className="buttonAf" onClick={toggleEmail}>
            Afficher l'email
          </button>

          {/* Affiche l'email de l'employeur dans un popup si showEmail est activé */}
          {showEmail && (
            <div className="popup email-popup">
              <div className="popup-content">
                <span className="close" onClick={toggleEmail}>&times;</span>
                <h4>Email: <a href={`mailto:${emploi.email_employeur}`}>{emploi.email_employeur}</a></h4>
              </div>
            </div>
          )}

          {/* Affiche les détails de l'emploi dans un popup si showDetails est activé */}
          {showDetails && (
            <div className="details-popup">
              <div className="details-popup-content">
                <span className="close" onClick={toggleDetails}>&times;</span>
                <div className="details-content">
                  <h4>Description:</h4>
                  <p>{emploi.description}</p>
                  <h4>Responsabilités:</h4>
                  <p>{emploi.responsabilite}</p>
                  <h4>Exigences:</h4>
                  <p>{emploi.exigence}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Affiche un message d'erreur en cas de problème */}
          {error && <div className="error-message">{error}</div>}

          {/* Bouton pour supprimer l'annonce, désactivé pendant le chargement */}
          <button onClick={handleClick} className="delete-button" disabled={loading}>
            {loading ? 'Suppression...' : 'Supprimer l\'annonce'}
          </button>

          {/* Formulaire d'édition s'affiche si isEditing est activé */}
          {isEditing && (
            <div className="edit-popup">
              <div className="edit-popup-content">
                <span className="close" onClick={toggleEdit}>&times;</span>
                <h4>Modifier l'offre d'emploi</h4>
                <form onSubmit={handleSubmitEdit} className="edit-job-form"> 
                  {/* Chaque champ d'édition a un label et une entrée, avec des validations simples */}
                  <div className="inputs-groups">
                    <label>Nom de l'entreprise</label>
                    <input
                      type="text"
                      name="nom_entreprise"
                      value={editedEmploi.nom_entreprise}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Autres champs d'édition pour l'emploi */}
                  <div className="inputs-groups">
                    <label>Nom du poste</label>
                    <input
                      type="text"
                      name="nom_poste"
                      value={editedEmploi.nom_poste}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Validation de format pour le salaire */}
                  <div className="inputs-groups">
                    <label>Salaire</label>
                    <input
                      type="text"
                      name="salaire"
                      value={editedEmploi.salaire}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[0-9]*[.,]?[0-9]*$/.test(value) || value === "") {
                          handleChange(e);
                        }
                      }}
                      required
                    />
                  </div>

                  {/* Sélection de l'emplacement parmi les options importées */}
                  <div className="inputs-groups">
                    <label>Emplacement</label>
                    <select
                      name="emplacement"
                      value={editedEmploi.emplacement}
                      onChange={handleChange}
                      required
                    >
                      {locations.map((loc, index) => (
                        <option key={index} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Catégories d'emploi disponibles */}
                  <div className="inputs-groups">
                    <label>Catégorie</label>
                    <select
                      name="categorie"
                      value={editedEmploi.categorie}
                      onChange={handleChange}
                      required
                    >
                      <option value="Technologie">Technologie</option>
                      <option value="Santé">Santé</option>
                      <option value="Environnement">Environnement</option>
                      <option value="Design">Design</option>
                      <option value="Management">Management</option>
                      <option value="Média">Média</option>
                      <option value="Finance">Finance</option>
                      <option value="Biologie">Biologie</option>
                      <option value="Énergie">Énergie</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  
                  {/* Champ pour l'email de l'employeur */}
                  <div className="inputs-groups">
                    <label>Email de l'employeur</label>
                    <input
                      type="email"
                      name="email_employeur"
                      value={editedEmploi.email_employeur}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Autres champs d'édition pour les exigences, la description et les responsabilités */}
                  <div className="inputs-groups">
                    <label>Description</label>
                    <textarea
                      name="description"
                      value={editedEmploi.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputs-groups">
                    <label>Exigences</label>
                    <textarea
                      name="exigence"
                      value={editedEmploi.exigence}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputs-groups">
                    <label>Responsabilités</label>
                    <textarea
                      name="responsabilite"
                      value={editedEmploi.responsabilite}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Bouton pour soumettre le formulaire */}
                  <button type="submit" className="edit-button">
                    Sauvegarder les modifications
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default EmploiDetail;
