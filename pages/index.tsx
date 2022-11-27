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
import FormControl from "@mui/material/FormControl";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const Chart = dynamic(import("../components/Chart"), { ssr: false });

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  const [btn, setBtn] = useState("");
  const handleClick = (name: string) => {
    setBtn(name);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Item>Dashboard</Item>
        </Grid>
        <Grid item md={9}>
          <Item>
            <div>
              <Box sx={{ boxShadow: 1 }} style={{ width: "100%" }}>
                <div style={{ margin: "10px 20px", padding: "20px 10px" }}>
                  <Button
                    style={{ margin: "10px 5px" }}
                    onClick={() => handleClick("btn-1")}
                    color={`${btn === "btn-1" ? "success" : "primary"}`}
                    sx={{ mx: 1 }}
                    variant="contained"
                  >
                    Today
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    style={{ margin: "10px 5px" }}
                    onClick={() => handleClick("btn-2")}
                    color={`${btn === "btn-2" ? "success" : "primary"}`}
                    variant="contained"
                  >
                    Last 7 days
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    style={{ margin: "10px 5px" }}
                    onClick={() => handleClick("btn-3")}
                    color={`${btn === "btn-3" ? "success" : "primary"}`}
                    variant="contained"
                  >
                    Last 30 days
                  </Button>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Day</InputLabel>
                    <Select
                      onClick={() => handleClick("btn-4")}
                      color={`${btn === "btn-4" ? "success" : "primary"}`}
                      labelId="demo-select-small"
                      id="demo-select-small"
                      // value={age}
                      label="Age"
                      //onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Today</MenuItem>
                      <MenuItem value={20}>Last 7 Days</MenuItem>
                      <MenuItem value={30}>Last 30 Days</MenuItem>
                    </Select>
                  </FormControl>
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
                    <Item style={{ boxShadow: "none", padding: "0" }} className="card-responsive">
             
                        <LocationCard  />
                     
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
