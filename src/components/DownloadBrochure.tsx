import { Button } from "./ui/button";

export const DownloadBrochure = () => {
  return (
    <section className="relative w-full bg-[#032534] py-12 overflow-hidden">
      <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-between">
        {/* Left side background image */}
        <img
          className="absolute left-0 h-[250px] w-auto max-w-none"
          alt="Decorative background"
          src="https://c.animaapp.com/mda3wbuoE58tBx/img/group.png"
        />

        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="font-['Mulish',Helvetica] font-semibold text-white text-[32px] mb-4">
            Want to Explore TRILOK Precast?
          </h2>

          <p className="font-['Mulish',Helvetica] font-semibold text-white text-[28px] leading-9 mb-8">
            Download Our Company Profile &amp; Product Brochure
          </p>

          <Button
            variant="outline"
            className="bg-white text-[#1a1a1a] text-2xl font-['Mulish',Helvetica] font-semibold px-8 py-3 rounded-md border-2 border-[#1f8ccc] hover:bg-gray-100"
          >
            Download Brochure
          </Button>
        </div>

        {/* Right side background image */}
        <img
          className="absolute right-0 h-[298px] w-auto max-w-none"
          alt="Decorative background"
          src="https://c.animaapp.com/mda3wbuoE58tBx/img/group-1.png"
        />
      </div>
    </section>
  );
};
