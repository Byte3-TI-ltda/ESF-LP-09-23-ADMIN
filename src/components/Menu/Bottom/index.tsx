import { FiHelpCircle, FiHome, FiSettings, FiUser, FiUsers } from "react-icons/fi";
import { BottomMenuContainer } from "./styles";
import { Link } from "react-router-dom";

interface BottomMenuProps {
    currentURL: string;
}

export default function BottomMenu({ currentURL }: BottomMenuProps) {
    return (
        <BottomMenuContainer>
            <Link
                to={'/'}
                className={currentURL.endsWith("/") ? "selected" : ""}
            >
                <FiHome size={20} />
                <span>Home</span>
            </Link>

            <Link
                to={'/all-clients'}
                className={currentURL.endsWith("/all-clients") ? "selected" : ""}
            >
                <FiUsers size={24} />
                <span>Clientes</span>
            </Link>

            <Link
                to={'/profile'}
                className={currentURL.endsWith("/profile") ? "selected" : ""}
            >
                <FiUser size={20} />
                <span>Meu perfil</span>
            </Link>

            <Link
                to={'/settings'}
                className={currentURL.endsWith("/settings") ? "selected" : ""}
            >
                <FiSettings size={20} />
                <span>Configurações</span>
            </Link>

            <Link
                to={'/help'}
                className={currentURL.endsWith("/help") ? "selected" : ""}
            >
                <FiHelpCircle size={20} />
                <span>Ajuda</span>
            </Link>
        </BottomMenuContainer>
    )
}