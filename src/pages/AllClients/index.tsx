import Table from "../../components/Table";

import useUsersData from '../../hooks/useUsersData';
import { ClientsContainer } from "./styles";

export default function AllClients() {
    const { usersData } = useUsersData();
    return (
        <ClientsContainer>
            <header>
                <h1>Todos os clientes</h1>
                <p>Visualização de todos os clientes cadastrados na sua plataforma.</p>
            </header>
            <Table limit={usersData.length} hideButton="orderNumber" />
        </ClientsContainer>
    )
}