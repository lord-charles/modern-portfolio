import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../../utils/data";
import { Fade } from "react-awesome-reveal";
import HeroBgAnimation from "../HeroBgAnimation/index";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Fade
      direction={"up"}
      delay={400}
      cascade
      damping={1e-1}
      triggerOnce={true}
    >
      <Container id="projects" className="overflow-x-hidden">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="absolute top-[-100px]">
          <HeroBgAnimation />
        </div>
        <div className="absolute">
          <HeroBgAnimation />
        </div>
        <Wrapper>
          <Title className=" text-bluish">Portfolio Highlights</Title>
          <Desc className=" text-bluish lg:block md:block xxxs:hidden">
            Explore a selection of my diverse web and mobile app projects.
            Witness my commitment to excellence and innovation in every
            endeavor.
          </Desc>
          <Desc className=" text-bluish lg:hidden md:hidden xxxs:block">
            Diverse projects showcasing excellence and innovation awaits.
          </Desc>
          <ToggleButtonGroup className=" text-green">
            {toggle === "all" ? (
              <ToggleButton active value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            ) : (
              <ToggleButton value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            )}
            <Divider className="bg-green" />
            {toggle === "web app" ? (
              <ToggleButton
                active
                value="web app"
                onClick={() => setToggle("web app")}
              >
                WEB APP'S
              </ToggleButton>
            ) : (
              <ToggleButton
                value="web app"
                onClick={() => setToggle("web app")}
              >
                WEB APP&apos;S
              </ToggleButton>
            )}
            <Divider className="bg-green" />
            {toggle === "android app" ? (
              <ToggleButton
                active
                value="android app"
                onClick={() => setToggle("android app")}
              >
                ANDROID APP&apos;S
              </ToggleButton>
            ) : (
              <ToggleButton
                value="android app"
                onClick={() => setToggle("android app")}
              >
                ANDROID APP&apos;S
              </ToggleButton>
            )}
            <Divider className="bg-green" />
            {toggle === "machine learning" ? (
              <ToggleButton
                active
                value="machine learning"
                onClick={() => setToggle("machine learning")}
              >
                MACHINE LEARNING
              </ToggleButton>
            ) : (
              <ToggleButton
                value="machine learning"
                onClick={() => setToggle("machine learning")}
              >
                MACHINE LEARNING
              </ToggleButton>
            )}
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === "all" &&
              projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </Fade>
  );
};

export default Projects;
