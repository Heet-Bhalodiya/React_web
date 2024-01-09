// Component Imports
import ImageGroup from "./ImageGroup";
import BrandCarousel from "./BrandCarousel";
import Stories from "./Stories";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 mb-16">
        <div className="flex flex-col items-center text-center gap-6">
          <button className="bg-[#275FFF33] text-[#275FFF] py-2 px-4">
            Web Stories
          </button>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-snug lg:leading-[92px]">
            Onboard new users with in-app stories, excite your buyers with new products
          </h1>
          <div>
            <p className="text-lg md:text-xl lg:text-[22px] text-[#838999] leading-snug md:leading-relaxed lg:leading-[36px]">
              Stories on Your Website & In Your App. Google Stories. Landing Pages. Distributed ANYWHERE.
            </p>
            <p className="text-lg md:text-xl lg:text-[22px] text-[#838999] leading-snug md:leading-relaxed lg:leading-[36px]">
              Excite your audience with dynamic & personalized stories, share stories via link, embeds or QR code, and track the performance - all in one powerful tool.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 my-8">
          <button className="bg-[#275FFF] text-white px-8 py-2">
            Join for Free
          </button>
          <button className="border border-black px-8 py-2">
            View Pricing
          </button>
        </div>
        <ImageGroup />
      </div>
      <div className="mb-32">
        <BrandCarousel />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <Stories />
      </div>
    </>
  );
};

export default HomePage;
