import React from "react";
import { Header } from "@/components/index";

type LayoutChildren = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
