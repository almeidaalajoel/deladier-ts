import React, { useEffect, useState } from "react";
import styles from "./PaintingColumn.module.css";
import Image from "next/image";

interface Painting {
  position: number;
  title: string;
  url: string;
  height: number;
  width: number;
}

export default function PaintingColumn(props: any) {
  const [column1, setColumn1] = useState<any[]>([]);
  const [column2, setColumn2] = useState<any[]>([]);
  const [column3, setColumn3] = useState<any[]>([]);
  const paintingArray: Painting[] = props.paintingArray;

  useEffect(() => {
    /*create image from paintings then distribute images to each column by position: 
      0 1 2
      3 4 5
      6 7 8
      using modulo
    */

    //sort painting array by position
    paintingArray.sort((a, b) => (a.position < b.position ? -1 : 1));
    const tempcol1: any[] = [],
      tempcol2: any[] = [],
      tempcol3: any[] = [];
    paintingArray.forEach((painting, index) => {
      if (index % 3 === 0) tempcol1.push(makeImage(painting, index));
      if (index % 3 === 1) tempcol2.push(makeImage(painting, index));
      if (index % 3 === 2) tempcol3.push(makeImage(painting, index));
    });
    setColumn1(tempcol1);
    setColumn2(tempcol2);
    setColumn3(tempcol3);
  }, [paintingArray]);

  const makeImage = (painting: Painting, index: number) => {
    //return an image component from painting
    return (
      <Image
        src={painting.url}
        layout="responsive"
        height={painting.height}
        width={painting.width}
        key={index}
      />
    );
  };

  return (
    // <div className={styles.centered}>
    <div className="row">
      <div className="col-3" />
      <div className="col-6">{column1}</div>
      <div className="col-6">{column2}</div>
      <div className="col-6">{column3}</div>
    </div>
    // </div>
  );
}

export type { Painting };
