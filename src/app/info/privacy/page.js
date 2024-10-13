// src/app/info/Privacy/page.js

export const metadata = {
	title: 'Privacy of Service | Textract.tools - Accurate Text Extraction',
	description: 'Read the Privacy and conditions for using Textract.tools',
	keywords: '',
  };
  
  export default function PrivacyOfServicePage() {
	return (
		<section>		
            <div className="bg-white w-full shadow-lg px-6 py-10 relative max-w-3xl"> {/* Close Button */} <button className="absolute top-3 right-3 text-gray-800 hover:text-gray-600">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="14" fill="#F3F4F6" />
                <path d="M11 17L17 11M11 11L17 17" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button> {/* Title and Description */} <div className="text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-5">Cookie Consent</h4>
                <p className="mb-5 max-w-xl mx-auto text-gray-500 text-xl"> Consectetur adipiscing elit duis tristique sollicitudin nibh. Augue mauris augue neque gravida in fermentum. Sapien pellentesque habitant morbi tristique pellentesque. </p>
                </div> {/* Buttons */} <div className="flex justify-center gap-4">
                <button className="bg-black text-white font-bold py-3 px-5 rounded-md"> Deny </button>
                <button className="bg-black text-white font-bold py-3 px-5 rounded-md"> Accept </button>
                </div>
            <p className="text-gray-500 text-xl py-2 px-4 rounded mx-auto text-center mt-5"> Preferences </p>
            </div>		
		</section>
	);
  }
  