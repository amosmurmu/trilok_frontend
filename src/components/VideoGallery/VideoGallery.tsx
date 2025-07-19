
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";


interface VideoGalleryProps {
  title: string;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ title }) => {
  return (
    <section className="w-full py-12 bg-[#fbfbfb]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="font-extrabold text-[#032534] text-3xl md:text-[42px] font-['Mulish',Helvetica]">
            {title}
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-[54px] h-[54px] bg-[#1f8ccc] rounded-full flex items-center justify-center">
              <img
                className="w-8 h-8"
                alt="Instagram"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-79.svg"
              />
            </div>

            <div className="w-[54px] h-[54px]">
              <img
                className="w-full h-full"
                alt="YouTube"
                src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-3510.png"
              />
            </div>

            <Button className="bg-[#1f8ccc] text-white px-8 py-3 rounded-md text-2xl font-semibold font-['Mulish',Helvetica]">
              Explore More
            </Button>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="mx-[30px]">
            {/* First Instagram reel card */}
            <CarouselItem className="mx-[40px] md:basis-1/3 lg:basis-1/4">
              <Card className="w-full md:w-[375px] rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative aspect-[375/748]">
                    {/* Instagram UI */}
                    <div className="absolute inset-0 bg-gray-100 flex flex-col">
                      {/* Header */}
                      <div className="h-[40px] bg-white flex items-center justify-between px-4 border-b">
                        <img
                          className="w-[10px] h-[17px]"
                          alt="Back"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-55.svg"
                        />
                        <span className="font-semibold text-[#1a1a1a] text-base">Reels</span>
                        <img
                          className="w-6 h-[23px]"
                          alt="Camera"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-53.svg"
                        />
                      </div>

                      {/* Main content */}
                      <div className="flex-1 relative">
                        {/* Trilok Precast logo and text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 p-4">
                          <img
                            className="w-[120px] h-auto mb-6"
                            alt="Trilok Precast Logo"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/trilok-precast-logo.svg"
                          />
                          <h3 className="text-[#1f8ccc] text-4xl font-bold text-center mb-2">TRILOK PRECAST</h3>
                          <p className="text-[#032534] text-xs font-medium text-center uppercase mb-8">
                            SUPPLYING PREMIUM, CUSTOMIZED PRECAST DELIVERIES<br />
                            TO LARGE METRO CITIES
                          </p>
                        </div>

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[53px] h-[53px] bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                            <img
                              className="w-[30px] h-[30px]"
                              alt="Play"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/g7123.png"
                            />
                          </div>
                        </div>

                        {/* Like icon and count */}
                        <div className="absolute bottom-20 right-4 flex flex-col items-center">
                          <img
                            className="w-[25px] h-[23px] mb-1"
                            alt="Like"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-59.svg"
                          />
                          <span className="text-xs font-semibold">5000</span>
                        </div>

                        {/* Comment icon and count */}
                        <div className="absolute bottom-36 right-4 flex flex-col items-center">
                          <img
                            className="w-[27px] h-[26px] mb-1"
                            alt="Comment"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-52.svg"
                          />
                          <span className="text-xs font-semibold">6000</span>
                        </div>

                        {/* Share icon and count */}
                        <div className="absolute bottom-52 right-4 flex flex-col items-center">
                          <img
                            className="w-6 h-[21px] mb-1"
                            alt="Share"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-61.svg"
                          />
                          <span className="text-xs font-semibold">7000</span>
                        </div>

                        {/* Profile info */}
                        <div className="absolute bottom-4 left-4 flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            alt="Profile"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18.png"
                          />
                          <span className="text-xs font-semibold">TrilokPrecast</span>
                          <img
                            className="w-3 h-3 ml-1"
                            alt="Verified"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-64.svg"
                          />
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className="h-[50px] bg-white flex items-center justify-around">
                        <img
                          className="w-6 h-6"
                          alt="Home"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-6 h-6"
                          alt="Search"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-6 h-6"
                          alt="Add"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-6 h-6"
                          alt="Reels"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-6 h-6 rounded-full"
                          alt="Profile"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18.png"
                        />
                      </div>

                      {/* Home indicator */}
                      <div className="h-[34px] bg-white flex justify-center items-center">
                        <div className="w-[141px] h-[5px] bg-[#1a1a1a] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Second Instagram reel card */}
            <CarouselItem className="mx-[40px] md:basis-1/3 lg:basis-1/4">
              <Card className="w-full md:w-[375px] rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative aspect-[375/748]">
                    {/* Instagram UI */}
                    <div className="absolute inset-0 bg-gray-100 flex flex-col">
                      {/* Header */}
                      <div className="h-[40px] bg-white flex items-center justify-between px-4 border-b">
                        <img
                          className="w-[10px] h-[17px]"
                          alt="Back"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-55.svg"
                        />
                        <span className="font-semibold text-[#1a1a1a] text-base">Reels</span>
                        <img
                          className="w-6 h-[23px]"
                          alt="Camera"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-53.svg"
                        />
                      </div>

                      {/* Main content */}
                      <div className="flex-1 relative">
                        {/* Background image */}
                        <div className="absolute inset-0 bg-blue-100">
                          <img
                            className="w-full h-full object-cover"
                            alt="Precast wall"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/498187304-18278277277269245-2910590165873211584-n-1-1.png"
                          />
                        </div>

                        {/* Trilok Precast logo */}
                        <div className="absolute top-4 left-0 right-0 flex justify-center">
                          <img
                            className="w-[120px] h-auto"
                            alt="Trilok Precast Logo"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/trilok-precast-logo.svg"
                          />
                        </div>

                        {/* Stats text */}
                        <div className="absolute top-1/4 left-0 right-0 px-4">
                          <div className="text-[#1f8ccc] text-xl font-bold text-center">
                            FROM 6,500 RFT IN 2005 TO 30,000 RFT<br />
                            IN 2020 - AND AIMING FOR 415,000 RFT<br />
                            BY 2025!
                          </div>
                        </div>

                        {/* Blue stats banner */}
                        <div className="absolute top-1/2 left-0 right-0 bg-[#1f8ccc] py-2 flex justify-center">
                          <div className="text-white text-2xl font-bold">
                            110,000 RFT
                          </div>
                        </div>

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[53px] h-[53px] bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                            <img
                              className="w-[30px] h-[30px]"
                              alt="Play"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/g7123-1.png"
                            />
                          </div>
                        </div>

                        {/* Like icon and count */}
                        <div className="absolute bottom-20 right-4 flex flex-col items-center">
                          <img
                            className="w-[25px] h-[23px] mb-1"
                            alt="Like"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-59.svg"
                          />
                          <span className="text-xs font-semibold">5000</span>
                        </div>

                        {/* Comment icon and count */}
                        <div className="absolute bottom-36 right-4 flex flex-col items-center">
                          <img
                            className="w-[27px] h-[26px] mb-1"
                            alt="Comment"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-52.svg"
                          />
                          <span className="text-xs font-semibold">6000</span>
                        </div>

                        {/* Share icon and count */}
                        <div className="absolute bottom-52 right-4 flex flex-col items-center">
                          <img
                            className="w-6 h-[21px] mb-1"
                            alt="Share"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-61.svg"
                          />
                          <span className="text-xs font-semibold">7000</span>
                        </div>

                        {/* Profile info */}
                        <div className="absolute bottom-4 left-4 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                            <img
                              className="w-6 h-6"
                              alt="Profile"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18-1.png"
                            />
                          </div>
                          <span className="text-xs font-semibold">TrilokPrecast</span>
                          <img
                            className="w-3 h-3 ml-1"
                            alt="Verified"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-64.svg"
                          />
                          <button className="ml-auto text-xs font-semibold border border-gray-400 rounded px-2 py-0.5">
                            Follow
                          </button>
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className="h-[50px] bg-white flex items-center justify-around">
                        <img
                          className="w-6 h-6"
                          alt="Home"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-6 h-6"
                          alt="Search"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-6 h-6"
                          alt="Add"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-6 h-6"
                          alt="Reels"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-6 h-6 rounded-full"
                          alt="Profile"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18-1.png"
                        />
                      </div>

                      {/* Home indicator */}
                      <div className="h-[34px] bg-white flex justify-center items-center">
                        <div className="w-[141px] h-[5px] bg-[#1a1a1a] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* YouTube video card */}
            <CarouselItem className="mx-[40px] md:basis-1/3 lg:basis-1/4">
              <Card className="w-full md:w-[375px] rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative aspect-[375/748]">
                    {/* YouTube UI */}
                    <div className="absolute inset-0 bg-white flex flex-col">
                      {/* Status bar */}
                      <div className="h-[30px] bg-gray-100 flex items-center justify-between px-4">
                        <span className="text-xs font-medium">9:41</span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">●</span>
                          <span className="text-xs">●</span>
                          <span className="text-xs">●</span>
                        </div>
                      </div>

                      {/* Video player */}
                      <div className="relative h-[210px] bg-black">
                        <img
                          className="w-full h-full object-cover"
                          alt="Video thumbnail"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/video_gallery_flameshot.png"
                        />

                        {/* Video controls overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-red-600 border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>

                        {/* Video progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center px-2 bg-black bg-opacity-50">
                          <span className="text-white text-xs">7:15 / 12:00</span>
                          <div className="flex-1 mx-2 h-1 bg-gray-500 rounded-full">
                            <div className="w-3/5 h-full bg-red-600 rounded-full"></div>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-white text-xs">HD</span>
                            <span className="text-white text-xs">⚙</span>
                            <span className="text-white text-xs">⤢</span>
                          </div>
                        </div>
                      </div>

                      {/* Video info */}
                      <div className="p-3 border-b">
                        <h3 className="font-medium text-sm mb-1">Milestone Achieved! | @Jambusar GIDC</h3>
                        <div className="flex items-center text-xs text-gray-600">
                          <span>3,677 views</span>
                          <span className="mx-1">•</span>
                          <span>Premiered Jul 1, 2022</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex justify-between px-4 py-2 border-b">
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">👍</span>
                          <span className="text-xs">23.4K</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">👎</span>
                          <span className="text-xs">65</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">↗️</span>
                          <span className="text-xs">Share</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">⬇️</span>
                          <span className="text-xs">Download</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">💾</span>
                          <span className="text-xs">Save</span>
                        </div>
                      </div>

                      {/* Channel info */}
                      <div className="flex items-center justify-between p-3 border-b">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              alt="Channel"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/trilok-precast-logo.svg"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-sm">Trilok Group</div>
                            <div className="text-xs text-gray-600">289K subscribers</div>
                          </div>
                        </div>
                        <button className="bg-red-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                          SUBSCRIBE
                        </button>
                      </div>

                      {/* Comments section */}
                      <div className="p-3 border-b">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">Comments 149</span>
                          <span className="text-lg">↕️</span>
                        </div>
                        <div className="flex items-start mt-2">
                          <div className="w-8 h-8 rounded-full bg-green-500 mr-3 flex items-center justify-center text-white text-xs">
                            G
                          </div>
                          <div className="text-sm">Glad to attend this event 👍👍</div>
                        </div>
                      </div>

                      {/* Related videos */}
                      <div className="flex-1 overflow-auto">
                        <div className="p-3 border-b flex">
                          <div className="w-32 h-20 bg-gray-200 rounded mr-3 relative">
                            <img
                              className="w-full h-full object-cover rounded"
                              alt="Leaf"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/image-16-2.png"
                            />
                            <span className="absolute bottom-1 right-1 text-xs bg-black bg-opacity-70 text-white px-1 rounded">
                              3:14
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm mb-1">Heart Touching Nasheed #Shorts</h4>
                            <div className="text-xs text-gray-600">
                              <div>Trilok Precast</div>
                              <div>1.2M views • 2 months ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="left-[-27px] bg-transparent border-none shadow-none">
            <img
              className="w-[54px] h-[54px]"
              alt="Previous"
              src="https://c.animaapp.com/mda3wbuoE58tBx/img/component-25.svg"
            />
          </CarouselPrevious>

          <CarouselNext className="right-[-27px] bg-transparent border-none shadow-none">
            <img
              className="w-[54px] h-[54px]"
              alt="Next"
              src="https://c.animaapp.com/mda3wbuoE58tBx/img/handle-bar-5.svg"
            />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
