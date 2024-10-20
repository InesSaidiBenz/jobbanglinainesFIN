import React, { useState,useEffect } from "react";
import { EmploiList } from "../../data/emploi";
import EmploiDetails from "./EmploiDetails"
import "./MesAnnonces.css";
import OffreEmploi from "../OffreEmploi/OffreEmploi";
import NouvelleOffre from "../NouvelleOffre/NouvelleOffre";
const MesAnnonces = ({ connectedEmployerEmail }) => {
  //const [emplois, setEmplois] = useState(EmploiList);
  const [emplois, setEmplois] = useState(null);

/*
  const handleDelete = (emploiToDelete) => {
    setEmplois(emplois.filter((emploi) => emploi !== emploiToDelete));
  };
  */
/*
  // Filtrer les emplois selon l'employeur connecté
  const filteredEmploiList = emplois.filter(
    (emploi) => emploi.email_employeur === connectedEmployerEmail
  );
*/
  const filteredEmploiList = emplois ? emplois.filter(
    (emploi) => emploi.email_employeur === connectedEmployerEmail
  ) : [];

  // Ajoute un log pour voir les emplois filtrés
  console.log('emplois filtrés:', filteredEmploiList);




//fetch tout les emploi et supprimer et modifier potentiellement
useEffect(()=>{
const fetchEmploi = async()=>{
  const response = await fetch('/api/offreEmploi')
  const json = await response.json()

  if(response.ok){
      setEmplois(json)
  }
}

fetchEmploi()

},[])

return (
  <div>
    <ul className="lmj-emploi-list">
    {emplois && emplois.map((emploi) =>(
    <EmploiDetails key ={emploi._id} emploi={emploi} />
    ))}
    </ul>
    <NouvelleOffre />


 </div>
)

/*

  return (
    <div>
      <ul className="lmj-emploi-list">
      {emplois && emplois.map((emploi) =>(
      <EmploiDetails key ={emploi._id} emploi={emploi} />
      ))}


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
*/
}
export default MesAnnonces;
