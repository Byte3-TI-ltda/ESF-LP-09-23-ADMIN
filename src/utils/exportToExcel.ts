import { User } from "../contexts/UsersContext";

import * as XLSX from 'xlsx';

export function exportToExcel(data: User[], fileName: string) {
    // Funcao que retorna os dados de forma plana, pois ha um outro objeto dentro
    const flattenedData = data.map(user => ({
        id: user.id,
        ...user.data,
    }));

    // Criacao de planilha com dados do array
    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
}