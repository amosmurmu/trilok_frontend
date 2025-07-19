import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { motion } from "motion/react";

interface VideoCardProps {
  id: number;
  backgroundImage: string;
  profileImage: string;
  playButtonImage: string;
  isDarkOverlay: boolean;
  textColor: string;
  borderColor: string;
  username: string;
  description: string;
  soundTitle: string;
  likes: string;
  comments: string;
  shares: string;
}

interface VideoGalleryProps {
  title: string;
  videos: VideoCardProps[];
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ title, videos }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const activeIndex = 0;
  return (
    <section className="w-full py-12 bg-[#fbfbfb]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="font-extrabold text-[#032534] text-3xl md:text-[42px] font-['Mulish',Helvetica]">
            {title}
          </h2>

          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[54px] h-[54px] bg-[#1f8ccc] rounded-full flex items-center justify-center cursor-pointer"
            >
              <div className="w-8 h-8 bg-[url(https://c.animaapp.com/mda3wbuoE58tBx/img/vector-79.svg)] bg-[100%_100%]" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[54px] h-[54px] cursor-pointer"
            >
              <img
                className="w-full h-full"
                alt="Group"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-3510.png"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#1f8ccc] text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-xl md:text-2xl font-semibold font-['Mulish',Helvetica]">
                Explore More
              </Button>
            </motion.div>
          </div>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onSelect={() => {
            // const selectedIndex = api.selectedScrollSnap();
            // setActiveIndex(selectedIndex);
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={video.id}
                className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="w-full md:w-[375px] h-[650px] md:h-[748px] rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                    <CardContent className="p-0 relative h-full">
                      {/* Video background */}
                      <div
                        className="absolute w-full h-[531px] md:h-[631px] top-[37px] left-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${video.backgroundImage})`,
                        }}
                      />

                      {/* Dark overlay */}
                      {video.isDarkOverlay && (
                        <div className="absolute w-full h-full top-0 left-0 bg-[#1a1a1a33]" />
                      )}

                      {/* Top navigation */}
                      <div className="flex w-full items-center justify-center gap-[134px] pt-4 pb-0 px-4 absolute top-0 left-0 z-10">
                        <img
                          className="w-[9.91px] h-[17px]"
                          alt="Back"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-55.svg"
                        />
                        <div className="font-semibold text-[#1a1a1a] text-base whitespace-nowrap">
                          Reels
                        </div>
                        <img
                          className="w-6 h-[23px]"
                          alt="Camera"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-53.svg"
                        />
                      </div>

                      {/* Play button */}
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute w-[53px] h-[53px] top-[378px] left-0 right-0 mx-auto z-10 cursor-pointer"
                        alt="Play"
                        src={video.playButtonImage}
                      />

                      {/* Bottom content */}
                      <div className="flex flex-col w-full items-start absolute bottom-0 left-0 z-10">
                        <div className="flex items-end gap-3.5 p-4 w-full">
                          <div className="flex flex-col items-start gap-3.5 flex-1">
                            {/* User info and follow button */}
                            <div className="flex flex-col items-start justify-end gap-3 w-full">
                              <div className="flex items-center gap-2.5 w-full">
                                <img
                                  className="w-8 h-8"
                                  alt="Profile"
                                  src={video.profileImage}
                                />
                                <div
                                  className={`font-semibold text-${video.textColor} text-xs`}
                                >
                                  {video.username}
                                </div>
                                <img
                                  className="w-[12.51px] h-3"
                                  alt="Verified"
                                  src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-64.svg"
                                />
                                <Badge
                                  variant="outline"
                                  className={`ml-auto border-${video.borderColor} rounded-md`}
                                >
                                  <span
                                    className={`font-semibold text-${video.textColor} text-sm`}
                                  >
                                    Follow
                                  </span>
                                </Badge>
                              </div>

                              {/* Video description */}
                              <p
                                className={`text-${video.textColor} text-sm tracking-[-0.14px]`}
                              >
                                {video.description}
                              </p>
                            </div>

                            {/* Sound tag */}
                            <div className="flex items-start gap-1.5 w-full">
                              <div
                                className={`flex h-[26px] items-center gap-2 px-2.5 py-1.5 flex-1 bg-[#00000026] rounded-[26px] border border-solid border-${video.borderColor}`}
                              >
                                <img
                                  className="w-2.5 h-[10.5px]"
                                  alt="Sound"
                                  src="https://c.animaapp.com/mda3wbuoE58tBx/img/union.svg"
                                />
                                <div
                                  className={`flex-1 font-normal text-${video.textColor} text-xs`}
                                >
                                  {video.soundTitle}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Engagement metrics */}
                          <div className="flex flex-col w-[30px] items-center gap-7">
                            <div className="flex flex-col items-center gap-[30px]">
                              <div className="flex flex-col items-start gap-[23px]">
                                {/* Like button */}
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="flex flex-col items-center gap-3 cursor-pointer"
                                >
                                  <img
                                    className="w-[25px] h-[23px]"
                                    alt="Like"
                                    src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-59.svg"
                                  />
                                  <div className="font-semibold text-[#1a1a1a] text-xs text-center tracking-[-0.24px]">
                                    {video.likes}
                                  </div>
                                </motion.div>

                                {/* Comment button */}
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="flex flex-col items-center gap-3 cursor-pointer"
                                >
                                  <img
                                    className="w-[27px] h-[26px]"
                                    alt="Comment"
                                    src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-52.svg"
                                  />
                                  <div className="font-semibold text-[#1a1a1a] text-xs text-center tracking-[-0.24px]">
                                    {video.comments}
                                  </div>
                                </motion.div>

                                {/* Share button */}
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="flex flex-col items-center gap-3 cursor-pointer"
                                >
                                  <img
                                    className="w-6 h-[21px]"
                                    alt="Share"
                                    src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-61.svg"
                                  />
                                  <div className="font-semibold text-[#1a1a1a] text-xs text-center tracking-[-0.24px]">
                                    {video.shares}
                                  </div>
                                </motion.div>
                              </div>

                              {/* More options */}
                              <div className="relative w-[15px] h-[3px] cursor-pointer">
                                <div className="absolute w-[3px] h-[3px] top-0 left-3 bg-[#1a1a1a] rounded-[1.5px]" />
                                <div className="absolute w-[3px] h-[3px] top-0 left-1.5 bg-[#1a1a1a] rounded-[1.5px]" />
                                <div className="absolute w-[3px] h-[3px] top-0 left-0 bg-[#1a1a1a] rounded-[1.5px]" />
                              </div>
                            </div>

                            {/* Music icon */}
                            <motion.img
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                              className="w-[34px] h-[34px] cursor-pointer"
                              alt="Music"
                              src={
                                video.id === 1
                                  ? "https://c.animaapp.com/mda3wbuoE58tBx/img/music-1.svg"
                                  : "https://c.animaapp.com/mda3wbuoE58tBx/img/music.svg"
                              }
                            />
                          </div>
                        </div>

                        {/* Bottom bar */}
                        <img
                          className="h-12 w-full"
                          alt="Bottom bar"
                          src={
                            video.id === 1
                              ? "https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                              : "https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                          }
                        />

                        {/* Home indicator */}
                        <div className="flex flex-col items-center gap-[27px] pt-5 pb-[7px] px-3.5 bg-white w-full">
                          <div className="w-[141px] h-[5px] bg-[#1a1a1a] rounded-[5px]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}

            {/* View more card */}
            <CarouselItem className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: videos.length * 0.1 }}
              >
                <Card className="w-full md:w-[408px] h-[650px] md:h-[796px] border-none shadow-none">
                  <CardContent className="p-0">
                    <img
                      className="w-full h-full object-contain"
                      alt="View"
                      src="https://c.animaapp.com/mda3wbuoE58tBx/img/view-.png"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-[-27px] bg-transparent border-none shadow-none">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[54px] h-[54px]"
                alt="Previous"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/component-25.svg"
              />
            </CarouselPrevious>

            <CarouselNext className="right-[-27px] bg-transparent border-none shadow-none">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[54px] h-[54px]"
                alt="Next"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/handle-bar-5.svg"
              />
            </CarouselNext>
          </div>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-[#1f8ccc]' : 'bg-gray-300'}`}
              />
            ))}
            <div
              className={`w-2 h-2 rounded-full ${activeIndex === videos.length ? 'bg-[#1f8ccc]' : 'bg-gray-300'}`}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
