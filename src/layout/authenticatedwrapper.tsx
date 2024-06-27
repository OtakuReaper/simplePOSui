import { ReactNode, useEffect, useState} from "react";
import { useAuth } from "../context/auth";
import { useLocation, useNavigate } from "react-router";
import { set } from "react-hook-form";
import Loading from "../components/loading";
import { Flex } from "@chakra-ui/react";

const AuthenticatedWrapper = ({ children }: {children: ReactNode }) => {
    //hooks
    const { authentication, loading } = useAuth();
    const [showLoading, setShowLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    //navigation
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();

    //determining whether the user is authenticated or not
    useEffect(() => {
        if(!authentication && !loading){
            navigate("/login", {replace: true});
            return;
        } else if (authentication && !loading){
            //check if the user is authenticated but it's not loading
            
            if(authentication.session.status == "Pending 2FA" && pathname !== "/login/2fa"){

                navigate("/login/2fa", {replace: true});
                return;

            } else if (authentication.session.status == "Active" && pathname === "/login/2fa"){
                navigate("/home", {replace: true});
                return;
            } else {
                setShowLoading(false);
            }
        }
    }, [setShowLoading, navigate, authentication, loading, pathname, setDarkMode]);

    //preventing flickering, show loading screen while the user is being authenticated
    if (showLoading || loading){
        return <Loading/>
    }

    return (
        <Flex
            width="100%" 
            height="100vh" 
            bgColor={darkMode ? "black" : "white"} 
            textColor={darkMode ? "white" : "black"}
            flexDirection="column"
            justifyItems="space-between"
        >
        
        </Flex>
    )
};