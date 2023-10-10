import styled from "styled-components";

export const ChartContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--gray-200);
    border-radius: 6px;
    padding: 0.5rem;

    .chart {
        height: 26em !important;

        .tooltip {
            background: var(--gray-200) !important;
            border-radius: 6px;
        }

        @media screen and (max-width: 1120px) {
    	    width: 100% !important;
            height: 15rem !important;
  	    }
    }

    .loading {
        width: 100%;
        padding: 2rem;
        display: flex;
        justify-content: center;
    }
`