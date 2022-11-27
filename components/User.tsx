import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  // color: theme.palette.text.secondary,
  height: 230,
}));
const alignCenter = {
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
};
const User = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item style={alignCenter} sx={{ boxShadow: 2 }}>
            <h2>Total Footprint : 500</h2>
          </Item>
        </Grid>
        <Grid item xs={4} >
          <Item sx={{ boxShadow: 1 }}>
            <div>
           
                <h2>Male-Footprint : 200</h2>
                <h2>Male-Earning : 500</h2>
              
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 1 }}>
            <h2>asgasg</h2>
            <h2>asgasg</h2>
            <h2>asgasg</h2>
            <h2>asgasg</h2>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default User;
