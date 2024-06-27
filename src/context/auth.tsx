import { useContext } from "react";
import { AuthContext } from "./provider";

//this is a custom hook
export function useAuth() {
    return useContext(AuthContext);
}