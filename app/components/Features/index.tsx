"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: "/images/Features/feature-01.webp",
    heading: "Secure storage",
    subheading: "We lake data security and privacy very seriously",
  },
  {
    imgSrc: "/images/Features/feature-02.webp",
    heading: "Free to use",
    subheading: "Top notch crypto portfolio traking at no cost",
  },
  {
    imgSrc: "/images/Features/feature-03.webp",
    heading: "Real-time price data",
    subheading: "Updating 24/7 using price data form the biggest exchanges",
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative"
      id="features-section"
    >
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        <div className="radial-bg hidden lg:block"></div>

        {/* Column-1 */}
        <div>
          <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">
            FEATURES
          </h3>
          <h2 className="text-offwhite text-3xl lg:text-4xl font-semibold leading-snug mb-6 text-center md:text-start">
            Why Entrust Your Software Development to Me
          </h2>
          <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
            In software development, I&apos;m your catalyst for transformation,
            creating elegant, efficient solutions that exceed expectations.
            Choose me as your developer, and let&apos;s make dreams a reality.
          </p>
        </div>
        {/* Column-2 */}
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
            {/* 1 */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="bg-blue py-10 pr-12 pl-6 rounded-lg custom-border2">
                <div className="rounded-full  w-auto  flex items-center justify-center mb-10">
                  <Image
                    src="/images/Features/feature-01.webp"
                    alt="/images/Features/feature-01.webp"
                    className="object-contain h-[155px]"
                    width={200}
                    height={200}
                  />
                </div>
                <h5 className="text-offwhite text-lg font-medium mb-4">
                  Quality-driven
                </h5>
                <p className="text-lightblue text-sm font-normal">
                  Quality matters most. I create clean, maintainable code for
                  lasting reliability, backed by strong quality assurance.
                </p>
              </div>
            </Fade>

            {/* 2 */}
            <Fade
              direction={"up"}
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="bg-blue py-10 pr-12 pl-6 rounded-lg custom-border2">
                <div className="rounded-full  w-auto  flex items-center justify-center mb-10">
                  <Image
                    src="/images/Features/feature-02.webp"
                    alt="/images/Features/feature-01.webp"
                    className="object-contain h-[153px]"
                    width={200}
                    height={200}
                  />
                </div>
                <h5 className="text-offwhite text-lg font-medium mb-4">
                  Innovator
                </h5>
                <p className="text-lightblue text-sm font-normal">
                  I excel in creative problem-solving, consistently delivering
                  exceptional results.
                </p>
              </div>
            </Fade>

            {/* 3 */}
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="bg-blue py-10 pr-12 pl-6 rounded-lg custom-border2">
                <div className="rounded-full  w-auto  flex items-center justify-center mb-10">
                  <Image
                    src="/images/Features/feature-03.webp"
                    alt="/images/Features/feature-01.webp"
                    className="object-contain"
                    width={200}
                    height={200}
                  />
                </div>
                <h5 className="text-offwhite text-lg font-medium mb-4">
                  Technical Excellence
                </h5>
                <p className="text-lightblue text-sm font-normal">
                  I&apos;m skilled in the latest tech, producing high-quality,
                  functional code seen in my projects and samples.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
