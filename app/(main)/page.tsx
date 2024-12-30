import HeroSection from '@/app/(main)/_components/hero-section';
import WhoWeAreSection from '@/app/(main)/_components/who-we-are-section';
import OurProgramsSection from './_components/our-programs-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <OurProgramsSection />
    </main>
  );
}
