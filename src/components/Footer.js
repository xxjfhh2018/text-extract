import React from 'react';

const Footer = () => {
  return (
<footer className="block">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">
          <a href="#" className="mb-8 inline-block max-w-full text-black">
            <img
              src="/dlogo.png"
              alt=""
              className="inline-block"
            />
          </a>
          <div className="text-center font-semibold">
            <a
              href="/about"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Help
            </a>
          </div>
          <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-52 gap-3">
            <a
              href="#"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940535e6cf7a_Vector-3.svg"
                alt=""
                className="inline-block"
              />
            </a>
            <a
              href="#"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg"
                alt=""
                className="inline-block"
              />
            </a>
          </div>
          <p className="text-sm sm:text-base">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
