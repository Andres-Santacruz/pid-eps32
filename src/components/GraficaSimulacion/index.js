import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { ref, onValue } from "firebase/database";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import styles from "./styles.module.css";

/* const data = [
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
]; */

const GraficaSimulacion = () => {
  const [dataToGraphics, setDataToGraphics] = useState(null);
  const [dataPid, setDataPid] = useState(undefined);

  useEffect(() => {
    onValue(ref(db), (snapShot) => {
      const datos = snapShot.val();
      setDataPid(datos.test);
    });
  }, []);

  /*   useEffect(() => {
    getDataOnFirebase().then((data) => {
      setDataPid(data);
      console.log("data: ", data);
    });
  }, []); */

  useEffect(() => {
    console.log("redner data pido: ", dataPid);
    const arrayData = dataPid
      ? dataPid.data.length > 0
        ? dataPid.data.split("-")
        : null
      : null;
    const arrayDataPid = arrayData
      ? arrayData.map((item, i) => ({
          name: i,
          uv: parseFloat(item),
        }))
      : null;
    console.log("veamos esto : ", arrayData);
    setDataToGraphics(arrayDataPid);
  }, [dataPid]);

  if (!dataToGraphics) {
    return (
      <div className={styles.loading}>
        <h2>Cargando...</h2>
      </div>
    );
  }
  return (
    <div className={styles.content}>
      <LineChart width={600} height={300} data={dataToGraphics}>
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
