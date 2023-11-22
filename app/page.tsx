"use client";
import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Work from "./components/Work/index";
import Table from "./components/Table/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import Trade from "./components/Trade/index";
import RealTimeApps from "./components/RealTimeApps/index";
import Faq from "./components/Faq/index";
import Zigzag from "./components/zigzag";
import Projects from "./components/Projects/index";
import ProjectDetails from "./components/ProjectDetails/index";
import Testimonials from "./components/Testimonials/index";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useState } from "react";
import Newsletter from "./components/newsletter/newsletter";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <main>
      <Toaster />
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Zigzag />
      <Skills />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <Experience />
      <Trade />
      <RealTimeApps />
      <Simple />
      <Faq />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
