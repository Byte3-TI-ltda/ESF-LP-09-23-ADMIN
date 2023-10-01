import { ReactNode } from 'react';
import { useLocation } from "react-router-dom";
import Menu from "../Menu";
import { LayoutContainer } from "./styles";

import allRoutes from '../../Routes';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const authPages = ['/login', '/signup', '/not-found'];
    const isAuthPage = authPages.includes(location.pathname);

    const doesRouteExist = allRoutes.some(route => route.path === location.pathname);

    return (
        <LayoutContainer>
            {!isAuthPage && doesRouteExist ? <Menu /> : null}
            <div className={!isAuthPage ? 'currentPage' : ''}>
                {children}
            </div>
        </LayoutContainer>
    )
}