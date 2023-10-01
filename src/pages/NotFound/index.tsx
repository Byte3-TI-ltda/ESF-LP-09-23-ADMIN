import { Link } from "react-router-dom";
import { PageNotFoundContainer } from "./styles";

export default function NotFound() {
    return (
        <PageNotFoundContainer>
            <div>
                <h1>Erro 404</h1>
                <p>A página que você tentou encontrar não existe.</p>
            </div>

            <Link to={"/"}>
                <button>Voltar para a home</button>
            </Link>
        </PageNotFoundContainer>
    )
}