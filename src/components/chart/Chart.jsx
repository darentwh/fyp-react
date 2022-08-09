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
          name: "1",
          dynamic: value[0],
          static: 2400,
          amt: 2400
        },
        {
          name: "2",
          dynamic: value[1],
          static: 1398,
          amt: 2210
        },
        {
          name: "3",
          dynamic: value[2],
          static: 9800,
          amt: 2290
        },
        {
          name: "4",
          dynamic: value[3],
          static: 3908,
          amt: 2000
        },
        {
          name: "5",
          dynamic: value[4],
          static: 4800,
          amt: 2181
        },
        {
          name: "6",
          dynamic: value[5],
          static: 3800,
          amt: 2500
        },
        {
          name: "7",
          dynamic: value[6],
          static: 4300,
          amt: 2100
        }
      ];
    return (
        <ResponsiveContainer width="97%" height={500} position="absolute">
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
            <Line type="monotone" dataKey="static" stroke="#3284d8" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="dynamic" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}