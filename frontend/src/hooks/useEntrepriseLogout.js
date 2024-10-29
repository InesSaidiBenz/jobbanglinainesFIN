import { useEntrepriseContext } from "./useEntrepriseContext"


export const useEntrepriseLougout = () => {

    const {dispatch} = useEntrepriseContext()
    const lougoutentreprise = () => {

        //remove user from storage
        localStorage.removeItem('entreprise')

        //dispatch lougout action
        dispatch({type:'LOGOUTENTREPRISE'})

}

return {lougoutentreprise }
}