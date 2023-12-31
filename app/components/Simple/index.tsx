import Image from "next/image";
import HeroBgAnimation from "../HeroBgAnimation";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";

const Simple = () => {
  return (
    <div className="relative" id="hire">
      <div className="mx-auto max-w-5xl py-24 px-8">
        <div className="flex justify-center items-center absolute inset-0 lg:top-[-100px] md:top-[-100px] xxxs:top-[100px]">
          <HeroBgAnimation />
        </div>

        <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
          Unlocking Possibilities, One Line of Code at a Time
        </h3>

        <div className="flex justify-center space-x-4">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <button
              className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton animate-pulse"
              onClick={() => toast.success("Please chat me via chatbot.")}
            >
              Hire me
            </button>
          </Fade>

          <Fade
            direction={"up"}
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {" "}
            <button
              className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton"
              onClick={() => toast.success("Available upon request.")}
            >
              View CV
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Simple;
