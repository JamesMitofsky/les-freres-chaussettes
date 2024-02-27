'use client';

import { useRouter } from 'next/navigation';

function BackNavigation() {
  const router = useRouter();

  return window.history.length >= 1 && (
    <div className='flex'>
      <button
        type="button"
        onClick={() => router.back()}
        style={{color: "#f5be3d"}}
      >
        ⬅
      </button>
    </div>
  );
}

export default BackNavigation;
