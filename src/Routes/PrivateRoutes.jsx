import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;