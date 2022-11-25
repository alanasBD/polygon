import React from 'react';
import { BarChart,Bar } from 'recharts';

  
const Chart = (props:any) => {
    console.log(props);
    
    return (
        <div>
           <BarChart width={500} height={500} data={props.data}>
             <Bar dataKey="uv" fill="#8884d8" />
           </BarChart> 
        </div>
    );
};

export default Chart;