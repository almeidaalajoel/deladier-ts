import React from "react";
import { useDropzone } from "react-dropzone";
import styles from "./InputZone.module.css";

function Dropzone({
  onDrop,
  accept,
  open,
}: {
  onDrop: any;
  accept: any;
  open?: any;
}) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
  return (
    <div>
      <div {...getRootProps({ className: styles.container })}>
        <input className={styles.inputZone} {...getInputProps()} />
        <div className={styles.textCenter}>
          {isDragActive ? (
            <p className={styles.dropzoneContent}>
              Release to drop the files here
            </p>
          ) : (
            <p className={styles.dropzoneContent}>
              Drag files here, or click to select files
            </p>
          )}
          <button type="button" onClick={open} className={styles.btn}>
            Click to select files
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dropzone;
