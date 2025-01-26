import React from "react";
import AdBar from "./AdBar";
import Navbar from "./Navbar";

export default function Heading() {
  return (
    <header className="border-b-slate-200 border-b-2 ">
      <AdBar />
      <Navbar />
    </header>
  );
}
