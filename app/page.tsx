import CasinosSection from "./(components)/sections/casinos";
import ContactSection from "./(components)/sections/contact";
import CrossSection from "./(components)/sections/cross";
import FAQSection from "./(components)/sections/faq";
import HeroSection from "./(components)/sections/hero";
import HowToPlaySection from "./(components)/sections/how-to-play";
import HowToPlayMdSection from "./(components)/sections/how-to-play-md";
import LiveSection from "./(components)/sections/live";
import MarqueeSection from "./(components)/sections/marquee";
import PlaySection from "./(components)/sections/play";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <HowToPlaySection />
      <HowToPlayMdSection />
      <CrossSection />
      <PlaySection />
      <CasinosSection />
      <LiveSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
