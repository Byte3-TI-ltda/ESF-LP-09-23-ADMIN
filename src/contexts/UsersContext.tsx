import { ReactNode } from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import useUserTokenContext from '../hooks/useUserToken';
import { useLocation } from 'react-router-dom';

interface UserDataProps {
    firstName: string;
    lastName: string;
    email: string;
    whatsapp: string;
    createdAt: string;
}

export interface User {
    id: string;
    data: UserDataProps;
}

// Tipagem do contexto
interface UsersContextType {
    usersData: User[],
    dataLoading: boolean;
    setDataLoading: (status: boolean) => void;
}

interface UsersProviderProps {
    children: ReactNode;
}

export const UsersContext = createContext({} as UsersContextType)

const USERS_DATA_STORAGE_KEY = 'admin:1.0.0:usersData';

export function UsersProvider({ children }: UsersProviderProps) {
    const [usersData, setUsersData] = useState<User[]>([]);
    const [localData, setLocalData] = useState<User[]>([]);
    const [dataLoading, setDataLoading] = useState<boolean>(true);

    const { userToken, setUserToken } = useUserTokenContext();

    const location = useLocation();

    useEffect(() => {
        setInterval(() => {
            setUserToken(localStorage.getItem('admin:1.0.0:token')!);
        }, 500);

        const localUsersData = localStorage.getItem(USERS_DATA_STORAGE_KEY);
        setLocalData(JSON.parse(localUsersData!));
        console.log('localStorage: ', userToken);

        if (location.pathname === '/' && userToken && userToken !== '' && !localUsersData) {
            axios.get('https://esf-lp-backend.onrender.com/contacts/list', {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Access-Control-Allow-Origin': '*',
                },
            }).then(response => {
                if (response.data !== null) {
                    const data = response.data;
                    localStorage.setItem(USERS_DATA_STORAGE_KEY, JSON.stringify(data));
                    setUsersData(data);
                    setDataLoading(false);
                    console.log('FEZ A REQUEST')
                }
            }).catch(error => {
                console.error('Erro na requisição', error);
            });
        } else {
            if (localUsersData) {
                const parsedData = JSON.parse(localUsersData);
                setUsersData(parsedData);
                console.log('NAO FEZ A REQUEST');
                setDataLoading(false);
            }
        }
    }, [location.pathname]);

    console.log(usersData)

    return (
        <UsersContext.Provider value={{
            usersData,
            dataLoading,
            setDataLoading
        }}>
            {children}
        </UsersContext.Provider>
    )
}