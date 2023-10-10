import { useContext } from 'react'
import { LoggedUserContext } from '../contexts/LoggedUser';

export default function useUserTokenContext() {
    const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);

    return {
        loggedUser,
        setLoggedUser
    }
}