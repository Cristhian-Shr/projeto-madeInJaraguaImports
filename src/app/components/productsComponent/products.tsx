import Image from "next/image";
import bebidas from "../../../../public/capaProdutos/bebidas.jpg"
import celulares from "../../../../public/capaProdutos/celulares.jpg"
import eletronicos from "../../../../public/capaProdutos/eletronicos.jpg"

export const Products = () => {
  return (
    <section className="container mx-auto grid justify-center items-center gap-20 md:grid-cols-3 md:h-[500px] py-10">
        
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md pt">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <Image src={celulares} alt="capaCelulares"/>
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Celulares
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Veja mais
          </button>
        </div>
      </div>

      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md pt">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <Image src={bebidas} alt="capaBebidas"/></div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Bebidas
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Veja mais
          </button>
        </div>
      </div>

      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md pt">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <Image src={eletronicos} alt="capaEletronicos"/>
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Eletronicos
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            veja mais
          </button>
        </div>
      </div>

    </section>
  );
};

export default Products;
