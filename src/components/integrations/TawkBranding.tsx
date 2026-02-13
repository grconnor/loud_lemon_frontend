'use client';

import { useEffect } from 'react';

export default function TawkBranding() {
  useEffect(() => {
    const interval = setInterval(() => {
      const branding = document.querySelector('a[class*="tawk-branding"]');

      if (branding) {
        branding.remove();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
