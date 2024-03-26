import Image from 'next/image';

export const UploaderBackground = ({ text }: { text: string }) => (
    <div className="flex flex-col gap-2 h-48 w-full items-center justify-center rounded-lg border-2 border-dotted border-primary">
        <Image
            priority
            src="/svgs/upload-arrow.svg"
            height={80}
            width={80}
            alt="Uploader mon logo"
        />
        {text}
    </div>
)
