import React from 'react';
export default function About() {
    return (
        <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                {/* Component */}
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
                {/* Content */}
                <div className="flex flex-col gap-8 lg:w-3/5">
                    <h2 className="mb-8 text-3xl font-bold md:text-5xl">About us</h2>
                    <p className="text-sm sm:text-base">

                    Welcome to Textract.tools, your go-to platform for accurate and 
                    efficient text extraction from images. Since our inception, we&#x26;apos;ve 
                    been committed to leveraging the latest OCR technology to provide 
                    businesses and individuals with a seamless solution for converting 
                    images into editable text. Our user-friendly platform ensures high 
                    accuracy and speed, whether you&#x27;re working with scanned documents, 
                    photos, or complex image formats.
                    </p>
                    <a
                    href="#"
                    className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                    >
                    Learn More
                    </a>
                    {/* Divider */} <div className="my-8 h-px w-full bg-black"></div>
                    {/* Testimonials */}
                    <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                    <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                        <p className="text-sm">
                        Textract.tools has completely transformed the way I handle 
                        image-based documents. The accuracy is spot on, and the process
                        is incredibly fast. It&#x27;s become an essential tool for 
                        my day-to-day tasks!
                        </p>
                        <div className="flex items-center gap-2 sm:gap-x-4">
                        <div className="flex items-center gap-x-2">
                            <img
                            src="/thumbnails-1.png"
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold sm:text-base">
                            – Sarah W.
                            </p>
                        </div>
                        {/* Divider */} <div className="h-5 w-px bg-gray-300"></div>
                        <div className="flex items-center gap-x-2">
                            <p className="text-sm font-semibold sm:text-base">5.0</p>
                            <div className="flex text-orange-500">
                            <svg
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                        <p className="text-sm">
                        I was amazed at how easy it was to extract text from my scanned 
                        documents using Textract.tools. The interface is intuitive, and 
                        the results are always accurate. This tool has saved me 
                        countless hours!
                        </p>
                        <div className="flex items-center gap-2 sm:gap-x-4">
                        <div className="flex items-center gap-x-2">
                            <img
                            src="/thumbnails-2.png"
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                            />
                            <p className="text-sm font-semibold sm:text-base">
                            – John M.
                            </p>
                        </div>
                        {/* Divider */} <div className="h-5 w-px bg-gray-300"></div>
                        <div className="flex items-center gap-x-2">
                            <p className="text-sm font-semibold sm:text-base">5.0</p>
                            <div className="flex text-orange-500">
                            <svg
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                                className="h-4 w-4"
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
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Image */}
                <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5">
                <img src="/aboutus.png" alt="about Textract.tools" />
                </div>
                </div>
            </div>
        </section>
  );
}        