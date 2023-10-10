import { ReactNode } from 'react'
import { createContext, useState, useEffect } from 'react';

interface UserTokenContextType {
    userToken: string;
    setUserToken: (token: string) => void;
}

interface UserTokenProviderProps {
    children: ReactNode;
}

export const UserTokenContext = createContext({} as UserTokenContextType)

const USER_TOKEN_STORAGE_KEY = 'admin:1.0.0:token';

export function UserTokenProvider({ children }: UserTokenProviderProps) {
    const [userToken, setUserToken] = useState<string>('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            localStorage.setItem(USER_TOKEN_STORAGE_KEY, userToken);
        }, 500); // 500 milissegundos = meio segundo

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, [userToken]);

    return (
        <UserTokenContext.Provider value={{
            userToken,
            setUserToken
        }}>
            {children}
        </UserTokenContext.Provider>
    )
}