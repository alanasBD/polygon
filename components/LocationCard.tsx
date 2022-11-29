import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { BsFillCircleFill } from "react-icons/bs";



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
      <Card sx={{ maxWidth: 500 }} className="card-responsive"  style={{boxShadow:"-8px 12px 18px 0 #dadee8",borderRadius:"7px"}}>
        <h4 style={{padding:"0 15px",fontSize:"15px"}}>Mirpur</h4>
        <CardMedia
          component="img"
          height="140"
          image="/animal.jpg"
          alt="green iguana"
        />
        <CardContent>
          {/* Location-card left */}
          <div style={{ display: "flex" }}>
            <div style={{ borderRight: "1px #CCCCCC  solid", width: "50%",fontFamily:"monospace",fontSize:"15px"}}>
              <div  style={{ display: "flex", alignItems: "center"}}>
                <h4 className="margin-h2">Order : </h4>
                <BsFillCircleFill style={{ marginLeft: "5px", color: "red" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 className="margin-h2">Order : </h4>
                <BsFillCircleFill
                  style={{ marginLeft: "5px", color: "blue" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 className="margin-h2">Order : </h4>
                <BsFillCircleFill
                  style={{ marginLeft: "5px", color: "green" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 className="margin-h2">Order : </h4>
                <BsFillCircleFill style={{ marginLeft: "5px", color: "red" }} />
              </div>
            </div>


            {/* Location-card right */}
            <div style={{ width: "50%", paddingLeft: "30px",fontSize:"15px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 className="margin-h2">Order : </h4>
                <BsFillCircleFill style={{ marginLeft: "5px", color: "red" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4  className="margin-h2">Order : </h4>
                <BsFillCircleFill
                  style={{ marginLeft: "5px", color: "blue" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4  className="margin-h2">Order : </h4>
                <BsFillCircleFill
                  style={{ marginLeft: "5px", color: "green" }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationCard;
