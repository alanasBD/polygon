import Head from 'next/head'
import Image from 'next/image'
import Chart from '../components/Chart'

import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import Cart from '../components/Cart';

const SimpleBarChartWithoutSSR = dynamic(
  import("../components/Chart"),
  { ssr: false }
);


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
  return (

    <div> 
     <SimpleBarChartWithoutSSR data={data}/>
    
     {
      data.map((user,index) =>  <Cart key={index}></Cart>)
     }
      <h2>Hello</h2>
  </div>
      
    
  )
}
