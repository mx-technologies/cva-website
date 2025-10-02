import { Suspense } from 'react';
import HeroSection from './_components/hero-section';
import ResourcesSection from './_components/resources-section';

export default function Resources() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={<div>Loading resources...</div>}>
        <ResourcesSection />
      </Suspense>
    </main>
  );
}
