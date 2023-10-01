import { ChartContainer } from "./styles";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

const userData = [
    { date: '2023-01-01', quantity: 5 },
    { date: '2023-01-02', quantity: 10 },
    { date: '2023-01-03', quantity: 8 },
    { date: '2023-01-04', quantity: 15 },
    { date: '2023-01-05', quantity: 12 },
];

export default function Chart() {
    return (
        <ChartContainer>
            <ResponsiveContainer className="chart" width="95%">
                <LineChart accessibilityLayer={true} data={userData} margin={{ top: 30, right: 40, left: 0, bottom: 30 }}>

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
        </ChartContainer>
    )
}