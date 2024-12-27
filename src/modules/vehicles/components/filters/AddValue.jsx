'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PlusIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function AddValue({ field, values, label }) {
  const [open, setOpen] = useState();
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const unselectedValues = useMemo(() => {
    const selectedValues = searchParams.get(field)?.split?.(',') || [];

    return values
      .filter((v) => !selectedValues.includes(v))
      .map((v) => ({
        value: v,
        label: v,
      }));
  }, [searchParams]);

  if (unselectedValues.length === 0) {
    return <div />;
  }

  const handleAddValue = (value) => {
    const params = new URLSearchParams(searchParams);
    const selectedValues = params.get(field)?.split(',') || [];
    const newValues = [...selectedValues, value];
    params.set(field, newValues.join(','));
    setSearchParams(params, { replace: true });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className="gap-1 px-2 h-8"
        >
          <PlusIcon className="size-1" />
          <p className="text-xs">{label}</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>{label} পাওয়া যায় নি</CommandEmpty>
            <CommandGroup>
              {unselectedValues.map((subType) => (
                <CommandItem
                  key={subType.value}
                  value={subType.value}
                  onSelect={() => handleAddValue(subType.value)}
                >
                  {subType.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}