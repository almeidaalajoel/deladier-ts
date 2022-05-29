import React, { useEffect, useState, createContext } from "react";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/index";
import "src/firebase/intitialize";
import { logAuth, authStateChanged } from "src/firebase/functions";
import { UserContext } from "src/Contexts";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //updates user whenver auth state changes
    const unsubscribe = authStateChanged(setUser);
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Layout>
        <Component {...pageProps} user={user} />
      </Layout>
    </UserContext.Provider>
  );
}
