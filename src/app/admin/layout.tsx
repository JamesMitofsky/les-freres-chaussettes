'use client'

import useAuthState from "@/hooks/useAuthState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [adminAuthState] = useAuthState();
  const { push } = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      push('/admin/login')
    }
}, [])

  return children;
}
