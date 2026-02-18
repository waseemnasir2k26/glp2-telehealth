'use client';

import React from 'react';
import { PortalHeader } from '@/components/portal/Sidebar';
import MessageThread from '@/components/portal/MessageThread';

export default function MessagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalHeader title="Messages" subtitle="Secure communication with your care team" />

      <div className="flex-1 p-6 lg:p-8">
        <div className="h-[calc(100vh-200px)]">
          <MessageThread />
        </div>
      </div>
    </div>
  );
}
