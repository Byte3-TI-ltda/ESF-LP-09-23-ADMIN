import { useContext } from 'react'
import { UsersContext } from '../contexts/UsersContext';

export default function useSidebarContext() {
    const { usersData } = useContext(UsersContext);

    return {
        usersData
    }
}