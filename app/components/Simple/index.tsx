import Image from "next/image";
import HeroBgAnimation from "../HeroBgAnimation";

const Simple = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-5xl py-24 px-6">
        <div className="flex justify-center items-center absolute inset-0">
          <HeroBgAnimation />
        </div>

        <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
          A simple, secure way to buy <br /> and sell cryptocurrency
        </h3>
        <p className="text-center text-bluish text-lg font-normal mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum <br /> has been the industry
        </p>
        <div className="flex justify-center space-x-4">
          <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton">
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
