'use client';
import { useEffect, useState } from 'react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState<'A' | 'B' | 'C'>('B'); // A/B/C

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show after 2 interactions
      const interactions = Number(sessionStorage.getItem('interactions') || '0');
      if (interactions >= 2) setShow(true);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Track interactions
    const inc = () => {
      const count = Number(sessionStorage.getItem('interactions') || '0') + 1;
      sessionStorage.setItem('interactions', count.toString());
    };
    ['click', 'scroll'].forEach(ev => window.addEventListener(ev, inc, { once: false }));

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      ['click', 'scroll'].forEach(ev => window.removeEventListener(ev, inc));
    };
  }, []);

  const install = () => {
    gtag('event', 'pwa_install_click', { variant });
    deferredPrompt?.prompt();
    deferredPrompt?.userChoice.then((choice: any) => {
      gtag('event', 'pwa_install_result', { outcome: choice.outcome, variant });
      setShow(false);
    });
  };

  if (!show || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      {variant === 'A' && (
        <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3">
          <img src="/icon-192.png" alt="" className="w-10 h-10 rounded" />
          <div className="flex-1">
            <p className="text-sm font-medium">InsightHunter</p>
            <p className="text-xs text-gray-600">Install for offline access</p>
          </div>
          <button onClick={install} className="text-primary text-sm font-medium">Install</button>
        </div>
      )}
      {variant === 'B' && (
        <div className="bg-gradient-to-r from-blue-600 to-primary text-white p-4 rounded-xl shadow-xl">
          <p className="font-bold text-sm">Get Insights 3x Faster</p>
          <p className="text-xs opacity-90 mb-2">Offline, push alerts, one tap</p>
          <button onClick={install} className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold w-full">
            Install Free
          </button>
        </div>
      )}
      {variant === 'C' && (
        <div className="bg-white p-4 rounded-xl shadow-xl border border-green-200">
          <p className="text-sm font-semibold flex items-center gap-1">
            ⭐ 4.9 • 10,000+ installed
          </p>
          <p className="text-xs text-gray-600 mb-2">Tap to add to Home Screen</p>
          <button onClick={install} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm w-full">
            Add Now
          </button>
        </div>
      )}
    </div>
  );
}
