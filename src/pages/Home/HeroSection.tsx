
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

      <div className="container relative h-full flex flex-col justify-end px-4 sm:px-6 lg:px-8 xl:ml-20 pb-16 sm:pb-24 lg:pb-36">
        {/* Main heading - responsive text sizes */}
        <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[62px] leading-tight mb-2 sm:mb-4 max-w-4xl">
          India&apos;s Fastest Precast Wall Builder
        </h1>

        {/* Subheading - responsive text sizes */}
        <h2 className="font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-normal mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
          From foundation to finish, we deliver strength that lasts.
        </h2>

        {/* Responsive button container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button className="bg-[#1f8ccc] hover:bg-[#1a7db8] text-white text-base sm:text-lg lg:text-2xl  font-semibold py-4 sm:py-6 lg:py-[30px] px-8 sm:px-16 lg:px-24 rounded-md h-auto w-full sm:w-auto">
            Get A Free Quote
          </Button>

          <Button
            variant="outline"
            className="bg-white text-[#1a1a1a] text-base sm:text-lg lg:text-2xl  font-semibold py-4 sm:py-6 lg:py-[30px] px-8 sm:px-16 lg:px-24 rounded-md h-auto border-2 border-[#1f8ccc] hover:bg-gray-50 w-full sm:w-auto"
          >
            Book Free Site Visit
          </Button>
        </div>
      </div>
    </section>
  )
}
