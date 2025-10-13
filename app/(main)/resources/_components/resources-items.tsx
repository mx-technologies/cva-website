// app/components/PreviewGrid.tsx
'use client';

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

export default function ResourcesPreviewGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
      {/* Example Preview Item */}
      <Card className='overflow-hidden shadow-md hover:shadow-xl transition-all rounded-2xl'>
        <CardHeader>
          <CardTitle className='text-lg font-semibold text-center'>
            Bible Study with Pastor Ayomide Idogun
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col items-center'>
          <div className='w-full aspect-video rounded-lg overflow-hidden mb-3'>
            <iframe
              src='https://drive.google.com/file/d/1MUyo3nmyy4Xb3RgHIo9KhlfKAbs79esX/preview'
              allow='autoplay'
              className='w-full h-full border-0'
            ></iframe>
          </div>
          <p className='text-sm text-gray-600 text-center'>
            Experience powerful moments from our recent Bible Study with Pastor
            Ayomide Idogun — a time of deep revelation, transformation, and
            growth in the Word.
          </p>
        </CardContent>
      </Card>

      {/* Add more items here */}
      <Card className='flex items-center justify-center p-8 text-gray-400'>
        Coming Soon
      </Card>
      <Card className='flex items-center justify-center p-8 text-gray-400'>
        Coming Soon
      </Card>
    </div>
  );
}
