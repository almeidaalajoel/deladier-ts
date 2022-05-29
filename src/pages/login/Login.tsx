import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Login.module.css";
import { signIn, logOut } from "src/firebase/functions";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: { target: HTMLInputElement }) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: { target: HTMLInputElement }) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    signIn(email, password)
      .then((user) => {
        console.log(user);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSignout = (event: any) => {
    event.preventDefault();
    logOut();
  };

  return (
    <div
      className="centered-col"
      style={{ height: "60%", justifyContent: "center" }}
    >
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          className={styles.input}
          type="text"
          placeholder="password"
          value={password}
          onChange={handlePassChange}
        />
        <button onClick={handleLogin}>LOGIN</button>
        <br />
        <br />
        <button onClick={handleSignout}>SIGNOUT</button>
      </form>
    </div>
  );
}
