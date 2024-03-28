'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';
import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import { cn } from '@/lib/utils';

type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> & {
  value: number;
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => {
  const [progress, setProgress] = useLocalStorageState<number>(
    'checkoutProgress',
    { defaultValue: value },
  );

  const valueIsNumber = value !== (undefined || null);

  useEffect(() => {
    if (valueIsNumber) {
      setProgress(value);
    }
  }, [value, valueIsNumber, setProgress]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
