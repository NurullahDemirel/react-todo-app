
import {useNavigate,Navigate} from "react-router-dom";
import {useContext} from "react";
const ProtectedRoute = ({children}) => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    if (!username){
        return <Navigate to="/"/>
    }
    else {
        return  children;
    }
}

export default ProtectedRoute;