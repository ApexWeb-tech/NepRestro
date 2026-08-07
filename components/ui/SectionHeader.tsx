'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInDown, fadeInUp, viewport } from '@/lib/animations';

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
  animate?: boolean;
}

export default function SectionHeader({
  title,
  description,
  badge,
  align = 'center',
  className = '',
  animate = true,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  const content = (
    <>
      {/* Badge */}
      {badge && (
        <motion.span
          variants={animate ? fadeInDown : undefined}
          className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-secondary)',
          }}
        >
          {badge}
        </motion.span>
      )}

      {/* Title */}
      <motion.h2
        variants={animate ? fadeInUp : undefined}
        className={`heading-font mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl ${badge ? '' : 'mt-0'}`}
        style={{ color: 'var(--color-heading)' }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={animate ? fadeInUp : undefined}
          className={`body-font mt-6 text-base leading-8 text-gray-400 sm:text-lg ${
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {description}
        </motion.p>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        className={`mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {content}
    </div>
  );
}