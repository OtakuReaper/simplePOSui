import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { login } from "../services/api";
import { AuthProviderType, UserAuthentication, loginData } from "../types";
import { useRefreshToken } from "../services/queries";

export const AuthContext = createContext({} as AuthProviderType);

export const AuthProvider = (props: {children: React.ReactNode}) => {

    //hooks
    const [authentication, setAuthentication] = useState<UserAuthentication | null>(null);
    const [loading, setLoading] = useState(true);
    const queryClient = useQueryClient();
    const toast = useToast();

    //function to handle the error
    const handleOnError = (error: AxiosError) => {
        //if there is no access token; the page is loading
        if(!authentication){
            return;
        }

        //status 401 means the access token is expired
        if(error.response?.status === 401 && authentication){
            toast({
                title: "Session Expired",
                description: "Your session has expired. Please log in again.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });

            setAuthentication(null);

        } else {
            //if the error is anything else
            toast({
                title: "System Error",
                description: "There was an error. Please try again later.",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    }

    //query to refresh the token
    const refreshTokenQuery = useRefreshToken(authentication);

    //processing the refresh token query
    if(refreshTokenQuery.isSuccess){
        //if the refresh token query is successful
        setAuthentication(refreshTokenQuery.data.data as UserAuthentication);
        setLoading(false);
    } else {
        //if the refresh token query is not successful
        handleOnError(refreshTokenQuery.error as AxiosError);
    }
    

    //function to refresh the access token
    const refreshAccessToken = () => {
        setLoading(true);
        queryClient.invalidateQueries({queryKey: ["refresh-authentication"]});
    }

    const logIn = useMutation({
        //The mutation function
        mutationFn: (data: loginData) => login(data),

        //runs before the mutation function
        onMutate: () => {
            console.log("mutating...");
        },

        //when it completes the function
        onSuccess: (data: UserAuthentication) => {
            setAuthentication(data);
        },
        
        //if there was an error
        onError: () => {
            console.log("error");
        },

        //when it's settled
        onSettled: async(_, error) => {
            console.log("settled");
            if(error){
                console.log("error");
            } else {
                await queryClient.invalidateQueries({queryKey: ["refresh-authentication"]});
            }
        },
    });

    const signOut = () => {
        setAuthentication(null);
    };

    const value = {
        refreshAccessToken,
        logIn: logIn,
        signOut,
        authentication,
        loading,
    }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>    
}