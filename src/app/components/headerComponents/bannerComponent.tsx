import Image from "next/image"
import banner from "../../../../public/logo.jpg"

export const BannerComponent = () => {
    return(
        <section>
            <Image
            src={banner}
            alt="logotipo"
            width={800}
            height={800}
            className="w-full h-96"
          />
        </section>
    )
}

export default BannerComponent;