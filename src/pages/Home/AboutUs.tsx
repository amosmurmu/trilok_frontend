import { Button } from "@/components/ui/button";

export function AboutUs() {
  return (

    <section className="relative w-full bg-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="font-['Mulish',Helvetica] font-extrabold text-[#032534] text-4xl lg:text-[42px] leading-tight mb-8">
              Who We Are - Trilok Precast Pvt. Ltd.
            </h2>

            <div className="space-y-8 max-w-3xl">
              <p className="font-['Mulish',Helvetica] text-xl text-justify leading-[30px]">
                <span className="font-extrabold text-[#1f8ccc]">
                  Trilok Precast Pvt. Ltd.{" "}
                </span>
                <span className="font-semibold text-[#1a1a1a]">
                  stands among India&apos;s most trusted, experienced, and
                  fast-growing enterprises in the{" "}
                </span>
                <span className="font-bold text-[#1f8ccc]">
                  precast concrete manufacturing space
                </span>
                <span className="font-semibold text-[#1a1a1a]">
                  , redefining how modern infrastructure is envisioned and
                  executed. With a stronghold across residential, industrial,
                  and government sectors, our name is synonymous with structural
                  reliability, timely execution, and technological advancement
                </span>
              </p>

              <p className="font-['Mulish',Helvetica] text-xl text-justify leading-[30px]">
                <span className="font-semibold text-[#1a1a1a]">
                  Established in the year{" "}
                </span>
                <span className="font-bold text-[#1f8ccc]">
                  2005 in Surat, Gujarat
                </span>
                <span className="font-semibold text-[#1a1a1a]">
                  , Trilok Precast was born out of a clear mission:{" "}
                </span>
                <span className="font-bold text-[#1f8ccc]">
                  To introduce smart, scalable, and durable construction
                  solutions that reduce timelines, elevate quality, and
                  modernize India&#39;s infrastructure approach.
                </span>
              </p>

              <Button className="bg-[#1f8ccc] text-white font-semibold text-xl py-6 px-12 rounded-md w-fit hover:bg-[#1a7ab3] transition-colors">
                Learn More
              </Button>
            </div>
          </div>
          <img src="./homepage/map.svg">
          </img>
        </div>
      </div>
    </section >
  )
}


