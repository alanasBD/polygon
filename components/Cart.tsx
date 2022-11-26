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

const Cart = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image="/animal.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={5}>
            <Item>  asdfsd</Item>
            </Grid>
          
     
            <Grid item xs={5}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;
