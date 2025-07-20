import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-extrabold text-[#032534] text-[42px] leading-[62px]">
            Company Profile
          </h2>
        </div>

        <Card className="border-none shadow-none">
          <CardContent className="p-0 space-y-6">
            <p className="font-normal  text-[#1a1a1a] text-xl text-justify leading-[30px]">
              Welcome to Trilok Precast, where innovation meets reliability in
              the realm of RCC precast prestress compound walls and other
              precast products. Since our establishment in 2005, we have
              consistently delivered excellence, earning a reputation as a
              leading manufacturer in the Cement Product Industry.
            </p>

            <p className="font-normal text-[#1a1a1a] text-xl text-justify leading-[30px]">
              At Trilok Precast, our commitment extends beyond mere production.
              We are dedicated to providing high-quality products and services,
              all while upholding our responsibility to the environment. Our
              ethos revolves around achieving the zenith level of quality,
              meeting the diverse needs of our customers and employees, and
              actively adding value to the community we serve.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
