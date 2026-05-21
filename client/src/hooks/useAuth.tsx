import React, { createContext, useContext, useState } from "react";

interface UserData{
    id : number;
    userName: string;
    userAvatar: string;
}

interface AuthContextType{
    isLoggedIn: boolean;
    currentUser: UserData | null;
    login: (dataDariDB: UserData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}){
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<UserData | null> (null);
    const login = (dataDariDB: UserData) => {
        setIsLoggedIn(true);
        setCurrentUser(dataDariDB);
    }
    const logout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('UseAuth tidak terbaca');
    }
    return context;
}