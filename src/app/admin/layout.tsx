'use client'

import useAuthState from "@/hooks/useAuthState";
import { useRouter } from "next/navigation";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [adminAuthState] = useAuthState();
  const { push } = useRouter();

  if (!adminAuthState) push('/admin/login');

  return children;
}
