import { useLocation } from "react-router-dom";
import SideMenu from "./Aside";
import BottomMenu from "./Bottom";

export default function Menu() {
    const location = useLocation();
    const url = location.pathname;

    return (
        <>
            <SideMenu currentURL={url} />
            <BottomMenu currentURL={url} />
        </>
    )
}