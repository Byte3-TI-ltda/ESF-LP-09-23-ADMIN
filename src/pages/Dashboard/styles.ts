import styled from "styled-components";

export const DashboardContainer = styled.main`
    padding: 2rem;
    width: 100%;
`

export const SummaryContainer = styled.header`
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`

export const SummaryCard = styled.div`
    height: 10rem;
    padding: 1rem;
    border-radius: 6px;
    background: var(--gray-300);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
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
`