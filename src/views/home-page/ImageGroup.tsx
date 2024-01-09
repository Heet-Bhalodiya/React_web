// Next Imports
import Image from "next/image";
import Image1 from "../../../public/images/image-group1.png";
import Image2 from "../../../public/images/image-group2.png";
import Image3 from "../../../public/images/image-group3.png";
import Image4 from "../../../public/images/image-group4.png";
import Image5 from "../../../public/images/image-group5.png";
import Image6 from "../../../public/images/image-group6.png";

const ImageGroup = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-12">
      <div className="relative col-span-1 lg:col-span-2">
        <Image
          src={Image1}
          alt="Move in your styles"
          layout="responsive"
          width={100}
          height={50}
        />
        <div className="absolute bottom-24 right-6">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Move in your styles</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 col-span-1">
        <div className="relative">
          <Image
            src={Image2}
            alt="Hurry Up! Sell starts soon"
            layout="responsive"
            width={100}
            height={50}
          />
          <div className="absolute top-6 right-12 text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-medium">Hurry Up!</h1>
            <p className="tracking-wide uppercase">Sell starts soon</p>
          </div>
        </div>
        <Image
          src={Image3}
          alt="Image"
          layout="responsive"
          width={100}
          height={50}
        />
      </div>
      <div className="relative col-span-1 lg:col-span-2">
        <Image
          src={Image4}
          alt="Super deal for you"
          layout="responsive"
          width={100}
          height={50}
        />
        <div className="absolute bottom-4 right-8">
          <p className="tracking-wide font-medium uppercase">Super deal for you</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 col-span-1">
        <div className="relative">
          <Image
            src={Image5}
            alt="New Products Arrive"
            layout="responsive"
            width={100}
            height={50}
          />
          <div className="absolute left-5 top-16 text-center">
            <p className="tracking-wide uppercase mb-6">New Products Arrive</p>
            <p className="tracking-wide uppercase font-medium">Place your order now</p>
          </div>
        </div>
        <Image
          src={Image6}
          alt="Image"
          layout="responsive"
          width={100}
          height={50}
        />
      </div>
    </div>
  );
};

export default ImageGroup;
