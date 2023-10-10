import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

import { Banner, LoginContainer, LoginFormContainer } from "./styles";
import heroImage from '../../assets/heroImage.png';

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';

import useUserToken from '../../hooks/useUserToken';
import useLoggedUser from '../../hooks/useLoggedUser';

type InputProps = {
    email: string
    password: string;
}

export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { userToken, setUserToken } = useUserToken();
    const { loggedUser, setLoggedUser } = useLoggedUser();

    const navigate = useNavigate();

    function handleRedirectUser() {
        navigate('/')
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const token = await user.getIdToken();
                setLoggedUser(user);

                if (token && user) {
                    setUserToken(token);
                    console.log('Token do usuário:', userToken);
                    console.log('Logged user: ', loggedUser);
                }
            }
        });

        // cancela o ouvinte ao desmontar o componente
        return () => unsubscribe();
    }, []);

    const onSubmit: SubmitHandler<InputProps> = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
            const user = userCredential.user;

            if (user) {
                setLoggedUser(user);
                console.log('Logged user: ', user);
                handleRedirectUser();
            }

            if (userToken !== '') {
                console.log('token: ', userToken);
                console.log(data);
            }

        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error(errorCode, errorMessage);
        }
    };

    return (
        <LoginContainer>
            <Banner className='banner'>
                <img src={heroImage} alt='Imagem do banner' />
                <h4>Acesso rápido, informações precisas. A evolução do seu dia a dia.</h4>
            </Banner>
            <LoginFormContainer>
                <h1>Login</h1>
                <p>Insira suas credenciais para entrar na plataforma.</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome de usuario"
                            {...register("email", { required: true })}

                            onChange={(event) => setUserEmail(event.target.value)}
                        />
                        {errors.email && <span>Este campo é obrigatório</span>}
                    </div>

                    <div>
                        <label htmlFor="">Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            {...register("password", { required: true })}

                            onChange={(event) => setUserPassword(event.target.value)}
                        />
                        {errors.password && <span>Este campo é obrigatório</span>}
                    </div>

                    <button>Sign in</button>
                    <a href="">Esqueci minha senha</a>
                </form>
            </LoginFormContainer>
        </LoginContainer>
    )
}