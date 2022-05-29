import Head from "next/head";
import Image from "next/image";
import { Header, PaintingColumn } from "@/components/index";
import { getCollection } from "src/firebase/functions";
import styles from "@/pages/index.module.css";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="row">
      <div className="col-4" />
      <div className="col-8 centered-col" style={{ alignItems: "flex-end" }}>
        <a href="/california" className={`${styles.painting}`}>
          <Image
            className="image"
            src={require("../assets/images/california.jpg")}
          />
        </a>
        <a href="/tuscany" className={`${styles.painting}`}>
          <Image
            className="image"
            src={require("../assets/images/tuscany.jpg")}
          />
        </a>
      </div>
      <div className="col-8 centered-col" style={{ alignItems: "flex-start" }}>
        <a href="/southwest" className={`${styles.painting}`}>
          <Image
            className="image"
            src={require("../assets/images/southwest.jpg")}
          />
        </a>
        <a href="/tour" className={`${styles.painting}`}>
          <Image className="image" src={require("../assets/images/tour.jpg")} />
        </a>
      </div>
    </div>
  );
}
