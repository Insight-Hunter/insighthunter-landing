'use client';
import { useState } from 'react';
import { subscribeToPush } from '@/lib/push';

export default function NotificationPrompt() {
  const [show, setShow] = useState(true);

  if (!show || Notification.permission === 'denied') return null;

  return (
    <div className="fixed top-20 left-4 right-4 bg-gradient-to-r from-blue-600 to-primary text-white p-4 rounded-xl shadow-lg flex items-center gap-4 z-40 animate-slideDown md:hidden">
      <div className="flex-1">
        <p className="font-semibold text-sm">Get real-time insight alerts</p>
        <p className="text-xs opacity-90">New trends, reports, and updates</p>
      </div>
      <button
        onClick={async () => {
          await subscribeToPush();
          setShow(false);
        }}
        className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium"
      >
        Allow
      </button>
      <button onClick={() => setShow(false)} className="text-white opacity-70">×</button>
    </div>
  );
}
