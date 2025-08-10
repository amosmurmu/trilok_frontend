import { Button } from "./ui/button";

export const DownloadBrochure = () => {
  return (
    <section className="relative w-full bg-[#032534] py-12 overflow-hidden">
      <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-between">
        {/* Left side background image */}
        <img
          className="absolute left-0 h-[250px] w-auto max-w-none"
          alt="Decorative background"
          src="./homepage/group_1.png"
        />

        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className=" font-semibold text-white text-[32px] mb-4">
            Want to Explore TRILOK Precast?
          </h2>

          <p className="font-semibold text-white text-[24px] leading-9 mb-8">
            Download Our Company Profile &amp; Product Brochure
          </p>

          <Button
            variant="outline"
            className="bg-white text-[#1a1a1a] text-2xl cursor-pointer font-semibold px-8 py-6 rounded-md border-2 border-[#1f8ccc] hover:bg-gray-100"
          >
            Download Brochure
          </Button>
        </div>

        {/* Right side background image */}
        <img
          className="absolute right-0 h-[298px] w-auto max-w-none"
          alt="Decorative background"
          src="./homepage/group_2.png"
        />
      </div>
    </section>
  );
};
