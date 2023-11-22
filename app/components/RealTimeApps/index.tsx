import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const RealTimeApps = () => {
  return (
    <div className="mx-auto max-w-7xl mt-38 mb-16 px-6 relative">
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
              src="/images/Banner/banner.png"
              alt="nothing"
              width={1024}
              height={768}
              className="object-contain"
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
              Elevating Mobile Experiences
            </h3>
            <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
              Experience top-notch mobile solutions crafted to perfection!
              Specializing in seamless interfaces and robust functionalities, I
              bring your mobile app visions to life. Ready to enhance your
              mobile presence? Let&apos;s get started!
            </p>
            <div className="flex justify-center space-x-10">
              <Image
                src={"/images/Trade/appstore.svg"}
                alt="appstore-image"
                width={80}
                height={105}
                className="object-contain"
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

export default RealTimeApps;
