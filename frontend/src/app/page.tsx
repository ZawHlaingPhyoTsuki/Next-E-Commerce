import ProductsSection from "@/components/body/Product/ProductsSection";
import BestSelling from "../components/body/BestSellingSection";
import Category from "../components/body/CategorySection";
import Hero from "../components/body/HeroSection";
import FeaturedSection from "../components/body/FeaturedSection";

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
