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
      <List sx={style} style={{margin:"20px 0"}} component="nav" aria-label="mailbox folders">
        <ListItem>
          <Typography variant="h5" gutterBottom>
            Total Foot print
          </Typography>
        </ListItem>
        <Divider />
        <BarChart width={1000} height={400} data={props.data}>
          <Bar dataKey="uv" fill="#8884d8" />
          <XAxis dataKey="name"   />
          <Tooltip/>
        </BarChart>
      </List>
    </div>
  );
};

export default Chart;
