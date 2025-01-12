'use client';

import { cn, openSans, resources, stringifyUrl } from '@/lib/utils';
import { Resource, User } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ResourceSectionItem from './resource-section-item';
import { useDebounce } from '@/hooks/use-debounce';
import qs from 'query-string';

const ResourcesSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const resourcesRef = useRef(null); // Create a ref for the resources section

  const [resourceDetails, setResourceDetails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const debouncedValue = useDebounce(stringifyUrl(selectedCategory));
  const [searchTerm, setSearchTerm] = useState('');
  const [q, setQ] = useState('');

  const fetchResources = async (category: string, search: string) => {
    try {
      const response = await axios.get(
        `/api/resources/fetch?category=${stringifyUrl(
          category
        )}&search=${search}`
      );
      setResourceDetails(response.data);
      scrollToMain();
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const scrollToMain = () => {
    if (typeof document !== 'undefined') {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const onFilter = () => {
    setQ(searchTerm);
    scrollToMain();
  };

  const changeResourceContainer = (tab: string) => {
    setSelectedCategory(tab);
    scrollToMain();
  };

  useEffect(() => {
    fetchResources(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          search: q,
          category: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, q, router, pathname]);

  return (
    <section
      className={`bg-gray-100 ${openSans.className}`}
      id='main'
      ref={resourcesRef}
    >
      <div className='container px-8 py-20 md:px-0 m-auto'>
        {/* Tabs */}
        <div className='flex md:justify-center mb-8 space-x-4 overflow-x-scroll'>
          {resources.map((tab, index) => (
            <button
              key={index}
              className={cn(
                `px-4 py-2 text-sm font-medium rounded-full text-nowrap`,
                tab === selectedCategory
                  ? 'bg-black text-white'
                  : 'border border-[#938C8C] text-gray-700 hover:bg-gray-300'
              )}
              onClick={() => changeResourceContainer(tab)}
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
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full max-w-md px-4 py-2 bg-gray-100 border border-[#938C8C] rounded-full shadow-sm focus:outline-primary-hover'
          />
          <button
            onClick={onFilter}
            className='flex items-center gap-3 ml-4 px-4 py-2 border border-[#938C8C] rounded-full shadow-sm hover:bg-gray-300'
          >
            <Image src='/filter.svg' alt='filter' width={10} height={4} />
            Filter
          </button>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          {Boolean(resourceDetails.length) &&
            resourceDetails?.map(
              (item: Resource & { creator: User }, index) => (
                <ResourceSectionItem
                  items={resourceDetails as any[]}
                  item={item}
                  index={index}
                />
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
