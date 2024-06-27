import { useState, useEffect} from "react";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router";
import Loading from "../components/loading";

//this is the layout for unauthenticated users
const UnauthenticatedWrapper = ({ children }: { children: React.ReactNode }) => {

    //hooks
    const { authentication, loading } = useAuth();
    const [showLoading, setShowLoading] = useState(true);

    //navigation
    const navigate = useNavigate();

    useEffect(() => {
        if(authentication && !loading){
            navigate("/home", { replace: true });
        } else {
            setShowLoading(false);
        }
    }, [authentication, loading, navigate]);

    //if the user it not authenticated, then redirect them to the login
    if(authentication || loading || showLoading){
        return <Loading/>; //TODO: shouldn't this a redirect?
    }

    return children;
};

export default UnauthenticatedWrapper;