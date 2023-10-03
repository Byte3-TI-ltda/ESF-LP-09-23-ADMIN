import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;

  & > div, .currentPage {
    width: 100%;
  }

  .currentPage {
    padding: 2rem;

    @media screen and (max-width: 1120px) {
    	padding: 0.8rem 0.8rem 5rem 0.8rem;
  	}
  }
`;