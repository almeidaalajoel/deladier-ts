import React from "react";
import styles from "./Galleries.module.css";

export default function Galleries() {
  return (
    <>
      <div className="col-4" />
      <div className="col-16">
        <h1 className={styles.header}>Gallery Affiliations</h1>
        <p>
          <a href="https://blueraingallery.com/">Blue Rain - Santa Fe NM</a>
        </p>
        <br />
        <p>
          <a href="https://www.caldwellsnyder.com/">
            Caldwell Snyder - San Francisco, St. Helena and Montecito CA
          </a>
        </p>
        <br />
        <p>
          <a href="https://efgallery.com/">Elliott Fouts - Sacramento CA</a>
        </p>
        <br />
        <p>
          <a href="https://www.medicinemangallery.com/">
            Medicine Man - Tucson AZ
          </a>
        </p>
        <br />
        <p>
          <a href="https://www.artobsession.nl/nl/home/">
            Obsession of Art - Bergen, Netherlands
          </a>
        </p>
        <br />
        <p>
          <a href="https://smithklein.com/">SmithKlein - Boulder CO</a>
        </p>
      </div>
    </>
  );
}
