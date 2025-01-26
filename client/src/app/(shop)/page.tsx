import BestSelling from "@/components/sections/BestSellingSection";
import Category from "@/components/sections/CategorySection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import Hero from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/Product/ProductsSection";


export default function Home() {
  return (
    <main className="flex flex-col gap-20 min-h-screen px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] ">
      <Hero />
      <Category />
      <BestSelling />
      <ProductsSection />
      <FeaturedSection />
    </main>
  );
}
