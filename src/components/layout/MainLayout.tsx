"use client";

import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
