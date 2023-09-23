"use client";
import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Work from "./components/Work/index";
import Table from "./components/Table/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import Trade from "./components/Trade/index";
import Faq from "./components/Faq/index";
import Zigzag from "./components/zigzag";
import Projects from "./components/Projects/index";
import ProjectDetails from "./components/ProjectDetails/index";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Zigzag />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <Trade />
      <Simple />

      <Faq />
    </main>
  );
}
