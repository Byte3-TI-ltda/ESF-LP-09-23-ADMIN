import { useContext } from 'react'
import { UserTokenContext } from '../contexts/UserToken';

export default function useUserTokenContext() {
    const { userToken, setUserToken } = useContext(UserTokenContext);

    return {
        userToken,
        setUserToken
    }
}