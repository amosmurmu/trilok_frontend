
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    id: '1',
    thumbnail: './homepage/shorts_1.svg',
    title: 'TRILOK PRECAST',
    views: '5000',
    likes: '8000',
    comments: '7000',
    shares: '6000',
  },
  {
    id: '2',
    thumbnail: './homepage/shorts_2.png',
    title: 'Company Growth',
    views: '6000',
    likes: '9000',
    comments: '8000',
    shares: '7000',
  },
  {
    id: '3',
    thumbnail: './homepage/shorts_3.png',
    title: 'Milestone Achieved',
    views: '7000',
    likes: '10000',
    comments: '9000',
    shares: '8000',
  },
];

const VideoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoShorts.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoShorts.length) % videoShorts.length);
  };

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
                <img className="w-6 h-6 md:w-8 md:h-8" alt="Instagram" src="./instagram.svg" />
              </div>
              <div className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]">
                <img className="w-full h-full" alt="YouTube" src="./homepage/group-3510.png" />
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Video container with navigation */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevVideo}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </button>

        {/* Single visible item */}
        <div className="w-full max-w-md mx-auto px-6">
          <div className="aspect-[9/16] bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow relative">
            <img
              src={videoShorts[currentIndex].thumbnail}
              alt={videoShorts[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-base mb-2">
                  {videoShorts[currentIndex].title}
                </h3>
                <div className="flex justify-between text-white/80 text-sm">
                  <span>{videoShorts[currentIndex].views} views</span>
                  <span>{videoShorts[currentIndex].likes} likes</span>
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

        <button
          onClick={nextVideo}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {videoShorts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-blue-500 scale-110'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
