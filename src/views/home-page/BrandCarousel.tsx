// Next Imports
import Image from "next/image";
import BrandCarousel from "../../../public/images/brand-carousel1.png";
import BrandCarouse2 from "../../../public/images/brand-carousel2.png";
import BrandCarouse3 from "../../../public/images/brand-carousel3.png";
import BrandCarouse4 from "../../../public/images/brand-carousel4.png";

const Footer = () => {
  const brandImage = [BrandCarousel, BrandCarouse2, BrandCarouse3];
  const numberOfRepetitions = 3;

  return (
    <div className="flex flex-wrap justify-center gap-y-4">
      {[...Array(numberOfRepetitions)].map((_, repetitionIndex) => (
        <div
          key={`set-${repetitionIndex}`}
          className="flex gap-4 md:gap-8 lg:gap-16 justify-center w-full"
        >
          {brandImage.map((image, index) => (
            <div key={`image-${repetitionIndex}-${index}`} className="flex-shrink-0">
              <Image
                src={image}
                alt={`Brand Name ${index + 1}`}
                width={86}
                height={21}
                layout="fixed"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
