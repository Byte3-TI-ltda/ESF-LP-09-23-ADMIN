import Table from "../../components/Table";
import { DashboardContainer, SummaryCard, SummaryContainer } from "./styles";
import usersData from '../../data/users.json'

import { FiUsers, FiCreditCard } from 'react-icons/fi';
import Chart from "../../components/Chart";

export default function Dashboard() {
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>

            <SummaryContainer>
                <SummaryCard>
                    <div>
                        <FiUsers size={24} />
                    </div>
                    <p>Total de usuários:</p>
                    <span>{usersData.length}</span>
                </SummaryCard>

                <SummaryCard>
                    <div>
                        <FiCreditCard size={24} />
                    </div>
                    <p>Total de assinantes:</p>
                    <span>{usersData.length}</span>
                </SummaryCard>
            </SummaryContainer>

            <div>
                <h2>Dados dos usuários</h2>
                <Table />
            </div>

            <div>
                <h2>Atividade dos usuários</h2>
                <Chart />
            </div>
        </DashboardContainer>
    )
}