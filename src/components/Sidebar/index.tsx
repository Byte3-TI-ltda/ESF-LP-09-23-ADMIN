import { Link, useLocation } from "react-router-dom";
import useSidebarContext from "../../hooks/useSidebar";
import { SideBarContainer, SidebarActions } from "./styles";

import { FiHome, FiSettings, FiMenu, FiHelpCircle, FiUser } from 'react-icons/fi'

export default function Sidebar() {
    const { activeMenuBar, changeMenuStatus } = useSidebarContext();

    const location = useLocation();
    const currentURL = location.pathname;

    return (
        <SideBarContainer className={activeMenuBar === true ? 'open' : ''}>
            <SidebarActions>
                <div className='topLinks'>
                    <button onClick={changeMenuStatus}>
                        <FiMenu size={24} />
                    </button>

                    <Link
                        to={'/'}
                        className={currentURL.endsWith("/") ? "selected" : ""}
                    >
                        <FiHome size={24} />
                        <span>Home</span>
                    </Link>
                </div>

                <div className='bottomLinks'>
                    <Link
                        to={'/profile'}
                        className={currentURL.endsWith("/profile") ? "selected" : ""}
                    >
                        <FiUser size={24} />
                        <span>Meu perfil</span>
                    </Link>

                    <Link
                        to={'/settings'}
                        className={currentURL.endsWith("/settings") ? "selected" : ""}
                    >
                        <FiSettings size={24} />
                        <span>Configurações</span>
                    </Link>

                    <Link
                        to={'/help'}
                        className={currentURL.endsWith("/help") ? "selected" : ""}
                    >
                        <FiHelpCircle size={24} />
                        <span>Ajuda</span>
                    </Link>
                </div>
            </SidebarActions>
        </SideBarContainer>
    )
}