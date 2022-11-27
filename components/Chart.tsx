import React from "react";
import { BarChart, Bar,XAxis, Tooltip  } from "recharts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Toolbar } from "@mui/material";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};
const Chart = (props: any) => {
  return (
    <div>
      <h2>Footprint</h2>
        <Divider />
        <BarChart width={1000} height={500} data={props.data}>
          <Bar dataKey="uv" fill="#8884d8" />
          <XAxis dataKey="name"   />
          <Tooltip/>
        </BarChart>
   
    </div>
  );
};

export default Chart;
