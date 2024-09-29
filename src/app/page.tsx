'use client'

import Footer from "./components/footerComponents/footer";
import Header from "./components/headerComponents/header";
import Products from "./components/productsComponent/products";

export default function Home() {
  return (
    <section className="w-full bg-madeJaragua h-full md:h-[100vh]">
      <Header />
      <Products />
      <Footer />
    </section>
  );
}
