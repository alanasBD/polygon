import Head from "next/head";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import User from "../components/User";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LocationCard from "../components/LocationCard";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const Chart = dynamic(import("../components/Chart"), { ssr: false });

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  const [btn, setBtn] = useState("");
  const [data,setData] = useState([]);
  

  const handleClick = (name: string) => {

    setBtn(name);
     fetch("data.json")
    .then(res => res.json())
    .then(info => setData(info))

  };


  console.log(data);
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Item>Dashboard</Item>
        </Grid>
        <Grid item md={9}>
          <Item>
            <div>
              <Box  style={{ width: "100%",boxShadow:"-8px 12px 18px 0 #dadee8",borderRadius:"7px" }}>
                <div style={{ margin: "10px 20px", padding: "20px 10px"}}>
                  <Button
                    style={{ margin: "10px 5px",fontFamily:"monospace",padding:"10px 20px"}}
                    onClick={() => handleClick("btn-1")}
                    color={`${btn === "btn-1" ? "success" : "primary"}`}
                    sx={{ mx: 1 }}
                    variant="contained"
                  >
                    Today
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    style={{ margin: "10px 5px",fontFamily:"monospace",padding:"10px 20px"}}
                    onClick={() => handleClick("btn-2")}
                    color={`${btn === "btn-2" ? "success" : "primary"}`}
                    variant="contained"
                  >
                    Last 7 days
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    style={{ margin: "10px 5px",fontFamily:"monospace",padding:"10px 20px" }}
                    onClick={() => handleClick("btn-3")}
                    color={`${btn === "btn-3" ? "success" : "primary"}`}
                    variant="contained"
                  >
                    Last 30 days
                  </Button>

                  {/* Date picker */}
                  <span 
                  onClick={() => handleClick("btn-4")}
                  color={`${btn === "btn-4" ? "success" : "primary"}`}
                  style={{marginLeft:"5px"}}>
              
                      <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
              
                  </span>
                </div>
              </Box>

              <User />
              <User />

              <Chart data={data} />
              <Chart data={data} />
              {/* {data.slice(0, 6).map((card, index) => (
                <LocationCard />
              ))} */}
              <Grid container spacing={2}>
                {data.slice(0, 6).map((card, index) => (
                  <Grid item md={4} sm={6} xs={12}>
                    <Item style={{ boxShadow: "none", padding: "0" }}>
                      <LocationCard />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
