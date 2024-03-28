'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { push } = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      push('/admin/login');
    }
  }, [push]);

  return children;
}
