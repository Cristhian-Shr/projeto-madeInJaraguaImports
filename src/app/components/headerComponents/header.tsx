import Image from "next/image";
import logoJaraguaImport from "../../../../public/logo com fundo transparente.png";
import Link from "next/link";
import DropdownMenuComponent from "./dropdownMenu";

export const Header = () => {
  return (
    <section className="w-full flex justify-between items-center px-10 md:px-32 text-slate-900 py-10">
      <div>
        <Link href="/">
          <Image
            src={logoJaraguaImport}
            alt="logotipo"
            width={1000}
            height={1000}
            quality={100}
            className="w-24 rounded-full hover:-rotate-6 hover:scale-110 md:w-36"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8 font-bold">
          <DropdownMenuComponent />
        </ul>
      </nav>
    </section>
  );
};

export default Header;
