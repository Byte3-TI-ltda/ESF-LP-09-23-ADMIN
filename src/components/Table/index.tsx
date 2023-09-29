import { FilterOptions, TableContainer, TableWrapper } from "./styles";
import usersData from '../../data/users.json'

import { TbSortAscending, TbSortAscendingNumbers, TbTableExport } from 'react-icons/tb';

import * as XLSX from 'xlsx';

interface UserData {
    id: string;
    name: string;
    email: string;
    date: string;
}

export default function Table() {
    function exportToExcel(data: UserData[], fileName: string) {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    }

    const handleExport = () => {
        exportToExcel(usersData, 'dados'); // 'dados' é o nome do arquivo Excel
    };

    return (
        <TableWrapper>
            <FilterOptions>
                <div>
                    <button>
                        <TbSortAscending size={20} />
                    </button>
                    <button>
                        <TbSortAscendingNumbers size={20} />
                    </button>
                </div>

                <div className="divider" />

                <div>
                    <button onClick={handleExport}>
                        <TbTableExport size={20} />
                        <span>Exportar dados</span>
                    </button>
                </div>
            </FilterOptions>
            <TableContainer>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data de inscrição</th>
                    </tr>
                </thead>
                {usersData.map(user => (
                    <tbody key={user.id}>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                        </tr>
                    </tbody>
                ))}
            </TableContainer>
        </TableWrapper>
    )
}