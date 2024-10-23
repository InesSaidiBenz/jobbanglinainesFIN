 import { useEmploiContext } from "../../hooks/useEmploiContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
 
 const EmploiDetail = ({ emploi})=>{

  const {dispatch} = useEmploiContext()
  const handleClick = async () => {
    const response = await fetch('/api/offreEmploi/' + emploi._id, {
      method:'DELETE'
    })

    const json = await response.json()

    if(response.ok){
      console.log('Suppression réussie:', json); 
      dispatch({type:'DELETE_EMPLOIS', payload: json})
    }
  }

    return (
        <div>
          <ul className="lmj-emploi-list">
        
                <div className="emploi-container" >
                  <h5 className="jobTitle">{emploi.nom_poste}</h5>
                  <span className="jobEntreprise">{emploi.nom_entreprise}</span>
                  <span className="jobSector">{emploi.categorie}</span>
                  <span className="jobSalary">{emploi.salaire}</span>
                  <span className="jobLocation">{emploi.emplacement}</span>
                  <span className="jobLocation">{emploi.email_employeur}</span>
                  <p>{formatDistanceToNow(new Date(emploi.createdAt), {addSuffix: true})}</p>
                  <button className="deleteButton" onClick={handleClick}> Supprimer</button>
                 

                 
                </div>
              
          
          </ul>
        </div>
      );


}
export default EmploiDetail;