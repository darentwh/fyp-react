import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
  
export default function Chart({value}) {
    var data = [
        {
          name: "Page A",
          uv: value**1,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: value**2,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: value**2.1,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: value**2.2,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: value**2.3,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: value**2.4,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: value**2.5,
          pv: 4300,
          amt: 2100
        }
      ];
    return (
        <ResponsiveContainer width="90%" height={500}>
            <LineChart
            data={data}
            margin={{
                top: 30,
                right: 30,
                left: 30,
                bottom: 30
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#3284d8" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}