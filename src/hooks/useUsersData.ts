import { useContext } from 'react'
import { UsersContext } from '../contexts/UsersContext';

export default function useSidebarContext() {
    const { usersData, dataLoading, setDataLoading } = useContext(UsersContext);

    return {
        usersData,
        dataLoading,
        setDataLoading
    }
}