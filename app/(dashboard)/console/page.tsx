import { Clock } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { InfoCard } from './_components/info-card';

// Force dynamic rendering to prevent build-time database calls
export const dynamic = 'force-dynamic';

export default async function ConsoleIndex() {
  return (
    <section className='py-3 space-y-4'>
      <div className='grid grid-cols-1  sm:grid-cols-2  gap-4'>
        <InfoCard icon={Clock} label='Unpublished' numberOfItems={0} />
        <InfoCard
          icon={CheckCircle}
          label='Available'
          numberOfItems={0}
          variant='success'
        />
      </div>
    </section>
  );
}
