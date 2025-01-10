import { Clock } from 'lucide-react';

import { CheckCircle } from 'lucide-react';
import { InfoCard } from './_components/info-card';
import { db } from '@/lib/db';

export default async function ConsoleIndex() {
  const totalResources = await db.resource.count({});

  return (
    <section className='py-3 space-y-4'>
      <div className='grid grid-cols-1  sm:grid-cols-2  gap-4'>
        <InfoCard icon={Clock} label='Unpublished' numberOfItems={[].length} />
        <InfoCard
          icon={CheckCircle}
          label='Available'
          numberOfItems={totalResources}
          variant='success'
        />
      </div>
    </section>
  );
}
