import Image from "next/image";
import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <h2 className={styles.del}>Deladier Almeida</h2>

      <div className="row">
        <div className="col-4" />
        <div className="col-16">
          <div className={`${styles.row} row`}>
            <div className="col-6">
              <Image
                draggable={false}
                src={require("@/assets/images/chewy.jpg")}
                className="image"
                width={300}
                height={400}
              />
            </div>

            <div className={`${styles.column} col-18`}>
              <p>
                Deladier Almeida is an artist, bla bla bla bla bla bla wef.
                aowijef jiwefoij o jefijojwe foij oiwefjoi. oiwjo jfoi weifj oij
                wejfoijiowjef ijwoejf oiawef oijefoij woiefijo qpojwoejfpojp
                wefjpjwefpja pwefojwe.
              </p>

              <p>
                Del is especially interested in the subtleties of bla bla bla
                bla bla. Bla loaij oweofijaw feoijwaoei fjoajweofi aowjefiawejfo
                oijowef.
              </p>
              <p>Call: (530)400-4018</p>
              <p>Email: del@omsoft.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
