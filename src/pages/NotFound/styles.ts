import styled from "styled-components";

export const PageNotFoundContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    
    div, button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        flex-direction: column;
        gap: 1rem;
    }

    button {
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
`