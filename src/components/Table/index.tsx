import { FilterOptions, TableContainer, TableWrapper } from "./styles";

import { TbSortAscending, TbSortAscendingNumbers, TbTableExport, TbTable } from 'react-icons/tb';

import useUsersData from '../../hooks/useUsersData';
import { exportToExcel } from "../../utils/exportToExcel";
import formatDate from "../../utils/formatDate";
import Loading from "../Loading";
// import formatDate from "../../utils/formatDate";

export default function Table() {
    const { usersData, dataLoading } = useUsersData();

    const handleExport = () => {
        exportToExcel(usersData, 'dados'); // 'dados' é o nome do arquivo Excel
    };

    return (
        <TableWrapper>
            {dataLoading ? (
                <div className="loading">
                    <Loading />
                </div>
            ) : (
                <>
                    <FilterOptions>
                        <div>
                            <button title="Ordem crescente">
                                <TbSortAscending size={20} />
                            </button>
                            <button title="Ordem numérica">
                                <TbSortAscendingNumbers size={20} />
                            </button>
                        </div>

                        <div className="divider" />

                        <div>
                            <div>
                                <button title="Ver todos os dados">
                                    <TbTable size={20} />
                                    <span>Ver tudo</span>
                                </button>
                            </div>

                            <div>
                                <button title="Exportar dados para excel" onClick={handleExport}>
                                    <TbTableExport size={20} />
                                    <span>Exportar dados</span>
                                </button>
                            </div>
                        </div>
                    </FilterOptions><div className="table">
                        <TableContainer>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>Email</th>
                                    <th>Data de inscrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map((user, index) => (
                                    index < 5 && (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.data.firstName} {user.data.lastName}</td>
                                            <td>{user.data.whatsapp}</td>
                                            <td>{user.data.email}</td>
                                            <td>{formatDate(user.data.createdAt)}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </TableContainer>
                    </div>
                </>
            )}
        </TableWrapper>
    )
}