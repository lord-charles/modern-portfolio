import Image from "next/image";
import HeroBgAnimation from "../HeroBgAnimation";

const Simple = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-5xl py-24 px-8">
        <div className="flex justify-center items-center absolute inset-0 lg:top-0 md:top-0 xxxs:top-[100px]">
          <HeroBgAnimation />
        </div>

        <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
          Unlocking Possibilities, One Line of Code at a Time
        </h3>

        <div className="flex justify-center space-x-4">
          <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton animate-pulse">
            Hire me
          </button>
          <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton">
            View CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Simple;
