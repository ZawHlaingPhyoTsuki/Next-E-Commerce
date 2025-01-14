import BestSelling from "@/components/body/BestSellingPage";
import Category from "@/components/body/CategoryPage";
import FeaturedPage from "@/components/body/FeaturedPage";
import Hero from "@/components/body/HeroPage";
import ProductsPage from "@/components/body/ProductsPage";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 min-h-screen px-[150px]">
      <Hero />
      <Category />
      <BestSelling />
      <ProductsPage />
      <FeaturedPage />
    </main>
  );
}
