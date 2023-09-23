import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Trade = () => {
  return (
    <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
      <div className="radial-bgone hidden lg:block"></div>

      <div className="grid lg:grid-cols-2 gap-x-5 place-content-center">
        {/* Column-1 */}
        <Fade
          direction={"left"}
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div>
            <Image
              src={"/images/Trade/macbook.png"}
              alt="macBook-image"
              width={787}
              height={512}
            />
          </div>
        </Fade>

        {/* Column-2 */}
        <Fade
          direction={"up"}
          delay={800}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div>
            <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">
              Exploring Complex Software Solutions
            </h3>
            <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
              Ready to tackle intricate projects? With a track record of
              excellence, I specialize in complex software solutions. From
              sophisticated web apps to intricate mobile platforms, I turn ideas
              into reality. Let&apos;s collaborate!
            </p>
            <div className="flex justify-between">
              <Image
                src={"/images/Trade/mac.svg"}
                alt="macOS-image"
                width={61}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={"/images/Trade/appstore.svg"}
                alt="appstore-image"
                width={80}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={"/images/Trade/windows.svg"}
                alt="windows-image"
                width={80}
                height={105}
              />
              <div className="verticalLine"></div>
              <Image
                src={"/images/Trade/android.svg"}
                alt="android-image"
                width={71}
                height={105}
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Trade;
