import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';
// import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'Portfolio', href: '#exchange-section', current: false },
    { name: 'About', href: '#features-section', current: false },
    { name: 'Services', href: '#features-section', current: false },
    { name: 'Skills', href: '#faq-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Disclosure as="nav" className="navbar">
        <>
          <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
            <div className="relative flex h-14 sm:h-20 items-center">
              <div className="flex flex-1 items-center sm:justify-between p-1">
                {/* LOGO */}

                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="hidden h-[130px] w-[130px] object-scale-down lg:block"
                    src={"/logos/logo3-removebg-preview.png"}
                    alt="Crypto-Logo"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="h-[80px] w-[80px] object-scale-down lg:hidden"
                    src={"/logos/logo3-removebg-preview.png"}
                    alt="Crypto-Logo"
                    width={200}
                    height={200}
                  />
                </div>

                {/* LINKS */}

                <div className="hidden lg:flex items-center border-right ">
                  <div className="flex justify-end space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900"
                            : "navlinks text-white hover:text-offwhite hover-underline",
                          "px-3 py-4 rounded-md text-lg font-normal"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <button className="hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white">
                  Contact
                </button>
                {/* <Contactusform /> */}
              </div>

              {/* DRAWER FOR MOBILE VIEW */}

              {/* DRAWER ICON */}

              <div
                className={`block lg:hidden z-[99] ${
                  isOpen ? "hidden" : "visible"
                }`}
              >
                <Bars3Icon
                  className="block h-8 w-8 text-white"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              {/* DRAWER LINKS DATA */}

              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Drawerdata />
              </Drawer>
            </div>
          </div>
        </>
      </Disclosure>
    );
}

export default Navbar;