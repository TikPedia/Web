'use client';

import {
  CheckCircledIcon,
  Cross2Icon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/new-york/button';
import { Input } from '@/components/new-york/input';

import { DataTableFacetedFilter } from './data-table-faceted-filter';

import { DataTableViewOptions } from '@/app/dashboard/videos/data-table-view-options';

// 'pending' | 'processing' | 'success' | 'failed';

export const statuses = [
  {
    value: 'processing',
    icon: QuestionMarkCircledIcon,
    label: 'processing',
  },
  {
    value: 'pending',
    label: 'pending',
    icon: StopwatchIcon,
  },
  {
    value: 'success',
    label: 'success',
    icon: CheckCircledIcon,
  },
  {
    value: 'failed',
    label: 'failed',
    icon: CrossCircledIcon,
  },
];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Search videos...'
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title='Status'
            options={statuses}
          />
        )}

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
