'use client';

import { useEffect } from 'react';

export default function HideTawk() {
  useEffect(() => {
    const processedIframes = new WeakSet<HTMLIFrameElement>();

    const hideTawkElements = (doc: Document | null) => {
      if (!doc) return;

      try {
        if (!doc.getElementById('hide-tawk-global')) {
          const style = doc.createElement('style');
          style.id = 'hide-tawk-global';
          style.textContent = `
            a[href*='tawk.to'] { display: none !important; }
            a[href*='utm_source=tawk-messenger'] { display: none !important; }
            a[href*='Add Chat to your website'] { display: none !important; }
            .tawk-dropdown-menu a:last-child { display: none !important; }
          `;
          (doc.head || doc.documentElement)?.appendChild(style);
        }

        const links = doc.querySelectorAll(
          'a[href*="tawk.to"], a[href*="utm_source=tawk-messenger"]'
        );
        links.forEach(link => {
          const el = link as HTMLElement;
          el.style.display = 'none';
          if (el.parentElement)
            (el.parentElement as HTMLElement).style.display = 'none';
        });

        const buttons = Array.from(doc.querySelectorAll('button'));
        buttons.forEach(btn => {
          const el = btn as HTMLElement;
          if (
            el.textContent?.includes('Pop out widget') ||
            el.querySelector('.tawk-icon-popout')
          ) {
            el.style.display = 'none';
            if (el.parentElement)
              (el.parentElement as HTMLElement).style.display = 'none';
          }
        });

        const iframes = doc.querySelectorAll(
          'iframe[title="chat widget"][src="about:blank"]'
        );
        iframes.forEach(iframe => {
          const el = iframe as HTMLIFrameElement;
          const width = el.style.width || el.getAttribute('width') || '';
          if (
            width.includes('350') ||
            width.includes('300') ||
            width.includes('100%')
          ) {
            el.remove();
          }
        });
      } catch {
        // cross-origin iframes expected
      }
    };

    const processDocument = (doc: Document) => {
      hideTawkElements(doc);

      const iframes = doc.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        if (!processedIframes.has(iframe)) {
          processedIframes.add(iframe);
          try {
            if (iframe.contentDocument) processDocument(iframe.contentDocument);
            iframe.addEventListener(
              'load',
              () => {
                try {
                  if (iframe.contentDocument)
                    processDocument(iframe.contentDocument);
                } catch {}
              },
              { once: true }
            );
          } catch {}
        }
      });
    };

    processDocument(document);

    const observer = new MutationObserver(() => processDocument(document));
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
