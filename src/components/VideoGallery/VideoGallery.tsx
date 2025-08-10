import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

interface VideoGalleryProps {
  title: string;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ title }) => {
  return (
    <section className="w-full py-6 md:py-12 bg-[#fbfbfb]">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header section - stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 md:mb-8 gap-4">
          <h2 className="font-extrabold text-[#032534] text-2xl md:text-3xl lg:text-[42px]  text-center lg:text-left">
            {title}
          </h2>

          {/* Social icons and button - centered on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3 sm:gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px] bg-[#1f8ccc] rounded-full flex items-center justify-center">
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="Instagram"
                  src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-79.svg"
                />
              </div>
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]">
                <img
                  className="w-full h-full"
                  alt="YouTube"
                  src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-3510.png"
                />
              </div>
            </div>

            {/* Explore button */}
            <Button className="bg-[#1f8ccc] text-white cursor-pointer px-4 md:px-8 py-2 md:py-3 rounded-md text-base md:text-xl lg:text-2xl font-semibold  whitespace-nowrap">
              Explore More
            </Button>
          </div>
        </div>

        {/* Carousel with responsive spacing */}
        <Carousel className="w-full">
          <CarouselContent className="ml-2 md:mx-auto px-2 lg:justify-center">
            {/* First Instagram reel card */}
            <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="w-full max-w-[320px] md:max-w-[375px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative aspect-[320/640] md:aspect-[375/748]">
                    {/* Instagram UI */}
                    <div className="absolute inset-0 bg-gray-100 flex flex-col">
                      {/* Header */}
                      <div className="h-[35px] md:h-[40px] bg-white flex items-center justify-between px-3 md:px-4 border-b">
                        <img
                          className="w-[8px] md:w-[10px] h-[14px] md:h-[17px]"
                          alt="Back"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-55.svg"
                        />
                        <span className="font-semibold text-[#1a1a1a] text-sm md:text-base">
                          Reels
                        </span>
                        <img
                          className="w-5 md:w-6 h-[20px] md:h-[23px]"
                          alt="Camera"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-53.svg"
                        />
                      </div>
                      {/* Main content */}
                      <div className="flex-1 relative">
                        {/* Trilok Precast logo and text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 p-3 md:p-4">
                          <img
                            className="w-[80px] md:w-[120px] h-auto mb-4 md:mb-6"
                            alt="Trilok Precast Logo"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/trilok-precast-logo.svg"
                          />
                          <h3 className="text-[#1f8ccc] text-2xl md:text-4xl font-bold text-center mb-1 md:mb-2">
                            TRILOK PRECAST
                          </h3>
                          <p className="text-[#032534] text-[10px] md:text-xs font-medium text-center uppercase mb-6 md:mb-8 leading-tight">
                            SUPPLYING PREMIUM, CUSTOMIZED PRECAST DELIVERIES
                            <br />
                            TO LARGE METRO CITIES
                          </p>
                        </div>
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[40px] h-[40px] md:w-[53px] md:h-[53px] bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                            <img
                              className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                              alt="Play"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/g7123.png"
                            />
                          </div>
                        </div>
                        {/* Social interaction icons */}
                        <div className="absolute bottom-16 md:bottom-20 right-3 md:right-4 flex flex-col items-center space-y-3 md:space-y-4">
                          {/* Like */}
                          <div className="flex flex-col items-center">
                            <img
                              className="w-[20px] md:w-[25px] h-[18px] md:h-[23px] mb-1"
                              alt="Like"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-59.svg"
                            />
                            <span className="text-[10px] md:text-xs font-semibold">
                              5000
                            </span>
                          </div>
                          {/* Comment */}
                          <div className="flex flex-col items-center">
                            <img
                              className="w-[22px] md:w-[27px] h-[21px] md:h-[26px] mb-1"
                              alt="Comment"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-52.svg"
                            />
                            <span className="text-[10px] md:text-xs font-semibold">
                              6000
                            </span>
                          </div>
                          {/* Share */}
                          <div className="flex flex-col items-center">
                            <img
                              className="w-5 md:w-6 h-[17px] md:h-[21px] mb-1"
                              alt="Share"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-61.svg"
                            />
                            <span className="text-[10px] md:text-xs font-semibold">
                              7000
                            </span>
                          </div>
                        </div>
                        {/* Profile info */}
                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex items-center">
                          <img
                            className="w-6 md:w-8 h-6 md:h-8 rounded-full mr-2"
                            alt="Profile"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18.png"
                          />
                          <span className="text-[10px] md:text-xs font-semibold">
                            TrilokPrecast
                          </span>
                          <img
                            className="w-2.5 md:w-3 h-2.5 md:h-3 ml-1"
                            alt="Verified"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-64.svg"
                          />
                        </div>
                      </div>
                      {/* Bottom navigation */}
                      <div className="h-[40px] md:h-[50px] bg-white flex items-center justify-around">
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Home"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Search"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Add"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Reels"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar-1.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6 rounded-full"
                          alt="Profile"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18.png"
                        />
                      </div>
                      {/* Home indicator */}
                      <div className="h-[28px] md:h-[34px] bg-white flex justify-center items-center">
                        <div className="w-[120px] md:w-[141px] h-[4px] md:h-[5px] bg-[#1a1a1a] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* Second Instagram reel card */}
            <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="w-full max-w-[320px] md:max-w-[375px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative aspect-[320/640] md:aspect-[375/748]">
                    {/* Instagram UI */}
                    <div className="absolute inset-0 bg-gray-100 flex flex-col">
                      {/* Header */}
                      <div className="h-[35px] md:h-[40px] bg-white flex items-center justify-between px-3 md:px-4 border-b">
                        <img
                          className="w-[8px] md:w-[10px] h-[14px] md:h-[17px]"
                          alt="Back"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-55.svg"
                        />
                        <span className="font-semibold text-[#1a1a1a] text-sm md:text-base">
                          Reels
                        </span>
                        <img
                          className="w-5 md:w-6 h-[20px] md:h-[23px]"
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
                        <div className="absolute top-3 md:top-4 left-0 right-0 flex justify-center">
                          <img
                            className="w-[80px] md:w-[120px] h-auto"
                            alt="Trilok Precast Logo"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/trilok-precast-logo.svg"
                          />
                        </div>
                        {/* Stats text */}
                        <div className="absolute top-1/4 left-0 right-0 px-3 md:px-4">
                          <div className="text-[#1f8ccc] text-sm md:text-xl font-bold text-center leading-tight">
                            FROM 6,500 RFT IN 2005 TO 30,000 RFT
                            <br />
                            IN 2020 - AND AIMING FOR 415,000 RFT
                            <br />
                            BY 2025!
                          </div>
                        </div>
                        {/* Blue stats banner */}
                        <div className="absolute top-1/2 left-0 right-0 bg-[#1f8ccc] py-1.5 md:py-2 flex justify-center">
                          <div className="text-white text-lg md:text-2xl font-bold">
                            110,000 RFT
                          </div>
                        </div>
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[40px] h-[40px] md:w-[53px] md:h-[53px] bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                            <img
                              className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                              alt="Play"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/g7123-1.png"
                            />
                          </div>
                        </div>
                        {/* Social interaction icons */}
                        <div className="absolute bottom-16 md:bottom-20 right-3 md:right-4 flex flex-col items-center space-y-3 md:space-y-4">
                          {/* Like */}
                          <div className="flex flex-col items-center">
                            <img
                              className="w-[20px] md:w-[25px] h-[18px] md:h-[23px] mb-1"
                              alt="Like"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-59.svg"
                            />
                            <span className="text-[10px] md:text-xs font-semibold">
                              5000
                            </span>
                          </div>
                          {/* Comment */}
                          <div className="flex flex-col items-center">
                            <img
                              className="w-[22px] md:w-[27px] h-[21px] md:h-[26px] mb-1"
                              alt="Comment"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-52.svg"
                            />
                            <span className="text-[10px] md:text-xs font-semibold">
                              6000
                            </span>
                          </div>
                          {/* Share */}
                          <div className="flex flex-col items-center">
                            <img
                              className="w-5 md:w-6 h-[17px] md:h-[21px] mb-1"
                              alt="Share"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-61.svg"
                            />
                            <span className="text-[10px] md:text-xs font-semibold">
                              7000
                            </span>
                          </div>
                        </div>
                        {/* Profile info */}
                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex items-center">
                          <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white flex items-center justify-center mr-2">
                            <img
                              className="w-4 md:w-6 h-4 md:h-6"
                              alt="Profile"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18-1.png"
                            />
                          </div>
                          <span className="text-[10px] md:text-xs font-semibold">
                            TrilokPrecast
                          </span>
                          <img
                            className="w-2.5 md:w-3 h-2.5 md:h-3 ml-1"
                            alt="Verified"
                            src="https://c.animaapp.com/mda3wbuoE58tBx/img/vector-64.svg"
                          />
                          <button className="ml-auto text-[10px] md:text-xs font-semibold border border-gray-400 rounded px-1.5 md:px-2 py-0.5">
                            Follow
                          </button>
                        </div>
                      </div>
                      {/* Bottom navigation */}
                      <div className="h-[40px] md:h-[50px] bg-white flex items-center justify-around">
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Home"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Search"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Add"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6"
                          alt="Reels"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/bottombar.svg"
                        />
                        <img
                          className="w-5 md:w-6 h-5 md:h-6 rounded-full"
                          alt="Profile"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-18-1.png"
                        />
                      </div>
                      {/* Home indicator */}
                      <div className="h-[28px] md:h-[34px] bg-white flex justify-center items-center">
                        <div className="w-[120px] md:w-[141px] h-[4px] md:h-[5px] bg-[#1a1a1a] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            {/* YouTube video card */}
            <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="w-full max-w-[320px] md:max-w-[375px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-solid border-[#032534] shadow-[0px_0px_24px_#0000001a]">
                <CardContent className="p-0">
                  <div className="relative aspect-[320/640] md:aspect-[375/748]">
                    {/* YouTube UI */}
                    <div className="absolute inset-0 bg-white flex flex-col text-xs md:text-sm">
                      {/* Status bar */}
                      <div className="h-[25px] md:h-[30px] bg-gray-100 flex items-center justify-between px-3 md:px-4">
                        <span className="text-[10px] md:text-xs font-medium">
                          9:41
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] md:text-xs">●</span>
                          <span className="text-[10px] md:text-xs">●</span>
                          <span className="text-[10px] md:text-xs">●</span>
                        </div>
                      </div>
                      {/* Video player */}
                      <div className="relative h-[170px] md:h-[210px] bg-black">
                        <img
                          className="w-full h-full object-cover"
                          alt="Video thumbnail"
                          src="https://c.animaapp.com/mda3wbuoE58tBx/img/video_gallery_flameshot.png"
                        />
                        {/* Video controls overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 md:w-12 h-10 md:h-12 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[12px] md:border-l-[16px] border-l-red-600 border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                        {/* Video progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-5 md:h-6 flex items-center px-2 bg-black bg-opacity-50">
                          <span className="text-white text-[10px] md:text-xs">
                            7:15 / 12:00
                          </span>
                          <div className="flex-1 mx-2 h-1 bg-gray-500 rounded-full">
                            <div className="w-3/5 h-full bg-red-600 rounded-full"></div>
                          </div>
                          <div className="flex gap-1.5 md:gap-2">
                            <span className="text-white text-[10px] md:text-xs">
                              HD
                            </span>
                            <span className="text-white text-[10px] md:text-xs">
                              ⚙
                            </span>
                            <span className="text-white text-[10px] md:text-xs">
                              ⤢
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Video info */}
                      <div className="p-2 md:p-3 border-b">
                        <h3 className="font-medium text-xs md:text-sm mb-1">
                          Milestone Achieved! | @Jambusar GIDC
                        </h3>
                        <div className="flex items-center text-[10px] md:text-xs text-gray-600">
                          <span>3,677 views</span>
                          <span className="mx-1">•</span>
                          <span>Premiered Jul 1, 2022</span>
                        </div>
                      </div>
                      {/* Action buttons */}
                      <div className="flex justify-between px-3 md:px-4 py-1.5 md:py-2 border-b">
                        <div className="flex flex-col items-center">
                          <span className="text-lg md:text-2xl">👍</span>
                          <span className="text-[10px] md:text-xs">23.4K</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-lg md:text-2xl">👎</span>
                          <span className="text-[10px] md:text-xs">65</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-lg md:text-2xl">↗️</span>
                          <span className="text-[10px] md:text-xs">Share</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-lg md:text-2xl">⬇️</span>
                          <span className="text-[10px] md:text-xs">
                            Download
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-lg md:text-2xl">💾</span>
                          <span className="text-[10px] md:text-xs">Save</span>
                        </div>
                      </div>
                      {/* Channel info */}
                      <div className="flex items-center justify-between p-2 md:p-3 border-b">
                        <div className="flex items-center">
                          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-200 mr-2 md:mr-3 overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              alt="Channel"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/trilok-precast-logo.svg"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-xs md:text-sm">
                              Trilok Group
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-600">
                              289K subscribers
                            </div>
                          </div>
                        </div>
                        <button className="bg-red-600 text-white text-[10px] md:text-sm font-medium px-3 md:px-4 py-1 rounded-full">
                          SUBSCRIBE
                        </button>
                      </div>
                      {/* Comments section */}
                      <div className="p-2 md:p-3 border-b">
                        <div className="flex items-center justify-between mb-1 md:mb-2">
                          <span className="font-medium text-xs md:text-sm">
                            Comments 149
                          </span>
                          <span className="text-sm md:text-lg">↕️</span>
                        </div>
                        <div className="flex items-start mt-1 md:mt-2">
                          <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-green-500 mr-2 md:mr-3 flex items-center justify-center text-white text-[10px] md:text-xs">
                            G
                          </div>
                          <div className="text-xs md:text-sm">
                            Glad to attend this event 👍👍
                          </div>
                        </div>
                      </div>
                      {/* Related videos */}
                      <div className="flex-1 overflow-auto">
                        <div className="p-2 md:p-3 border-b flex">
                          <div className="w-24 md:w-32 h-16 md:h-20 bg-gray-200 rounded mr-2 md:mr-3 relative flex-shrink-0">
                            <img
                              className="w-full h-full object-cover rounded"
                              alt="Leaf"
                              src="https://c.animaapp.com/mda3wbuoE58tBx/img/image-16-2.png"
                            />
                            <span className="absolute bottom-1 right-1 text-[9px] md:text-xs bg-black bg-opacity-70 text-white px-1 rounded">
                              3:14
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-xs md:text-sm mb-1 leading-tight">
                              Heart Touching Nasheed #Shorts
                            </h4>
                            <div className="text-[10px] md:text-xs text-gray-600">
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

          {/* Carousel navigation with responsive positioning */}
          <CarouselPrevious className="left-[-20px] md:left-[-27px] bg-transparent border-none shadow-none">
            <img
              className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
              alt="Previous"
              src="https://c.animaapp.com/mda3wbuoE58tBx/img/component-25.svg"
            />
          </CarouselPrevious>
          <CarouselNext className="right-[-20px] md:right-[-27px] bg-transparent border-none shadow-none">
            <img
              className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
              alt="Next"
              src="https://c.animaapp.com/mda3wbuoE58tBx/img/handle-bar-5.svg"
            />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
