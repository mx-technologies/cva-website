import { cn, openSans } from '@/lib/utils';
import Image from 'next/image';

const ResourcesSection = () => {
  const items = Array(6).fill({
    title: 'Salvation Power',
    author: 'Pastor Ayomide Idogun',
    date: '18TH DECEMBER, 2024',
    image: '/resources/sermon-cover.png', // Replace with the correct path for the image
  });

  return (
    <section className={`bg-gray-100 ${openSans.className}`}>
      <div className='container px-8 py-20 md:px-0 m-auto'>
        {/* Tabs */}
        <div className='flex md:justify-center mb-8 space-x-4 overflow-x-scroll'>
          {[
            'Sermons',
            'Books',
            'Devotionals',
            'Music & Worship',
            'Recorded Live Sessions',
          ].map((tab, index) => (
            <button
              key={index}
              className={cn(
                `px-4 py-2 text-sm font-medium rounded-full text-nowrap`,
                tab === 'Sermons'
                  ? 'bg-black text-white'
                  : 'border border-[#938C8C] text-gray-700 hover:bg-gray-300'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 mb-6'>
          <input
            type='text'
            placeholder='Search'
            className='w-full max-w-md px-4 py-2 bg-gray-100 border border-[#938C8C] rounded-full shadow-sm focus:outline-primary-hover'
          />
          <button className='flex items-center gap-3 ml-4 px-4 py-2 border border-[#938C8C] rounded-full shadow-sm hover:bg-gray-300'>
            <Image src='/filter.svg' alt='filter' width={10} height={4} />
            Filter by
          </button>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col md:flex-row md:items-center gap-2 md:gap-0 p-6  border border-[#CCCCCC]',
                // border radius
                index === 0 && 'rounded-tl-2xl ',
                index === 1 && 'rounded-tr-2xl',
                index === items.length - 1 && 'rounded-br-2xl',
                index === items.length - 2 && 'rounded-bl-2xl'
              )}
            >
              <img
                src={item.image}
                alt='Thumbnail'
                className='w-full md:w-20 rounded-md'
              />
              <div className='flex-1 md:px-4'>
                <h2 className='text-lg font-semibold text-ellipsis'>
                  {item.title}
                </h2>
                <p className='text-sm text-gray-600 mb-1'>{`by ${item.author}`}</p>
                <p className='text-xs text-gray-500'>{item.date}</p>
              </div>
              <div className='flex flex-col md:flex-row gap-2'>
                <button className='px-4 py-2 text-primary-main border border-primary-main rounded-full'>
                  Play
                </button>
                <button className='px-4 py-2 text-primary-main border border-primary-main rounded-full'>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
