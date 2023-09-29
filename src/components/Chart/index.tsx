import { ChartContainer } from "./styles";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Page A', uv: 0, pv: 2100, amt: 2400 },
    { name: 'Page B', uv: 200, pv: 1900, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 900, amt: 2400 },
    { name: 'Page D', uv: 150, pv: 2000, amt: 2400 },
    { name: 'Page E', uv: 200, pv: 1500, amt: 2400 }
];

export default function Chart() {
    return (
        <ChartContainer>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart data={data}>
                    <Line type="monotone" strokeWidth={2} dataKey="uv" stroke="#fcbf49" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}