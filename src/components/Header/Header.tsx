import React, { useContext } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { UserContext } from "../../Contexts";

function Header() {
  const user = useContext(UserContext);
  console.log("broooo", user);
  return (
    <div>
      <section className={styles.header}>
        <h1 className={styles.hiddenText}>Header</h1>

        <span className={styles.logo}>
          <Link href="/">
            <a className={styles.linkText}>Deladier</a>
          </Link>
        </span>

        <span className={styles.navItem}>
          <Link href="/events">
            <a className={styles.linkText} data-testid="events">
              events
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.linkText} data-testid="contact">
              contact
            </a>
          </Link>
          <Link href="/galleries">
            <a className={styles.linkText} data-testid="galleries">
              galleries
            </a>
          </Link>
        </span>
        <span className={styles.spacer} />
        {user ? (
          <span className={styles.right}>
            <p>Logged in</p>
          </span>
        ) : null}
      </section>
      <div className={styles.separator} />
    </div>
  );
}

export default Header;
