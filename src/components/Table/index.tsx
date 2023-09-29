import { FilterOptions, TableContainer, TableWrapper } from "./styles";
import usersData from '../../data/users.json'

import { TbSortAscending, TbSortAscendingNumbers } from 'react-icons/tb';

export default function Table() {
    return (
        <TableWrapper>
            <FilterOptions>
                <button>
                    <TbSortAscending size={20} />

                </button>
                <button>
                    <TbSortAscendingNumbers size={20} />
                </button>
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