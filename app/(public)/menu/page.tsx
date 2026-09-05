'use client';

import { useState } from 'react';
import MenuHero from '@/components/public/MenuHero';
import MenuCategories from '@/components/public/MenuCategories';
import MenuGrid from '@/components/public/MenuGrid';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className='bg-[#111111] text-white'>
      <MenuHero />
      <MenuCategories
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <MenuGrid selectedCategory={selectedCategory} />
    </main>
  );
}