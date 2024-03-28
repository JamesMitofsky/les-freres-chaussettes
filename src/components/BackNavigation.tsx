'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function BackNavigation() {
  const router = useRouter();

  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => router.back()}
        style={{ color: '#f5be3d' }}
      >
        <Image
          src="/svgs/left-arrow.svg"
          alt="Flêche retour"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}

export default BackNavigation;
