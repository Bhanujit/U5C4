import { Navigate } from "react-router-dom"

import { useSelector } from "react-redux";


 export const ProtectedRoute = ({children})=>{
    const auth = useSelector((store) =>(store.auth))
    if(!auth){
      return <Navigate to="/Login"/>
    }
    return children
  }