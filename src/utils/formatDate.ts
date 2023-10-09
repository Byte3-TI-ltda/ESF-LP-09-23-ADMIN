export default function formatDate(date: string) {
    const formattedDate = new Date(date).toLocaleString(); // Ou um formato específico, como 'YYYY-MM-DD'
    return formattedDate;
}