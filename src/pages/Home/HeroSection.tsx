
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative w-full h-[100vh] min-h-[600px] max-h-[900px] bg-cover bg-center"
      style={{
        backgroundImage: `url('./homepage/bg_hero.png')`
      }}
    >
      {/* Responsive rectangle background shape */}
      <img
        className="absolute hidden lg:block bottom-[10px] sm:bottom-[15px] md:bottom-[18px] lg:bottom-[80px] left-0 object-cover"
        alt="Rectangle background shape"
        src="./rectangle_cutout.svg"
        style={{ aspectRatio: '1373/230' }}
      />

      {/* Main content */}
      <div className="absolute inset-0 flex items-end justify-center lg:justify-start px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-36 top-12">
        <div className="relative left-[180px] w-full max-w-screen-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Heading */}
          <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight mb-1 sm:mb-2 lg:mb-3 max-w-3xl">
            India&apos;s Fastest Precast Wall Builder
          </h1>

          {/* Subheading */}
          <h2 className="font-medium text-white text-lg sm:text-base md:text-lg lg:text-[24px] leading-normal mb-4 sm:mb-5 lg:mb-6 max-w-2xl">
            From foundation to finish, we deliver strength that lasts.
          </h2>

          {/* Button group */}
          <div className="absolute -bottom-26 flex sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              className="bg-[#1f8ccc] hover:bg-[#1a7db8] text-white text-base sm:text-lg lg:text-2xl font-semibold py-2 sm:py-2 lg:px-11 lg:py-9 px-8 sm:px-8 rounded-md sm:w-auto"
            >
              Get A Free Quote
            </Button>

            <Button
              variant="outline"
              // className="bg-white text-[#1a1a1a] text-base sm:text-lg lg:text-2xl font-semibold py-2 sm:py-6 lg:py-[30px] px-8 sm:px-16 lg:px-24 rounded-md h-auto border-2 border-[#1f8ccc] hover:bg-gray-50 w-full sm:w-auto"
              className="bg-white text-[#1a1a1a] text-base sm:text-lg lg:text-2xl font-semibold py-2 sm:py-2 lg:px-11 lg:py-9 px-8 sm:px-8 rounded-md sm:w-auto"
            >
              Book Free Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
