import { openSans, playfairDisplay } from '@/lib/utils';
import { columns } from './_components/columns';
import { DataTable } from '@/components/data-table';
import { CreateResourceDrawer } from './_components/create-resource-drawer';
import { db } from '@/lib/db';

// Force dynamic rendering to prevent build-time database calls
export const dynamic = 'force-dynamic';

export default async function Resources() {
  const resources: any = await db.resource.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      creator: true,
    },
  });

  return (
    <div className={`mx-auto py-5 ${openSans.className}`}>
      <div className='flex justify-between py-2'>
        <p className={`text-xl ${playfairDisplay.className}`}>Resources</p>

        <CreateResourceDrawer />
      </div>
      <DataTable columns={columns} data={resources} />
    </div>
  );
}
