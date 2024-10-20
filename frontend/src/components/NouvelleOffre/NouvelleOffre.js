//creation offre d'emploi fetch

import React, { useState,useEffect } from "react";
import NavBarEnt from "../NavBarEnt/NavBarEnt";
import './NouvelleOffre.css'

const NouvelleOffre = () =>{
    const[nomEntreprise, setNomEntreprise] = useState('')
    const[nomPoste, setNomPoste] = useState('')
    const[salaire, setSalaire] = useState('')
    const[emplacement, setEmplacement] = useState('')
    const[categorie, setCategorie] = useState('')
    const[emailEmployeur, setEmailEmployeur] = useState('')
    const[error, setError] = useState(null)


const handleSubmit = async (e) => {
    e.preventDefault()

    const offreEmploi = { 
        nom_entreprise: nomEntreprise,
        nom_poste: nomPoste,
        salaire: salaire,
        emplacement: emplacement,
        categorie: categorie,
        email_employeur: emailEmployeur}


        const response = await fetch('/api/offreEmploi/', {
            method:'POST',
            body: JSON.stringify(offreEmploi),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
                setError(json.error)
        }
        if(response.ok){
            setNomEntreprise('')
            setNomPoste('')
            setSalaire('')
            setEmplacement('')
            setCategorie('')
            setEmailEmployeur('')
            setError(null)
            console.log('Offre Ajouter mon amour')
        }
    }

    return(
        <div className="entreprise-container">
        <NavBarEnt />

            <div className="offre-emploi-container">
              <h2>Crée une offre d'emploi</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Nom de l'entreprise</label>
                  <input
                    type="text"
                    onChange={(e) => setNomEntreprise(e.target.value)}
                    value={nomEntreprise}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Nom du poste</label>
                  <input
                    type="text"
                    onChange={(e) => setNomPoste(e.target.value)}
                    value={nomPoste}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Salaire</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9]*[.,]?[0-9]*$/.test(value) || value === "") {
                        setSalaire(value);
                      }
                    }}
                    value={salaire}
                    required
                  />
                </div>
  
                <div className="input-group">
                  <label>Emplacement</label>
                  <select
                    onChange={(e) => setEmplacement(e.target.value)}
                    value={emplacement}
                    required

                  >
                    <option value="Montréal">Montréal</option>
                    <option value="Québec">Québec</option>
                    <option value="Laval">Laval</option>
                    <option value="Gatineau">Gatineau</option>
                    <option value="Longueuil">Longueuil</option>
                    <option value="Sherbrooke">Sherbrooke</option>
                    <option value="Saguenay">Saguenay</option>
                    <option value="Trois-Rivières">Trois-Rivières</option>
                    <option value="Drummondville">Drummondville</option>
                    <option value="Autre">Autre</option>
                    
                  </select>
                </div>
                
                <div className="input-group">
                  <label>Catégorie</label>
                  <select
                    onChange={(e) => setCategorie(e.target.value)}
                    value={categorie}
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
                    onChange={(e) => setEmailEmployeur(e.target.value)}                    
                    value={emailEmployeur}
                    required
                  />
                </div>
                <button type="submit">Soumettre l'offre d'emploi</button>
                {error && <div>{error}</div>}
              </form>
            </div>
         
          
        </div>
   
    )
}

export default NouvelleOffre;