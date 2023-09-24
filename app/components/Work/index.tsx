"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
  delay: number;
}

const workdata: workdata[] = [
  {
    imgSrc: "/icons/requirements.png",
    heading: "Requirements-Centric Development",
    subheading:
      "We start by understanding your unique project requirements, laying the foundation for a tailored solution that exceeds expectations.",
    hiddenpara:
      "Throughout development, we continuously refine the software to adapt to your evolving needs, ensuring precision and quality.",
    delay: 400,
  },
  {
    imgSrc: "/icons/collaboration.png",
    heading: "Agile Collaboration",
    subheading:
      "Our Agile methodology fosters dynamic engagement, breaking projects into iterations for regular feedback and adjustments.",
    hiddenpara:
      "We remain adaptable to evolving requirements, delivering a high-quality solution aligned with your vision.",
    delay: 600,
  },
  {
    imgSrc: "/icons/continuous.png",
    heading: "Continuous Quality Assurance",
    subheading:
      "Quality is paramount. We rigorously test, review code, and optimize performance for bug-free, scalable, secure, efficient software.",
    hiddenpara:
      "Committed to industry standards and tech trends, we craft innovative, reliable software solutions tailored to you.",
    delay: 800,
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            My Approach
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Discover my unique approach to creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32 transform-all-ease">
          {workdata.map((items, i) => (
            <Fade
              direction={"up"}
              delay={items.delay}
              cascade
              damping={1e-1}
              triggerOnce={true}
              className="card-b p-8 transform-all-ease custom-border2"
              key={i}
            >
              <>
                <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    className="object-contain w-[40px]"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    src={"/images/Work/bg-arrow.svg"}
                    alt="arrow-bg"
                    width={85}
                    height={35}
                  />
                </div>
                <h3 className="text-2xl text-offwhite font-semibold text-center mt-5">
                  {items.heading}
                </h3>
                <p className="text-base font-normal text-bluish text-center mt-2">
                  {items.subheading}
                </p>
                <span className="text-base font-normal m-0 text-bluish text-center hides">
                  {items.hiddenpara}
                </span>
              </>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
