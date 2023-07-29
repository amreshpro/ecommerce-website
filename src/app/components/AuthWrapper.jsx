import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const AuthWrapper = ({children}) => {

    const authValue = useSelector((state)=>state.auth)
 

  return (
    <>
    {
authValue ?  children : <Navigate to="/login" replace={true}  />

    }

    </>
  )
}
export default AuthWrapper