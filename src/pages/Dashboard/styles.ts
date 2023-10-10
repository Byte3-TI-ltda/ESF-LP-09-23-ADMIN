import styled from "styled-components";

export const DashboardContainer = styled.main`
    width: 100%;
    flex: 1;

    & > div {
        margin-top: 2rem;
        display: flex;
        flex-direction: column; 
        gap: 1rem;
    }
`

export const SummaryContainer = styled.header`
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media screen and (max-width: 1120px) {
        /* padding: 0.1rem;
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        > div {
            min-width: 11rem;
        } */

        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }
`

export const SummaryCard = styled.div`
    height: 10rem;
    padding: 1rem;
    border-radius: 6px;
    background: var(--gray-300);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;

    > div:not(.noBorder) {
        width: fit-content;
        padding: 0.5rem;
        border: 1px solid var(--gray-200);
        border-radius: 6px;

        display: flex;
        align-items: center;
    }

    span {
        font-weight: 600;
        font-size: var(--title-size);
    }

    &:hover {
        outline: 1px solid var(--accent-color);
    }
`