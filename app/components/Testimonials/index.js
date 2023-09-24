import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="testimonials">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-bluish feature-font text-lg font-semibold">
              TESTIMONIALS
            </h2>
            <p className="text-xl text-bluish">
              Discover what clients and colleagues have to say.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6  bg-blue custom-border2 rounded-lg"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src="/testimonial/usertwo.png"
                    width={58}
                    height={48}
                    alt="Testimonial 01"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-bluish grow">
                — Visionary Engineer: "Charles is a visionary engineer
                who&apos;s revolutionizing the world of software development.
                His expertise and innovative thinking have elevated our projects
                to new heights. His dedication and vision deserve applause."
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">John Smith</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Tech Solutions
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue custom-border2 rounded-lg">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src="/testimonial/userthree.png"
                    width={78}
                    height={78}
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 mr-1 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-bluish grow">
                — Innovative Collaborator: "Working with Charles has been an
                inspiring journey. She&apos;s an innovative collaborator who
                consistently pushes the boundaries of what&apos;s possible in
                software development. Her dedication and vision deserve
                applause."
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">mily Davis</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  XYZ Corporation
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6  bg-blue custom-border2 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src="/testimonial/userone.png"
                    width={48}
                    height={48}
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-bluish grow">
                — Exceptional Developer: "Charles is an exceptional developer
                who&apos;s making a significant impact in the software industry.
                Her technical acumen and commitment to quality are truly
                commendable. Her dedication and vision deserve applause."
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Tech Innovators Inc.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
