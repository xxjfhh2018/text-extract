
import React from 'react';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Textract.tools for any inquiries or assistance with text extraction tools.',
  keywords: '',
};
//函数组件
export default function Contact() {  //括号里可以接受props

  //返回一个jsx 即React元素
  return (
<section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
            Let's create a more efficient text extraction tool together!
            </h2>
            <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
            Whether you're facing technical issues or want to learn more about our services, 
            we're here to listen and help. Feel free to reach out, and let's move your project
            forward together!
             
            </p>
            {/* Testimonial */}
            <div className="mb-4 flex items-center text-orange-500">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                ></path>
              </svg>
            </div>
            <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base">
            We greatly value your feedback! As the creator of this platform, 
            I warmly invite you to share your thoughts, suggestions, or any issues you encounter.
             Your input is essential for us to improve and provide the best possible experience.
             Feel free to reach out — together, we can make this tool even better!"
            </p>
            <div className="flex">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h6 className="text-base font-bold">Kevin</h6>
                <p className="text-sm text-gray-500">Adminrstrator</p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl bg-gray-100 p-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Get a free quote</h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
            Have questions or need assistance with our text extraction tools?
            We’re here to help! Reach out to us anytime, and let’s make text extraction easier together.

            </p>
            {/* Form */}
            <form
              className="mx-auto mb-4 max-w-sm text-left"
              name="wf-form-password"
              method="get"
            >
              <div className="flex flex-col gap-4 w-full">
                <div>
                  <label htmlFor="name-2" className="mb-1 font-medium block">Your Name</label>
                  <input
                    type="text"
                    className="mb-4 block w-full rounded-md border border-solid border-black px-3 py-3 text-sm text-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 font-medium block">Email Address</label>
                  <input
                    type="email"
                    className="mb-4 block w-full rounded-md border border-solid border-black px-3 py-3 text-sm text-black"
                  />
                </div>
                <div>
                  <label htmlFor="field-3" className="mb-1 font-medium block">Project Brief</label>
                  <textarea
                    placeholder=""
                    maxLength="5000"
                    name="field"
                    className="mb-4 block w-full min-h-32 rounded-md border border-solid border-black p-3 text-sm text-black"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Get free quote"
                    className="block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}