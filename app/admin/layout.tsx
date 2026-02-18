'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't wrap login page with admin layout
  if (pathname === '/admin') {
    return <>{children}</>;
  }

  return <>{children}</>;
}
