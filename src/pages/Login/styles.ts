import styled from "styled-components";

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
`

export const Banner = styled.div`
    width: 100%;
    background-color: var(--gray-300);
`;

export const LoginFormContainer = styled.div`
    width: 100%;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    p {
        color: var(--gray-100)
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 30rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        input {
            padding: 0.8rem 1.5rem;
            width: 100%;
            border: none;
            border-radius: 6px;
            background: var(--input-bg);
            color: var(--text-color);
            
            &:focus {
                outline-color: var(--accent-color); 
                outline-width: 2px; 
                outline-style: solid;
            }
        }

        button {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 6px;
            font-size: var(--subtitle-text);
            color: var(--text-color);
            background: var(--accent-color);
            padding: 0.8rem 1.5rem;
            transition: 0.2s;
            color: var(--input-bg);

            &:hover {
                opacity: 0.9;
            }
        }

        a {
            width: fit-content;
            margin-left: auto;
        }

        span {
            color: var(--danger-color);
        }
    }
`;