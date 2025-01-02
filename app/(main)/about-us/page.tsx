import AboutSection from './_components/about-section';
import ApproachSection from './_components/approach-section';
import BeliefsSection from './_components/beliefs-section';
import HeroSection from './_components/hero-section';
import OurStory from './_components/our-story';

export default function AboutUs() {
  return (
    <main>
      <HeroSection />
      <OurStory />
      <BeliefsSection />
      <AboutSection />
      <ApproachSection />
    </main>
  );
}
