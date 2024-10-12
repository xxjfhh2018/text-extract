import ImageUpExtract from '../components/ImageUpExtract';
import Faq from '../components/faq';
import { GoogleTagManager } from '@next/third-parties/google'

export default function Home() {

  return (
    <>   
    <GoogleTagManager gtmId="G-X5RR5RRQB2" />   
      <ImageUpExtract />
      <section>
        <Faq />
      </section>
      
    </>
  );
}