import { useQuery } from "@tanstack/react-query";
import { refreshToken } from "./api";
import { UserAuthentication } from "../types";

export function useRefreshToken(userAuth: UserAuthentication | null){
    
    //refresh timer
    const refreshTime = 1000 * 25 * 60; //25 minutes

    return useQuery({
        queryKey: ["refresh-token"],
        queryFn: refreshToken,
        refetchInterval: userAuth ? refreshTime : false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: false,
    });
}