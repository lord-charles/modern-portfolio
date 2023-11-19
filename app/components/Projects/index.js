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
import { projects, projects2 } from "../../../utils/data";
import { Fade } from "react-awesome-reveal";
import HeroBgAnimation from "../HeroBgAnimation/index";
import { Pagination, Stack } from "@mui/material";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const filteredProjects =
    toggle === "all"
      ? projects2
      : projects.filter((item) => item.category === toggle);

  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const projectsToDisplay = filteredProjects.slice(startIndex, endIndex);

const handlePageChange = (event, newPage) => {
  setCurrentPage(newPage);

  if (window.innerWidth < 600) {
    window.scrollTo(7725, 7725);
  }
};



  return (
    <div id="projects">
      <Fade
        direction={"up"}
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <Container className="overflow-hidden">
          <div className="radial-bgone hidden lg:block"></div>
          <div className="absolute top-[-100px]">
            <HeroBgAnimation />
          </div>
          <div className="absolute">
            <HeroBgAnimation />
          </div>
          <Wrapper>
            <Title className=" text-bluish">Portfolio Highlights</Title>

            <Desc className=" text-bluish">
              Excellence and innovation awaits.
            </Desc>
            <ToggleButtonGroup className=" text-green">
              {toggle === "all" ? (
                <ToggleButton
                  active
                  value="all"
                  onClick={() => setToggle("all")}
                  className={`${toggle === "all" ? "text-purple-500" : null}`}
                >
                  All
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="all"
                  onClick={() => setToggle("all")}
                  className={`${toggle === "all" ? "text-purple-500" : null}`}
                >
                  All
                </ToggleButton>
              )}
              <Divider className="bg-green" />
              {toggle === "web app" ? (
                <ToggleButton
                  active
                  value="web app"
                  onClick={() => {
                    setCurrentPage(1), setToggle("web app");
                  }}
                  className={`${
                    toggle === "web app" ? "text-purple-500" : null
                  }`}
                >
                  WEB APP&apos;S
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="web app"
                  onClick={() => {
                    setCurrentPage(1), setToggle("web app");
                  }}
                  className={`${
                    toggle === "web app" ? "text-purple-500" : null
                  }`}
                >
                  WEB APP&apos;S
                </ToggleButton>
              )}
              <Divider className="bg-green" />
              {toggle === "android app" ? (
                <ToggleButton
                  active
                  value="android app"
                  onClick={() => {
                    setCurrentPage(1), setToggle("android app");
                  }}
                  className={`${
                    toggle === "android app" ? "text-purple-500" : null
                  }`}
                >
                  ANDROID/ISO APP&apos;S
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="android app"
                  onClick={() => {
                    setCurrentPage(1), setToggle("android app");
                  }}
                  className={`${
                    toggle === "android app" ? "text-purple-500" : null
                  }`}
                >
                  ANDROID/ISO APP&apos;S
                </ToggleButton>
              )}
              <Divider className="bg-green" />
              {toggle === "machine learning" ? (
                <ToggleButton
                  active
                  value="machine learning"
                  onClick={() => {
                    setCurrentPage(1), setToggle("machine learning");
                  }}
                  className={`${
                    toggle === "machine learning" ? "text-purple-500" : null
                  }`}
                >
                  MACHINE LEARNING
                </ToggleButton>
              ) : (
                <ToggleButton
                  value="machine learning"
                  onClick={() => {
                    setCurrentPage(1), setToggle("machine learning");
                  }}
                  className={`${
                    toggle === "machine learning" ? "text-purple-500" : null
                  }`}
                >
                  MACHINE LEARNING
                </ToggleButton>
              )}
            </ToggleButtonGroup>
            <CardContainer>
              {projectsToDisplay.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </CardContainer>
            <div className="pt-8 flex justify-center">
              <Stack
                spacing={2}
                justifyContent="center"
                mt={2}
                className="text-bluish bg-bluish px-2 py-0.5 rounded-md"
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  variant="outlined"
                  color="secondary"
                />
              </Stack>
            </div>
          </Wrapper>
        </Container>
      </Fade>
    </div>
  );
};

export default Projects;

// import React from "react";
// import { useState } from "react";
// import {
//   Container,
//   Wrapper,
//   Title,
//   Desc,
//   CardContainer,
//   ToggleButtonGroup,
//   ToggleButton,
//   Divider,
// } from "./ProjectsStyle";
// import ProjectCard from "../Cards/ProjectCards";
// import { projects } from "../../../utils/data";
// import { Fade } from "react-awesome-reveal";
// import HeroBgAnimation from "../HeroBgAnimation/index";
// import { Pagination, Stack } from "@mui/material";

// const Projects = ({ openModal, setOpenModal }) => {
//   const [toggle, setToggle] = useState("web app");
//   return (
//     <div id="projects">
//       <Fade
//         direction={"up"}
//         delay={400}
//         cascade
//         damping={1e-1}
//         triggerOnce={true}
//       >
//         <Container className="overflow-x-hidden">
//           <div className="radial-bgone hidden lg:block"></div>
//           <div className="absolute top-[-100px]">
//             <HeroBgAnimation />
//           </div>
//           <div className="absolute">
//             <HeroBgAnimation />
//           </div>
//           <Wrapper>
//             <Title className=" text-bluish">Portfolio Highlights</Title>
//             {/* <Desc className=" text-bluish lg:block md:block xxxs:hidden">
//             Explore a selection of my diverse web and mobile app projects.
//             Witness my commitment to excellence and innovation in every
//             endeavor.
//           </Desc> */}
//             <Desc className=" text-bluish">
//               Excellence and innovation awaits.
//             </Desc>
//             <ToggleButtonGroup className=" text-green">
//               {toggle === "all" ? (
//                 <ToggleButton
//                   active
//                   value="all"
//                   onClick={() => setToggle("all")}
//                   className={`${toggle === "all" ? "text-purple-500" : null}`}
//                 >
//                   All
//                 </ToggleButton>
//               ) : (
//                 <ToggleButton
//                   value="all"
//                   onClick={() => setToggle("all")}
//                   className={`${toggle === "all" ? "text-purple-500" : null}`}
//                 >
//                   All
//                 </ToggleButton>
//               )}
//               <Divider className="bg-green" />
//               {toggle === "web app" ? (
//                 <ToggleButton
//                   active
//                   value="web app"
//                   onClick={() => setToggle("web app")}
//                   className={`${
//                     toggle === "web app" ? "text-purple-500" : null
//                   }`}
//                 >
//                   WEB APP&apos;S
//                 </ToggleButton>
//               ) : (
//                 <ToggleButton
//                   value="web app"
//                   onClick={() => setToggle("web app")}
//                   className={`${
//                     toggle === "web app" ? "text-purple-500" : null
//                   }`}
//                 >
//                   WEB APP&apos;S
//                 </ToggleButton>
//               )}
//               <Divider className="bg-green" />
//               {toggle === "android app" ? (
//                 <ToggleButton
//                   active
//                   value="android app"
//                   onClick={() => setToggle("android app")}
//                   className={`${
//                     toggle === "android app" ? "text-purple-500" : null
//                   }`}
//                 >
//                   ANDROID/ISO APP&apos;S
//                 </ToggleButton>
//               ) : (
//                 <ToggleButton
//                   value="android app"
//                   onClick={() => setToggle("android app")}
//                   className={`${
//                     toggle === "android app" ? "text-purple-500" : null
//                   }`}
//                 >
//                   ANDROID/ISO APP&apos;S
//                 </ToggleButton>
//               )}
//               <Divider className="bg-green" />
//               {toggle === "machine learning" ? (
//                 <ToggleButton
//                   active
//                   value="machine learning"
//                   onClick={() => setToggle("machine learning")}
//                   className={`${
//                     toggle === "machine learning" ? "text-purple-500" : null
//                   }`}
//                 >
//                   MACHINE LEARNING
//                 </ToggleButton>
//               ) : (
//                 <ToggleButton
//                   value="machine learning"
//                   onClick={() => setToggle("machine learning")}
//                   className={`${
//                     toggle === "machine learning" ? "text-purple-500" : null
//                   }`}
//                 >
//                   MACHINE LEARNING
//                 </ToggleButton>
//               )}
//             </ToggleButtonGroup>
//             <CardContainer>
//               {toggle === "all" &&
//                 projects.map((project, index) => (
//                   <ProjectCard
//                     key={index}
//                     project={project}
//                     openModal={openModal}
//                     setOpenModal={setOpenModal}
//                   />
//                 ))}
//               {projects
//                 .filter((item) => item.category == toggle)
//                 .map((project, index) => (
//                   <ProjectCard
//                     key={index}
//                     project={project}
//                     openModal={openModal}
//                     setOpenModal={setOpenModal}
//                   />
//                 ))}
//             </CardContainer>
//           </Wrapper>
//         </Container>
//       </Fade>
//     </div>
//   );
// };

// export default Projects;
