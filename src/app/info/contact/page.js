import ContactForm from '../../../components/ContactForm';
export const metadata = {
  title: 'Contact Us',
  description: 'Contact Textract.tools for any inquiries or assistance with text extraction tools.',
  keywords: 'contact, support, text extraction, OCR',
};

export default function Contact() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
              Let's create a more efficient text extraction tool together!
            </h2>
            {/* 其他静态内容 */}
          </div>
          <div className="mx-auto max-w-xl bg-gray-100 p-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Get a free quote</h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
              Have questions or need assistance with our text extraction tools?
              We're here to help! Reach out to us anytime, and let's make text extraction easier together.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}