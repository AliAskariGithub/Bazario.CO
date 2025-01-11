import ProductView from "@/components/ProductView";
import SaleBanner from "@/components/SaleBanner";
import Testimonial from "@/components/Testtiminals";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Subscribe from "@/components/Subscribe";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <SaleBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductView products={products} categories={categories} />
        <Testimonial />
        <Subscribe />
      </div>
    </div>
  );
}
