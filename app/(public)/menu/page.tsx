import MenuHero from '@/components/public/MenuHero';
import MenuCategories from '@/components/public/MenuCategories';
import MenuGrid from '@/components/public/MenuGrid';

export default function MenuPage() {
  return (
    <main className='bg-[#111111] text-white'>
      <MenuHero />
      <MenuCategories />
      <MenuGrid />
    </main>
  );
}