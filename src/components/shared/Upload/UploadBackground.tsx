import Image from 'next/image';

export const UploaderBackground = ({ text }: { text: string }) => (
  <div className="flex h-48 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dotted border-primary">
    <Image
      priority
      src="/svgs/upload-arrow.svg"
      height={80}
      width={80}
      alt="Uploader mon logo"
    />
    {text}
  </div>
);
