'use client';

import { cn, openSans, resources, stringifyUrl } from '@/lib/utils';
import { Resource, User } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ResourceSectionItem from './resource-section-item';
import { useDebounce } from '@/hooks/use-debounce';
import qs from 'query-string';
import { Inbox, BookOpen, FileText, Video, Music } from 'lucide-react';

// Unique preloader component for resources
const ResourcesPreloader: FC = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [BookOpen, FileText, Video, Music];
  const IconComponent = icons[currentIcon];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center py-16 text-center'>
      <div className='relative mb-6'>
        {/* Animated background circle with brand colors */}
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-red-100 to-yellow-100 animate-pulse'></div>

        {/* Rotating icon container */}
        <div className='relative w-16 h-16 flex items-center justify-center'>
          <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-primary-main animate-spin'></div>
          <div
            className='absolute inset-2 rounded-full border-4 border-transparent border-b-yellow animate-spin'
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>

          {/* Icon in center */}
          <div className='relative z-10 text-primary-main'>
            <IconComponent className='w-6 h-6' />
          </div>
        </div>
      </div>

      {/* Loading text with animation */}
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-primary-main animate-pulse'>
          Loading Resources
        </h3>
        <p className='text-sm text-gray-600'>
          Gathering the latest content for you...
        </p>

        {/* Animated dots with brand colors */}
        <div className='flex justify-center space-x-1 mt-3'>
          <div
            className='w-2 h-2 bg-primary-main rounded-full animate-bounce'
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className='w-2 h-2 bg-yellow rounded-full animate-bounce'
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className='w-2 h-2 bg-primary-main rounded-full animate-bounce'
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ResourcesSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const resourcesRef = useRef<HTMLElement>(null); // Ref for the resources section

  const [resourceDetails, setResourceDetails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const debouncedValue = useDebounce(stringifyUrl(selectedCategory));
  const [searchTerm, setSearchTerm] = useState('');
  const [q, setQ] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const fetchResources = async (category: string, search: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `/api/resources/fetch?category=${stringifyUrl(
          category
        )}&search=${search}`
      );
      setResourceDetails(response.data);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToResources = (forceScroll = false) => {
    if (resourcesRef.current) {
      const element = resourcesRef.current;

      if (forceScroll) {
        // Always scroll for tab clicks and filters
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else {
        // Check visibility for auto-scroll from query params
        const elementRect = element.getBoundingClientRect();
        const isElementVisible =
          elementRect.top >= 0 && elementRect.bottom <= window.innerHeight;

        // Only scroll if the element is not fully visible
        if (!isElementVisible) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    }
  };

  const onFilter = () => {
    setQ(searchTerm);
    // Scroll to resources section when filtering (with slight delay for state update)
    setTimeout(() => scrollToResources(true), 150);
  };

  const changeResourceContainer = (tab: string) => {
    setSelectedCategory(tab);
    // Always scroll to resources section when changing category
    setTimeout(() => scrollToResources(true), 200);
  };

  useEffect(() => {
    fetchResources(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  // Auto-scroll when query parameters are present
  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    if ((category || search) && !hasInitialized) {
      setHasInitialized(true);
      // Scroll to resources section after a short delay to ensure content is loaded
      setTimeout(() => {
        scrollToResources();
      }, 500);
    }
  }, [searchParams, hasInitialized]);

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
          {isLoading ? (
            <div className='col-span-full'>
              <ResourcesPreloader />
            </div>
          ) : resourceDetails.length > 0 ? (
            resourceDetails.map((item: Resource & { creator: User }, index) => (
              <ResourceSectionItem
                key={item.id ?? index} // use id if available
                items={resourceDetails as any[]}
                item={item}
                index={index}
              />
            ))
          ) : (
            <div className='col-span-full'>
              <EmptyState
                title='No resources available'
                description='Please check back later — new resources will be added soon.'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const EmptyState: FC<EmptyStateProps> = ({
  title = 'No resources found',
  description = 'You haven’t added any resources yet.',
  icon = <Inbox className='w-12 h-12 text-gray-400' />,
}) => {
  return (
    <div className='flex flex-col items-center justify-center py-10 text-center text-gray-500'>
      {icon}
      <h3 className='mt-4 text-lg font-semibold text-gray-700'>{title}</h3>
      <p className='mt-1 text-sm text-gray-500'>{description}</p>
    </div>
  );
};

export default ResourcesSection;
