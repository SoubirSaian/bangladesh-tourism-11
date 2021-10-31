import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

    //   useauth hooks components 
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;