import BestSelling from "../components/body/BestSellingSection";
import Category from "../components/body/CategorySection";
import FeaturedPage from "../components/body/FeaturedSection";
import Hero from "../components/body/HeroSection";
import ProductsPage from "@/components/body/Product/ProductsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 min-h-screen px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] ">
      <Hero />
      <Category />
      <BestSelling />
      <ProductsPage />
      <FeaturedPage />
    </main>
  );
}
