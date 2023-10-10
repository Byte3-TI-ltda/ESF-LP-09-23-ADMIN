import Table from "../../components/Table";
import { DashboardContainer, SummaryCard, SummaryContainer } from "./styles";

import { FiUsers, FiCreditCard } from 'react-icons/fi';
import Chart from "../../components/Chart";

import useUsersData from '../../hooks/useUsersData';
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const LOGGED_USER_STORAGE_KEY = 'admin:1.0.0:loggedUser';

export default function Dashboard() {
    const { usersData, dataLoading } = useUsersData();
    const localLoggedUserData = localStorage.getItem(LOGGED_USER_STORAGE_KEY);

    return (
        (localLoggedUserData ? (
            <DashboardContainer>
                <h1>Dashboard</h1>

                <SummaryContainer>
                    <SummaryCard>
                        <div>
                            <FiUsers size={24} />
                        </div>
                        <p>Total de usuários:</p>
                        {dataLoading ? (
                            <div className='noBorder'>
                                <Loading />
                            </div>
                        ) : (
                            <span>
                                {usersData.length}
                            </span>
                        )
                        }
                    </SummaryCard>

                    <SummaryCard>
                        <div>
                            <FiCreditCard size={24} />
                        </div>
                        <p>Total de assinantes:</p>
                        {dataLoading ? (
                            <div className='noBorder'>
                                <Loading />
                            </div>
                        ) : (
                            <span>
                                {usersData.length}
                            </span>
                        )
                        }
                    </SummaryCard>
                </SummaryContainer>

                <div>
                    <h2>Atividade dos usuários</h2>
                    <Chart />
                </div>

                <div>
                    <h2>Dados dos usuários</h2>
                    <Table limit={5} hideButton="seeAll" />
                </div>
            </DashboardContainer>
        ) : (
            <Navigate to={'/login'} replace />
        ))
    )
}