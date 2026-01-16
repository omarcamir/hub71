'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Client-side hook to get the current pathname

const ScrollToTop = () => {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const scrollToTop = () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    scrollToTop(); // Trigger scroll on pathname change
  }, [pathname]); // Runs when the pathname changes

  return null; // This component doesn't render anything to the UI
};

export default ScrollToTop;
