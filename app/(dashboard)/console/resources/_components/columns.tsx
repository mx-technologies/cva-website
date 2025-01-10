'use client';

import { ColumnDef } from '@tanstack/react-table';
import { capitalize } from 'lodash';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Resource = {
  title: string;
  category: string;
  mediaArt: string;
  mediaUrl: string;
  messenger: string;
  creator: string;
  createdAt: Date;
};

export const columns: ColumnDef<Resource>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ getValue }: any) => capitalize(getValue()),
  },
  {
    accessorKey: 'mediaArt',
    header: 'Media Art',
  },
  {
    accessorKey: 'mediaUrl',
    header: 'Media Url',
  },
  {
    accessorKey: 'messenger',
    header: 'Messenger',
  },
  {
    accessorKey: 'creator',
    header: 'Creator',
    cell: ({ getValue }: any) => getValue()?.email?.split('@')[0],
  },
  {
    accessorKey: 'createdAt',
    header: 'Date Created',
    cell: ({ getValue }: any) => new Date(getValue()).toLocaleString(), // Format date
  },
];
