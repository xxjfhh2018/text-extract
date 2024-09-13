'use client'
import React from 'react';
import { useState } from 'react';
const Faq = () => {
    // State to keep track of which FAQ is open
    const [openFAQ, setOpenFAQ] = useState(null);

    // Function to toggle FAQ open/close
    const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
    };

// List of FAQs
    const faqs = [
    {
        question: "How to extract text from image?",
        answer:
        "Our AI analyzes the image to accurately extract the text. Once the process is finished,the extracted text will appear in the box below, ready for you to copy",
    },
    {
        question: "How to extract text from PDF?",
        answer:
        "Our AI can accurately extract text from PDF files. Simply upload the PDF, click the 'Extract Text' button, and our system will process the document.",
    },
    {
        question: "Why use our extract text from image?",
        answer:
        "By using our image-to-text extraction tool, you benefit from advanced AI technology that ensures high accuracy and speed.  Whether it's a scanned document, photo, or complex image, we offer reliable and precise results, saving you time and effort.",
    },
    {
        question: "What is OCR technology?",
        answer:
        "OCR (Optical Character Recognition) technology is a method used to convert different types of documents, such as scanned paper documents, images, or PDFs, into editable text. By analyzing the shapes of letters and numbers in the image or document, OCR software can recognize and extract the text accurately. ",
    },
    ];

  return (
    <section>
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-black">
          Extract Text From Image
        </h1>
        <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-500 lg:max-w-lg">
        Textract.tools is a online tool that allows you to extract text from images 
        quickly and accurately. With just one click, you can effortlessly extract 
        text from pictures and photos, making it an easy and efficient solution 
        for extract text from any image.
        </p>
      </div>
      <div className="mt-10 flex w-full max-w-4xl flex-col">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="max-w-3xl">
              <h2 className="text-xl font-bold text-black">{faq.question}</h2>
              {openFAQ === index && (
                <p className="font-inter mt-4 text-base font-light text-gray-500">
                  {faq.answer}
                </p>
              )}
            </div>
            <button
              className="absolute right-5 top-9 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation(); // 防止事件冒泡
                toggleFAQ(index);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="white"></circle>
                <path
                  d="M7.04688 11.9999H16.9469"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 7.05005V16.95"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={`${openFAQ === index ? "opacity-0" : "opacity-100"} transition-opacity duration-100 ease-in-out`}
                ></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <p className="font-inter mx-auto mt-12 text-base text-gray-500 text-center">
        Can’t find the answer you’re looking for? Reach out to our
        <a href="#" className="text-black font-bold">
          {" "}
          customer support team.
        </a>
      </p>
    </div>
  </section>
    );
}
export default Faq;
