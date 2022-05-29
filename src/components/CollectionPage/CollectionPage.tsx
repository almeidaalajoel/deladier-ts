import React, { useEffect, useState, useCallback } from "react";
import { PaintingColumn } from "..";
import { getCollection, uploadPainting } from "../../firebase/functions";
import InputZone from "../InputZone";
import ImageGrid from "../ImageGrid";
import cuid from "cuid";
import { logAuth } from "../../firebase/functions";
import styles from "./CollectionPage.module.css";
import { Painting } from "../PaintingColumn";

export default function CollectionPage({
  collection,
  user,
}: {
  collection: string;
  user: any;
}) {
  const [paintingArray, setPaintingArray] = useState<any[]>([]);
  const [images, setImages] = useState<any>([]);
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        console.log("file: ", file);
        setImages((prevState: any) => [
          ...prevState,
          { id: cuid(), title: file.name, src: e.target?.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  useEffect(() => {
    //get painting URLs, use object.values to put paintings into an array
    getCollection(collection).then((paintingsObject: any) => {
      console.log(paintingsObject, "test");
      setPaintingArray([...Object.values(paintingsObject)]);
    });
  }, []);

  const uploadPaintings = async () => {
    if (images.length > 0) {
      await Promise.all(
        images.map(async (image: any) => {
          const painting: Painting = {
            height: 0,
            width: 0,
            position: 0,
            url: image.src,
            title: image.title.split(".")[0],
          };
          await uploadPainting(painting, collection);
        })
      );
      location.reload();
      console.log("test");
    }
  };

  //return painting column of paintings array
  return (
    <div>
      <PaintingColumn paintingArray={paintingArray} />
      {user ? (
        <>
          <InputZone
            onDrop={onDrop}
            accept={{ "image/jpeg": [], "image/png": [] }}
          />
          <div className={styles.center}>
            <ImageGrid images={images} />
          </div>
          <div className={styles.center}>
            <button className={styles.button} onClick={uploadPaintings}>
              UPLOAD
            </button>
          </div>
          <br />
          <br />
          <br />
        </>
      ) : null}
    </div>
  );
}
