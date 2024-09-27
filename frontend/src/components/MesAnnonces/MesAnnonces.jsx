import React, { useState } from "react";
import { EmploiList } from "../../data/emploi";
import "./MesAnnonces.css";

const MesAnnonces = ({ connectedEmployerEmail }) => {
  const [emplois, setEmplois] = useState(EmploiList);

  const handleDelete = (emploiToDelete) => {
    setEmplois(emplois.filter((emploi) => emploi !== emploiToDelete));
  };

  // Filtrer les emplois selon l'employeur connecté
  const filteredEmploiList = emplois.filter(
    (emploi) => emploi.email_employeur === connectedEmployerEmail
  );

  // Ajoute un log pour voir les emplois filtrés
  console.log('emplois filtrés:', filteredEmploiList);

  return (
    <div>
      <ul className="lmj-emploi-list">
        {filteredEmploiList.length > 0 ? (
          filteredEmploiList.map((emploi) => (
            <div className="emploi-container" key={emploi.nom_poste}>
              <h3 className="jobTitle">{emploi.nom_poste}</h3>
              <span className="jobEntreprise">{emploi.nom_entreprise}</span>
              <span className="jobSector">{emploi.categorie}</span>
              <span className="jobSalary">{emploi.salaire}</span>
              <span className="jobLocation">{emploi.emplacement}</span>
              <div className="button-container">
                <button
                  className="buttonx"
                  onClick={() => handleDelete(emploi)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        ) : (
          <li>Aucune offre d'emploi disponible.</li>
        )}
      </ul>
    </div>
  );
};

export default MesAnnonces;
