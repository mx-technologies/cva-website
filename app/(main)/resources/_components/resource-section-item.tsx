'use client';

import { cn } from '@/lib/utils';
import { Resource, User } from '@prisma/client';
import { useRef, useState } from 'react';

interface ResourceSectionItemProps {
  items: any[];
  item: Resource & { creator: User };
  index: number;
}

export default function ResourceSectionItem({
  items,
  item,
  index,
}: ResourceSectionItemProps) {
  const audioRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio
      setIsPlaying(true); // Update state to indicate audio is playing
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      setIsPlaying(false); // Update state to indicate audio is paused
    }
  };

  return (
    <div
      key={index}
      className={cn(
        'flex flex-col md:flex-row md:items-center gap-2 md:gap-0 p-6  border border-[#CCCCCC]',
        // border radius
        index === 0 && 'rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none',
        index === 1 && 'lg:rounded-tr-2xl',
        index === items.length - 1 &&
          'rounded-bl-2xl rounded-br-2xl lg:rounded-bl-none lg:rounded-br-2xl',
        index === items.length - 2 && ' lg:rounded-bl-2xl'
      )}
    >
      <img
        src={item.mediaArt}
        alt='Thumbnail'
        className='w-full md:w-20 rounded-md'
      />
      <div className='flex-1 md:px-4'>
        <h2 className='text-lg font-semibold text-ellipsis'>{item.title}</h2>
        <p className='text-sm text-gray-600 mb-1'>{`by ${
          item.creator.email?.split('@')[0]
        }`}</p>
        <p className='text-xs text-gray-500'>
          {new Date(item.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-2'>
        <audio ref={audioRef} src={item.mediaUrl} preload='auto' />
        <button
          className='px-4 py-2 text-primary-main border border-primary-main rounded-full'
          onClick={isPlaying ? pauseAudio : playAudio}
        >
          {isPlaying ? 'Pause' : 'Play'}{' '}
          {/* Switch text based on playback state */}
        </button>
        <a
          href={item.mediaUrl}
          download
          className='flex justify-center px-4 py-2 text-primary-main border border-primary-main rounded-full'
        >
          Download
        </a>
      </div>
    </div>
  );
}
