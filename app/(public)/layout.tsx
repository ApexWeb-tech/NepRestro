import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import ScrollToTop from '@/components/public/ScrollToTop';
import type { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}