'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export default function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  className = '',
}: EmptyStateProps) {
  const defaultIcon = (
    <div
      className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full'
      style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
    >
      <UtensilsCrossed size={32} style={{ color: 'var(--color-primary)' }} />
    </div>
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={viewport}
      className={`rounded-2xl border p-10 text-center shadow-md ${className}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Icon */}
      <motion.div variants={fadeInUp}>
        {icon ? (
          <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full'
            style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
          >
            {icon}
          </div>
        ) : defaultIcon}
      </motion.div>

      {/* Title */}
      <motion.h3
        variants={fadeInUp}
        className='heading-font text-2xl font-bold text-white'
      >
        {title}
      </motion.h3>

      {/* Description */}
      {description && (
        <motion.p
          variants={fadeInUp}
          className='body-font mx-auto mt-4 max-w-sm text-base leading-7 text-gray-400'
        >
          {description}
        </motion.p>
      )}

      {/* Action Button */}
      {actionLabel && actionHref && (
        <motion.div variants={fadeInUp} className='mt-8'>
          <Link
            href={actionHref}
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='body-font inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            {actionLabel}
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}