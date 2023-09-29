import styled from "styled-components";

export const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    tr {
        transition: 0.2s;
    }
    
    tbody tr:hover {
        opacity: 0.7;
    }

  th {
    padding: 0 2rem;
    text-align: left;
  }

  td {
    padding: 1.25rem 2rem;
    background: var(--gray-300);
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const FilterOptions = styled.div`
	margin-top: 2rem;
	width: fit-content;
	background-color: var(--gray-300);
	padding: 0.5rem;
	border-radius: 6px;

	display: flex;
	gap: 0.5rem;
	align-self: flex-end;

	button {
    	border: 1px solid var(--gray-200);
		border-radius: 6px;
    	padding: 0.5rem;
    	background: var(--gray-300);
    	color: var(--text-size);
		display: flex;
		align-items: center;

		&:hover {
			background: var(--gray-200);
		}
  	}
`