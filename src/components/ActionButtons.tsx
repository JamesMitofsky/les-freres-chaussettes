'use client';

import { Button } from '@/components/ui/button';

type ActionButtonsProps = Readonly<{
  primaryButton: {
    label: string;
    action: () => void;
  };
  secondaryButton?: {
    label: string;
    action: () => void;
  };
}>;

export default function ActionButtons({
  primaryButton,
  secondaryButton,
}: ActionButtonsProps) {
  return (
    <div className="m-5 flex flex-grow flex-col justify-end gap-2">
      {secondaryButton && (
        <Button variant="outline" onClick={secondaryButton.action}>
          {secondaryButton.label}
        </Button>
      )}
      {primaryButton && (
        <Button className="text-white" onClick={primaryButton.action}>
          {primaryButton.label}
        </Button>
      )}
    </div>
  );
}
