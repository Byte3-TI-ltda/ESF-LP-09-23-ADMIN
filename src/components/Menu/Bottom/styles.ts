import styled from "styled-components";

export const BottomMenuContainer = styled.nav`
    display: none;

    @media screen and (max-width: 1120px) {
        width: 100%;
        height: 4rem;
        position: fixed;
        bottom: 0;
        background-color: var(--gray-300);
        border-top: 1px solid var(--gray-200);
        z-index: 999;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;
            color: var(--text-color);
            text-decoration: none;
            font-weight: 500;
            transition: 0.2s;

            &.selected {
                color: var(--accent-color);
            }

            &:hover:not(.selected) {
                color: var(--accent-color);
            }
        }
  	}

    @media screen and (max-width: 480px) {
        a { 
            font-size: 75%;
        }
    }
`