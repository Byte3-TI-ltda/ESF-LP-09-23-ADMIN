import { ReactNode } from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface UserDataProps {
    firstName: string;
    lastName: string;
    email: string;
    whatsapp: string;
}

export interface User {
    id: string;
    data: UserDataProps;
    // createdAt: Date;
}

// Tipagem do contexto
interface UsersContextType {
    usersData: User[],
}

interface UsersProviderProps {
    children: ReactNode;
}

export const UsersContext = createContext({} as UsersContextType)

export function UsersProvider({ children }: UsersProviderProps) {
    const [usersData, setUsersData] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://esf-lp-backend.onrender.com/contacts/list', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        }).then(response => {
            if (response.data !== null) {
                const data = response.data;
                setUsersData(data);
            }
        }).catch(error => {
            console.error('Erro na requição', error)
        })
    }, [])

    console.log(usersData)

    return (
        <UsersContext.Provider value={{
            usersData,
        }}>
            {children}
        </UsersContext.Provider>
    )
}