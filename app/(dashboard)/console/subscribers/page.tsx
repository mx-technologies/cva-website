import { columns } from './_components/columns';
import { DataTable } from '@/components/data-table';
import { db } from '@/lib/db';
import { playfairDisplay } from '@/lib/utils';

export default async function Subscribers() {
  const subscribers = await db.newsletterSubscription.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='mx-auto py-5'>
      <div className='flex py-2'>
        <p className={`text-xl ${playfairDisplay.className}`}>Subscribers</p>
      </div>
      <DataTable columns={columns} data={subscribers} />
    </div>
  );
}
