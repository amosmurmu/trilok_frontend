import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface VideoShort {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
}

const videoShorts: VideoShort[] = [
  {
    id: "1",
    thumbnail: "./homepage/shorts_1.svg",
    title: "TRILOK PRECAST",
    views: "5000",
    likes: "8000",
    comments: "7000",
    shares: "6000",
  },
  {
    id: "2",
    thumbnail: "./homepage/shorts_2.png",
    title: "Company Growth",
    views: "6000",
    likes: "9000",
    comments: "8000",
    shares: "7000",
  },
  {
    id: "3",
    thumbnail: "./homepage/shorts_3.png",
    title: "Milestone Achieved",
    views: "7000",
    likes: "10000",
    comments: "9000",
    shares: "8000",
  },
  {
    id: "4",
    thumbnail: "./homepage/shorts_1.svg",
    title: "TRILOK PRECAST 2",
    views: "5000",
    likes: "8000",
    comments: "7000",
    shares: "6000",
  },
];

const VideoGallery: React.FC = () => {
  return (
    <div className="w-full min-h-fit bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[140px] mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Video Gallery
          </h1>

          {/* Social icons and button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px] bg-[#1f8ccc] rounded-full flex items-center justify-center">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Instagram"
                  src="./instagram.svg"
                />
              </div>
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]">
                <img
                  className="w-full h-full"
                  alt="YouTube"
                  src="./homepage/group-3510.png"
                />
              </div>
            </div>
            <Button className="bg-[#1f8ccc] text-white hover:bg-[#1a7ab3] rounded-md px-8 py-3">
              Explore More
            </Button>
          </div>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {videoShorts.map((short, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="aspect-[9/16] bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow relative">
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-base mb-2">
                        {short.title}
                      </h3>
                      <div className="flex justify-between text-white/80 text-sm">
                        <span>{short.views} views</span>
                        <span>{short.likes} likes</span>
                      </div>
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default VideoGallery;
