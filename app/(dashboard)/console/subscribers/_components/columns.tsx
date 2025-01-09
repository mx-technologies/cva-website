'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Subscriber = {
  id: string;
  email: string;
  createdAt: Date;
};

export const columns: ColumnDef<Subscriber>[] = [
  {
    accessorKey: 'index', // This will be a virtual column
    header: 'ID', // Header for the index column
    cell: ({ row }) => row.index + 1, // Display the index (1-based)
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'createdAt',
    header: 'Subscribed At',
    cell: ({ getValue }: any) => new Date(getValue()).toLocaleString(), // Format date
  },
];
