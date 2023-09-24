"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "2. What is your pricing structure?",
    subheading:
      "Pricing is based on the complexity of the project, and I'm open to negotiation. Rest assured, I strive to provide cost-effective solutions while maintaining the project's quality and integrity.",
  },
  {
    heading: "2. How do we communicate during the project?",
    subheading:
      " I prioritize clear communication. We'll have regular updates, status meetings, and I'm accessible for any questions or concerns through email and project management tools.",
  },
  {
    heading: "3. How do you handle project changes or additions?",
    subheading:
      "I'm flexible. If you want to make changes or add features during the project, we'll discuss the scope, timeline, and any adjustments to ensure a smooth transition.",
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Frequently Asked And Questions
      </h3>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5 custom-border2"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.subheading}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="mt-32">
            <Image
              src={"/images/Faq/faq.svg"}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
