import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CallToActionSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-[#032534] py-12 overflow-hidden">
      <div className="container relative mx-auto px-4">
        {/* Background decorative images */}
        <img
          className="absolute w-auto h-[280px] bottom-0 left-0"
          alt="Decorative background"
          src="./homepage/group_1.png"
        />

        <img
          className="absolute w-auto h-[334px] top-0 right-0"
          alt="Decorative background"
          src="./homepage/group_2.png"
        />

        {/* Content container */}
        <div className="flex flex-col items-center justify-center text-center relative z-10 max-w-4xl mx-auto">
          <h2 className=" font-semibold text-white text-[32px] mb-6">
            Ready to Secure Your Space with Strength &amp; Style?
          </h2>

          <p className="font-semibold text-white text-[18px] leading-9 mb-10">
            Let&apos;s build your boundary with durable, fast-installing precast
            walls tailored to your needs.
            <br />
            Contact us today for expert guidance, pricing, and quick
            installation support.
          </p>

          <Button
            onClick={() => {
              navigate("/contact")
            }}
            variant="outline"
            className="bg-white text-[#1a1a1a] text-2xl font-semibold px-8 py-6 rounded-md border-2 border-[#1f8ccc] hover:bg-[#f8f8f8]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
