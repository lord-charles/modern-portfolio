"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Zigzag() {
  return (
    <section>
      <div
        className="mx-auto max-w-7xl mt-16  mb-20 relative overflow-x-hidden px-6"
        id="skills"
      >
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-4 gap-x-1 m-2 text-white bg-green  rounded-full mb-4">
              <a>Technology Stack</a>
              <Image
                src="/icons/verified.png"
                width={20}
                height={20}
                alt="image"
                className="object-contain"
              />
            </div>

            <p className="text-xl text-bluish lg:block md:block xxxs:hidden">
              uncover my technology stack—an insightfully curated collection of
              tools and frameworks that drive efficiency and innovation in my
              projects.
            </p>
            <p className="text-lg text-bluish lg:hidden md:hidden xxxs:block">
              Explore my carefully curated technology stack, driving innovation.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 ">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md object-contain md:pr-[140px] lg:pr-[70px] "
                    src="/icons/nextjs.webp"
                    width={540}
                    height={405}
                    alt="Features 01"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto  md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16 ">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      Next js
                    </div>

                    <p className="text-xl text-bluish mb-4 text-start ">
                      Next.js holds a special place in my arsenal of tools for
                      web development. This cutting-edge framework has been a
                      game-changer, and here&apos;s why:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Improved Performance</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>SEO-Friendly</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Scalability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>

            {/* 2nd item */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {" "}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md object-contain xxxs:w-[400px] md:w-[360px] lg:w-[400px]"
                    src="/icons/reactjs.jpg"
                    width={540}
                    height={405}
                    alt="Features 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-left"
                >
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      React js
                    </div>

                    <p className="text-xl text-bluish mb-4 ">
                      React, a cornerstone of modern web development, plays a
                      pivotal role in my projects. Here&apos;s why React is a
                      top choice for crafting exceptional digital experiences:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Component-Based Architecture.</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Strong Ecosystem.</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Fast Rendering.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>

            {/* 3rd item */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {" "}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md object-contain"
                    src="/icons/reactnative.jpg"
                    width={450}
                    height={405}
                    alt="Features 03"
                  />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      React Native
                    </div>

                    <p className="text-xl text-bluish mb-4">
                      React Native, a game-changer in mobile app development, is
                      a key component of my toolkit. Here&apos;s why I choose
                      React Native for crafting exceptional mobile applications:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Cross-Platform Compatibility.</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Native Performance.</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Cost-Effective.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>

            {/* 4nd item */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md object-contain  lg:pr-[70px] md:pr-[180px]"
                    src="/icons/nodejs2.jpg"
                    width={570}
                    height={405}
                    alt="Features 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-left"
                >
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      Node js
                    </div>

                    <p className="text-xl text-bluish mb-4 ">
                      Node.js is the backbone of many of my server-side
                      applications, and here&apos;s why it&apos;s a cornerstone
                      of my development approach:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span> Real-time Applications.</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Efficient and Scalable.</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Cross-Platform.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>

            {/* 5rd item */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md object-contain lg:pr-[70px] md:pr-[180px]"
                    src="/icons/nodejs.jpg"
                    width={540}
                    height={405}
                    alt="Features 03"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      Express js
                    </div>

                    <p className="text-xl text-bluish mb-4">
                      Express.js is a crucial part of my development arsenal,
                      offering a range of advantages that set it apart:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Minimalist Framework.</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Rapid Development.</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Performance.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>

            {/* 6nd item */}
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md  lg:w-[500px] md:w-[350px]"
                    src="/icons/mongodb.gif"
                    width={540}
                    height={405}
                    alt="Features 02"
                  />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      Mongo db
                    </div>

                    <p className="text-xl text-bluish mb-4 ">
                      MongoDB is a fundamental component of my development
                      toolkit, offering several compelling advantages:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>JSON-Like Documents.</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Flexible Schema.</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Security.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
            {/* 7rd item */}
            <Fade
              direction={"up"}
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="relative"
                    src="/icons/tailwind.svg"
                    width={540}
                    height={405}
                    alt="Features 03"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter lg:text-5xl xxxs:text-4xl text-purple-600 mb-2">
                      Tailwind css
                    </div>

                    <p className="text-xl text-bluish mb-4">
                      Tailwind CSS is an indispensable tool in my web
                      development arsenal, offering several key advantages:
                    </p>
                    <ul className="text-lg text-bluish -mb-2">
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Highly Customizable.</span>
                      </li>
                      <li className="flex items-center mb-2 ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Rapid Prototyping.</span>
                      </li>
                      <li className="flex items-center ">
                        <svg
                          className="w-3 h-3 fill-current text-green mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Consistency.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
