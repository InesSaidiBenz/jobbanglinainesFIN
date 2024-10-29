import { useCandidatContext } from "./useCandidatContext"


export const useCandidatLougout = () => {
    const {dispatch} = useCandidatContext()
    const lougoutcandidat = () => {

        //remove user from storage
        localStorage.removeItem('candidat')
        dispatch({type:'LOGOUTCANDIDAT'})
}

return {lougoutcandidat}
}