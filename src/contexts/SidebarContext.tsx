import { ReactNode, useState } from "react";
import { createContext } from "react";

// Tipagem do contexto
interface SidebarContextType {
    activeMenuBar: boolean;
    changeMenuStatus: () => void;
}

// Propriedades do provider
interface SidebarProviderProps {
    children: ReactNode,
}

// Criacao do contexto
export const SidebarContext = createContext({} as SidebarContextType)

export function SidebarProvider({ children }: SidebarProviderProps) {
    const [activeMenuBar, setActiveMenuBar] = useState<boolean>(false);

    // Mudanca de estado do contexto com base no estado atual
    function changeMenuStatus() {
        activeMenuBar === true ? setActiveMenuBar(false) : setActiveMenuBar(true);
    }

    return (
        <SidebarContext.Provider value={{
            activeMenuBar,
            changeMenuStatus
        }}>
            {children}
        </SidebarContext.Provider>
    )
}