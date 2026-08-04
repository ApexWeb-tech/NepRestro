'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

export default function PageLoader() {
  return (
    <motion.div
      role='status'
      aria-live='polite'
      aria-label='Loading page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className='fixed inset-0 z-[999] flex flex-col items-center justify-center'
      style={{ backgroundColor: 'rgba(15,23,42,0.95)' }}
    >
      {/* Brand Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        className='mb-6 flex flex-col items-center gap-3'
      >
        <div
          className='flex h-16 w-16 items-center justify-center rounded-full'
          style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
        >
          <UtensilsCrossed
            size={32}
            style={{ color: 'var(--color-primary)' }}
          />
        </div>

        {/* Brand Name */}
        <span
          className='heading-font text-2xl font-extrabold tracking-tight'
          style={{ color: 'var(--color-primary)' }}
        >
          RESTRO
        </span>
      </motion.div>

      {/* Animated Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className='mb-5 flex items-center gap-2'
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.15,
            }}
            className='block h-2.5 w-2.5 rounded-full'
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        ))}
      </motion.div>

      {/* Loading Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='body-font text-sm tracking-wide text-gray-400'
      >
        Preparing your experience...
      </motion.p>

    </motion.div>
  );
}