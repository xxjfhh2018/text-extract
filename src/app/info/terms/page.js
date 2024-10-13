// src/app/info/terms/page.js

export const metadata = {
	title: 'Terms of Service | Textract.tools - Accurate Text Extraction',
	description: 'Read the terms and conditions for using Textract.tools, the leading online tool for extracting text from images and documents. By using our service, you agree to our terms and conditions, ensuring a smooth and reliable experience.',
	keywords: 'terms of service, textract.tools terms, text extraction terms, user agreement, OCR terms, image to text service',
  };
  
  export default function TermsOfServicePage() {
	return (
		<section>
		<div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 md:px-10">
			<div>
				<h1 className="text-3xl lg:text-4xl font-bold text-black px-5 py-16 md:px-10 text-center ">Terms of Service</h1>
				<p>These terms and conditions outline the rules and regulations for the use of Textract.tools, the online tool for extracting text from images and documents.</p>
				
				<h2 className="text-2xl font-bold text-black py-6">1. Terms</h2>
				<p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the website if you do not accept all of the terms and conditions stated on this page.</p>
				
				<h2 className="text-2xl font-bold text-black py-6">2. License</h2>
				<p>Unless otherwise stated, Textract.tools and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Textract.tools for your personal use, subject to restrictions set in these terms and conditions.</p>
				
				<h2 className="text-2xl font-bold text-black py-6">3. User Responsibilities</h2>
				<p>Users are responsible for ensuring that any use of Textract.tools complies with the laws and regulations of their jurisdiction. You agree not to use the website in any way that may damage the site, disrupt access for others, or use the service for any unlawful purposes.</p>
				
				<h2 className="text-2xl font-bold text-black py-6">4. Acceptable Use</h2>
				<p>You agree not to misuse the site by knowingly introducing viruses, Trojans, worms, or other material that is malicious or technologically harmful. You must not attempt to gain unauthorized access to the website, the server on which the site is stored, or any server, computer, or database connected to our website.</p>

				<h2 className="text-2xl font-bold text-black py-6">5. Limitations of Liability</h2>
				<p>Textract.tools is provided "as is," without any warranties or guarantees. Textract.tools shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service. In no event shall Textract.tools be liable for any damages exceeding the amount you paid to access the service (if any).</p>

				<h2 className="text-2xl font-bold text-black py-6">6. Privacy Policy</h2>
				<p>Your use of Textract.tools is also governed by our Privacy Policy, which can be found on the Privacy Policy page. Please review this policy to understand how we collect and use your personal information.</p>

				<h2 className="text-2xl font-bold text-black py-6">7. Changes to Terms</h2>
				<p>We reserve the right to modify or replace these terms at any time. Any changes will be posted on this page, and it is your responsibility to review these terms periodically. Your continued use of the site after any changes indicates your acceptance of the new terms.</p>

				<h2 className="text-2xl font-bold text-black py-6">8. Termination</h2>
				<p>We reserve the right to suspend or terminate access to Textract.tools at our sole discretion, without notice or liability, if we believe you are violating these terms or engaging in harmful activities on the site.</p>

				<h2 className="text-2xl font-bold text-black py-6">9. Governing Law</h2>
				<p>These terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Textract.tools operates, without regard to its conflict of law provisions.</p>
			</div>
		</div>
		</section>
	);
  }
  