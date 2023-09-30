import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Cores para o modo escuro */
  :root {
    /* Cores */
    --background: #171717; /* Cor de fundo */
    --text-color: #ffffff; /* Cor do texto principal */
    --accent-color: #fcbf49; /* Cor de destaque/acento */
    --input-bg: #0D0D0D; 
    --input-color: #555758; 
    --danger-color: #ef233c;

    --gray-300: #2C2C2C;
    --gray-200: #474747;
    --gray-100: #dcdcdd;


    /* Tamanho de fontes */
    --title-size: 2rem;
    --subtitle-size: 1.5rem;
    --label-size: 1.25rem;
    --text-size: 1rem;
  }

  /* Outros estilos globais */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--text-color);
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    overflow-x: hidden;

    @media screen and (max-width: 1120px) {
    	font-size: 90%;
  	}
  }

  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-size: var(--text-size)
  }

  label {
    font-size: var(--label-size)
  }

  a {
    text-decoration: none;
    color: var(--accent-color);
  }
`;