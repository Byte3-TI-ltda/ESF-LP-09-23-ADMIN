import { createContext, useState, ReactNode, useEffect } from 'react';
import { User } from "firebase/auth";

interface LoggedUserContextType {
    loggedUser: User | undefined;
    setLoggedUser: (user: User) => void;
}

interface LoggedUserProviderProps {
    children: ReactNode;
}

export const LoggedUserContext = createContext({} as LoggedUserContextType)

const LOGGED_USER_STORAGE_KEY = 'admin:1.0.0:loggedUser';

export function LoggedUserProvider({ children }: LoggedUserProviderProps) {
    const [loggedUser, setLoggedUser] = useState<User>();

    useEffect(() => {
        localStorage.setItem(LOGGED_USER_STORAGE_KEY, JSON.stringify(loggedUser));
    }, [])

    return (
        <LoggedUserContext.Provider value={{
            loggedUser,
            setLoggedUser
        }}>
            {children}
        </LoggedUserContext.Provider>
    )
}