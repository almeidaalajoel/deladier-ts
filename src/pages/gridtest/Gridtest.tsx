import React from "react";
import styles from "./Gridtest.module.css";

export default function Gridtest() {
  const gridItems = [];
  for (let i = 0; i < 2 * 2; i++)
    gridItems.push(<div className={styles.gridItem} />);
  return <div className={styles.gridContainer}>{gridItems}</div>;
}
