import React, { useEffect, useState } from "react";
import NavBarEnt from "../NavBarEnt/NavBarEnt";
import { locations } from '../../data/locations'; // Importer la liste des lieux
import "./OffreEmploi.css";

function ModifierOffreEmploi({ emploi }) {
  const [companyName, setCompanyName] = useState(emploi.nom_entreprise || "");
  const [jobTitle, setJobTitle] = useState(emploi.nom_poste || "");
  const [salary, setSalary] = useState(emploi.salaire || "");
  const [location, setLocation] = useState(emploi.emplacement || locations[0]);  // Utiliser l'emplacement de l'emploi
  const [category, setCategory] = useState(emploi.categorie || "Technologie");
  const [employerEmail, setEmployerEmail] = useState(emploi.email_employeur || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nom_entreprise: companyName,
      nom_poste: jobTitle,
      salaire: salary,
      emplacement: location,
      categorie: category,
      email_employeur: employerEmail,
    });

    // Ici vous pouvez appeler une fonction pour mettre à jour l'emploi dans votre contexte ou API
  };

  return (
    <div className="entreprise-container">
      <NavBarEnt />
      <div className="content">
        <div className="offre-emploi-container">
          <h2>Modifier l'offre d'emploi</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Nom de l'entreprise</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Nom du poste</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Salaire</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[0-9]*[.,]?[0-9]*$/.test(value) || value === "") {
                    setSalary(value);
                  }
                }}
                required
              />
            </div>
            <div className="input-group">
              <label>Emplacement</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label>Catégorie</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
            <div className="input-group">
              <label>Email de l'employeur</label>
              <input
                type="email"
                value={employerEmail}
                onChange={(e) => setEmployerEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enregistrer les modifications</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModifierOffreEmploi;
