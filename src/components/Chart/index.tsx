import { ChartContainer } from "./styles";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import useUsersData from '../../hooks/useUsersData';
import Loading from "../Loading";
import { useState, useEffect } from "react";
import { User } from "../../contexts/UsersContext";

export default function Chart() {
    const { usersData, dataLoading } = useUsersData();

    const [lastDay, setLastDay] = useState<User[]>([]);
    const [lastWeek, setLastWeek] = useState<User[]>([]);
    const [lastMonth, setLastMonth] = useState<User[]>([]);
    const [lastThreeMonths, setLastThreeMonths] = useState<User[]>([]);
    const [lastYear, setLastYear] = useState<User[]>([]);

    const userFilteredByDate = [
        { date: 'Último ano', quantity: lastYear.length },
        { date: 'Últimos três meses', quantity: lastThreeMonths.length },
        { date: 'Último mês', quantity: lastMonth.length },
        { date: 'Últimos 7 dias', quantity: lastWeek.length },
        { date: 'No último dia', quantity: lastDay.length },
    ];

    useEffect(() => {
        if (dataLoading === false) {
            const currentDate = new Date();

            const lastDayUsers = usersData.filter((user) => {
                const createdAt = new Date(user.data.createdAt);
                return (
                    createdAt >= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1) &&
                    createdAt <= currentDate
                );
            });

            const lastWeekUsers = usersData.filter((user) => {
                const createdAt = new Date(user.data.createdAt);
                return (
                    createdAt >= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7) &&
                    createdAt <= currentDate
                );
            });

            const lastMonthUsers = usersData.filter((user) => {
                const createdAt = new Date(user.data.createdAt);
                return (
                    createdAt >= new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()) &&
                    createdAt <= currentDate
                );
            });

            const lastThreeMonthsUsers = usersData.filter((user) => {
                const createdAt = new Date(user.data.createdAt);
                return (
                    createdAt >= new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate()) &&
                    createdAt <= currentDate
                );
            });

            const lastYearUsers = usersData.filter((user) => {
                const createdAt = new Date(user.data.createdAt);
                return (
                    createdAt >= new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate()) &&
                    createdAt <= currentDate
                );
            });

            setLastDay(lastDayUsers);
            setLastWeek(lastWeekUsers);
            setLastMonth(lastMonthUsers);
            setLastThreeMonths(lastThreeMonthsUsers);
            setLastThreeMonths(lastThreeMonthsUsers);
            setLastYear(lastYearUsers);
        }
    }, [dataLoading, usersData]);

    return (
        <ChartContainer>
            {dataLoading ? (
                <div className="loading">
                    <Loading />
                </div>
            ) : (
                <ResponsiveContainer className="chart" width="95%">
                    <LineChart accessibilityLayer={true} data={userFilteredByDate} margin={{ top: 30, right: 40, left: 0, bottom: 30 }}>

                        <Line type="monotone" strokeWidth={2} dataKey="quantity" stroke="#fcbf49" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date">
                            <Label
                                value={"Dias"}
                                position="insideBottomRight"
                                dx={0}
                                dy={30}
                            />
                        </XAxis>
                        <YAxis>
                            <Label
                                value={"Quantidade de usuários"} position="center"
                                angle={-90}
                                dx={-20}
                            />
                        </YAxis>
                        <Tooltip wrapperClassName="tooltip" />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </ChartContainer>
    )
}