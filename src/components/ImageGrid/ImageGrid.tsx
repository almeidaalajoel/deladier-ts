import React from "react";
import styles from "./ImageGrid.module.css";
// Rendering individual images
const Image = ({ image }: { image: any }) => {
  return (
    <div className={styles.fileItem}>
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};
// ImageList Component//
const ImageGrid = ({ images }: { images: any }) => {
  // render each image by calling Image component
  const renderImage = (image: any, index: number) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  // Return the list of files//
  return (
    <section className={styles.fileList}>{images.map(renderImage)}</section>
  );
};
export default ImageGrid;
