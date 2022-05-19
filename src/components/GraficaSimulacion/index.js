import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import { getDataOnFirebase } from "../../services/readData-firebase";
import styles from "./styles.module.css";

const data = [
  {
    name: 1,
    uv: 0,
    li: 2500,
  },
  {
    name: 2,
    uv: 3000,
    li: 2500,
  },
  {
    name: 3,
    uv: 2000,
    li: 2500,
  },
  {
    name: 4,
    uv: 2780,
    li: 2500,
  },
  {
    name: 5,
    uv: 1890,
    li: 2500,
  },
  {
    name: 6,
    uv: 2390,
    li: 2500,
  },
  {
    name: 7,
    uv: 3490,
    li: 2500,
  },
  {
    name: 8,
    uv: 2890,
    li: 2500,
  },
  {
    name: 9,
    uv: 2490,
    li: 2500,
  },
  {
    name: 10,
    uv: 2500,
    li: 2500,
  },
];

const GraficaSimulacion = () => {
  const [dataPid, setDataPid] = useState([]);
  useEffect(() => {
    const dataF = getDataOnFirebase();
    if (dataF[0] !== undefined) {
      const json = dataF[0].map((el, i) => {
        return { [i]: el };
      });
      setDataPid(json);
    }
  }, []);
  console.log(dataPid);
  return (
    <div className={styles.content}>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <ReferenceLine y={2700} stroke="red" label="Set Point" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default GraficaSimulacion;
