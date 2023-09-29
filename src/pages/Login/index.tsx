import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

import { Banner, LoginContainer, LoginFormContainer } from "./styles";

type InputProps = {
    username: string
    password: string;
}

export default function Login() {
    const navigate = useNavigate();

    function handleRedirectUser() {
        navigate('/')
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>()

    const onSubmit: SubmitHandler<InputProps> = (data) => {
        handleRedirectUser();
        console.log(data)
    }

    return (
        <LoginContainer>
            <Banner className='banner'>
                Text
            </Banner>
            <LoginFormContainer>
                <h1>Login</h1>
                <p>Insira suas credenciais para entrar na plataforma.</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Digite seu nome de usuario" {...register("username", { required: true })} />
                        {errors.username && <span>Este campo é obrigatório</span>}
                    </div>

                    <div>
                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("password", { required: true })} />
                        {errors.password && <span>Este campo é obrigatório</span>}
                    </div>

                    <button>Sign in</button>
                    <a href="">Esqueci minha senha</a>
                </form>
            </LoginFormContainer>
        </LoginContainer>
    )
}