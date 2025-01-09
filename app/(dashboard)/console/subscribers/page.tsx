import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import { db } from '@/lib/db';

export default async function Subscribers() {
  const subscribers = await db.newsletterSubscription.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={subscribers} />
    </div>
  );
}
