import Head from "next/head";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import User from "../components/User";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LocationCard from "../components/LocationCard";

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
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <div>
              <Box sx={{ boxShadow: 2 }} style={{ width: "100%" }}>
                <div style={{ margin: "10px 20px", padding: "20px 10px" }}>
                  <Button
                    onClick={handleClick}
                    sx={{ mx: 1 }}
                    variant="contained"
                  >
                    Today
                  </Button>
                  <Button sx={{ mx: 1 }} variant="contained">
                    Last 7 days
                  </Button>
                  <Button sx={{ mx: 1 }} variant="contained">
                    Last 30 days
                  </Button>
                  <Button sx={{ mx: 1 }} variant="contained">
                    Custom
                  </Button>
                </div>
              </Box>
              <User />
              <User />

              <Chart data={data} />
              <Chart data={data} />
              {/* {data.slice(0, 6).map((card, index) => (
                <LocationCard />
              ))} */}
              <Grid container  spacing={2}>
                
               
                {data.slice(0, 6).map((card, index) => (
                   <Grid item  xs={4}>
                     <Item style={{boxShadow:"none"}}>
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
