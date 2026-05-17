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
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/0Kap3KftlZoJOOVDY4spFu?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
