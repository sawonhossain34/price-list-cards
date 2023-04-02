import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray =[
        { id: 1, name: "Alice", math: 85, physics: 76, chemistry: 92 },
        { id: 2, name: "Bob", math: 72, physics: 81, chemistry: 69 },
        { id: 3, name: "Charlie", math: 94, physics: 89, chemistry: 91 },
        { id: 4, name: "David", math: 63, physics: 78, chemistry: 82 },
        { id: 5, name: "Emily", math: 87, physics: 92, chemistry: 88 },
        { id: 6, name: "Frank", math: 77, physics: 64, chemistry: 75 },
        { id: 7, name: "Grace", math: 90, physics: 85, chemistry: 94 },
        { id: 8, name: "Henry", math: 81, physics: 79, chemistry: 83 },
        { id: 9, name: "Isabelle", math: 88, physics: 76, chemistry: 79 },
        { id: 10, name: "Jack", math: 73, physics: 85, chemistry: 90 },
        { id: 11, name: "Kate", math: 92, physics: 93, chemistry: 87 },
        { id: 12, name: "Leo", math: 85, physics: 79, chemistry: 91 }
      ]
      


    return (
        <div>
           <LineChart
           width={500}
           height={300}
           data={marksArray}
           >
           <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
           <Line type="monotone" dataKey="math" stroke="#82ca9d" />

           
           </LineChart>
        </div>
    );
};

export default Dashboard;