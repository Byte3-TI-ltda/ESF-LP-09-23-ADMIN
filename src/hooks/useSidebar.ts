import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'

export default function useSidebarContext() {
    const { activeMenuBar, changeMenuStatus } = useContext(SidebarContext);

    return {
        activeMenuBar, changeMenuStatus
    }
}