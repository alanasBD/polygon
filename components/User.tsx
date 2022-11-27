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
  height: 210,
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
        <Grid item xs={4} sm={6} md={4}>
          <Item style={alignCenter} sx={{ boxShadow:1 }}>
            <h3>Total Footprint : 500</h3>
          </Item>
        </Grid>
        <Grid item xs={4}  sm={6} md={4}>
          <Item sx={{ boxShadow: 1 }} style={{display:"flex",alignItems:"center"}}>
            
                <div>
                  <h3 className="user-margin-h2">Male-Footprint : 200</h3>
                  <h3 className="user-margin-h2">Male-Earning : 500</h3>
                </div>
              
           
          </Item>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Item sx={{ boxShadow: 1 }}>
            <h3 className="user-margin-h2">Male:</h3>
            <h3 className="user-margin-h2">asgasg</h3>
            <h3 className="user-margin-h2">asgasg</h3>
            <h3 className="user-margin-h2">asgasg</h3>
            <h3 className="user-margin-h2">asgasg</h3>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default User;
