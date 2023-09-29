import { LayoutContainer } from "./styles";

import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    )
}