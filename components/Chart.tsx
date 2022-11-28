import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const Chart = (props: any) => {
 const {data} = props;

  return (
    <div
      style={{
        margin: "30px 0",
        boxShadow: "-8px 12px 18px 0 #dadee8",
        borderRadius: "7px",
        padding: "20px",
        
      }}
    >
      <h2 style={{ color: "#000",fontFamily:"monospace"}}>Footprint</h2>
      <Divider />
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <Bar dataKey="uv" fill="#8884d8"/>
          <XAxis dataKey={props.length} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
