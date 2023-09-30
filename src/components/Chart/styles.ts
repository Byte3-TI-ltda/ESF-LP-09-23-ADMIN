import styled from "styled-components";

export const ChartContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;

    .chart {
        height: 30rem !important;

        @media screen and (max-width: 1120px) {
    	    width: 100% !important;
            height: 15rem !important;
  	    }
    }
`