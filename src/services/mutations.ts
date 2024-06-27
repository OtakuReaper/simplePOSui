import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginData } from "../types";
import { login } from "./api";

export function useLogin(){
    const queryClient = useQueryClient();

    return useMutation({
        //this will run before the mutation function
        onMutate:() => {
            console.log("mutating...");
        },
        
        //mutation function that will be called
        mutationFn: (data: loginData) => login(data),

        //if there was an error
        onError: () => {
            console.log("there was an error");
        },

        //when it completes
        onSuccess: () => {
            console.log("success");
        },

        //runs after the function
        onSettled: async(_, error) => {
            console.log("settled");
            if(error) {
                console.log("error");
            } else {
                await queryClient.invalidateQueries({queryKey: ["user"]});
            }
        },
    })
}