//Authentication Types
export interface UserAuthentication{
    id: string;
    username: string;
    session:{
        id: string;
        status: string;
        accessToken: string;
        refreshToken: string;
    }
}

export interface AuthProviderType {
    refreshAccessToken: () => void;
    logIn: any; //this is a mutation function
    authentication: UserAuthentication | null;
    loading: boolean;
    signOut: () => void;
}

export interface loginData {
    username: string;
    password: string;
}
