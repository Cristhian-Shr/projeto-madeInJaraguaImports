'use client'

import Header from "./components/headerComponents/header";
import Products from "./components/productsComponent/products";

export default function Home() {
  return (
    <section className="w-full bg-madeJaragua h-full md:h-[100vh]">
      <Header />
      <Products />
    </section>
  );
}
