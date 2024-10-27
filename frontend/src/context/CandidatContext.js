import { createContext, useReducer } from "react";



export const CandidatContext = createContext()

export const candidatReducer = (state,action)=>{

switch(action.type) {
    case 'LOGINCANDIDAT':
        return {candidat : action.payload}

    case 'LOGOUCANDIDAT':
        return {candidat: null}

    default:
        return state
}

}

export const CandidatContextProvider =({children}) => {

const [state,dispatch] = useReducer(candidatReducer, {
    candidat:null
})

console.log('CandidatContext: ', state)


return(

    <CandidatContext.Provider value={{...state, dispatch}}>

    {children}

    </CandidatContext.Provider>
)


}




