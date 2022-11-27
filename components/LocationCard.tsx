import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LocationCard = () => {
  return (
    <div>
      <Card  sx={{ maxWidth: 500 }}>
        <Typography style={{padding:"5px 10px"}} gutterBottom variant="h5" component="div">
          Mirpur
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image="/animal.jpg"
          alt="green iguana"
        />
        <CardContent>
          <div style={{ display: "flex" }}>
            <div style={{ borderRight: "1px  solid", width: "50%" }}>
              <h4>Order :</h4>
              <h4>Power : </h4>
              <h4>Water :</h4>
              <h4>Supply :</h4>
            </div>
            <div style={{ width: "50%", paddingLeft: "30px" }}>
              <h4>Order :</h4>
              <h4>Power : </h4>
              <h4>Water :</h4>
              <h4>Supply :</h4>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationCard;
