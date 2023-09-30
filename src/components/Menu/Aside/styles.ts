import styled from "styled-components";

export const SideBarContainer = styled.aside`
    width: fit-content;
    height: 100dvh;
    background: var(--gray-200);
    padding: 2rem 1rem;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
   
    &.open {
        max-width: 15rem;
        width: 100%;

        span {
            display: block;
        }
    }

    @media screen and (max-width: 1120px) {
    	display: none;
  	}
`

export const SidebarActions = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .topLinks, .bottomLinks {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        width: fit-content;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: var(--text-color)
    }

    a {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: var(--text-color);
        padding: 0.5rem;
        border-radius: 6px;
        font-weight: 500;
        transition: 0.2s;

        &.selected {
            color: var(--gray-300);
            background: var(--accent-color);
        }

        &:hover:not(.selected) {
            color: var(--accent-color);
        }
    }

    span {
        display: none;
    }
`