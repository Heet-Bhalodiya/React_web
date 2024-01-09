// Next Imports
import Image from "next/image";

type StoryType = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};

const storiesData = [
  {
    title: "In-app Stories",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna urna sit phasellus luctus viverra est. Tincidunt diam sit nam.",
    buttonText: "Learn More",
    imageUrl: "/images/iPhone 14 Pro.png",
  },
  {
    title: "In-app Stories",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna urna sit phasellus luctus viverra est. Tincidunt diam sit nam.",
    buttonText: "Learn More",
    imageUrl: "/images/iPhone 14 Pro-2.png",
  },
  {
    title: "In-app Stories",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna urna sit phasellus luctus viverra est. Tincidunt diam sit nam.",
    buttonText: "Learn More",
    imageUrl: "/images/google-browser.png",
  },
];

const StoryCard = ({ title, description, buttonText, imageUrl }: StoryType) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4">
      <Image
        className="w-full"
        width={100}
        height={100}
        src={imageUrl}
        alt="Story"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-6">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="bg-[#F8F9FA] py-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#081333] font-bold text-center mx-4 my-10">
        Share your message in a visualized, engaging way on a channel that will
        work best for you.
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {storiesData.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#081333] font-bold mx-4 my-10">
        Level up your brands, see massive growth, Get 4X better user
        engagement and increase sales.
      </h2>
    </div>
  );
};

export default Stories;
