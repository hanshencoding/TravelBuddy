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

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<UserData | null>(() => {
        const savedUser = localStorage.getItem('travel_buddy_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return localStorage.getItem('travel_buddy_user') ? true : false;
    });

    const login = (dataDariDB: UserData) => {
        setIsLoggedIn(true);
        setCurrentUser(dataDariDB);
        localStorage.setItem('travel_buddy_user', JSON.stringify(dataDariDB));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        localStorage.removeItem('travel_buddy_user');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
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