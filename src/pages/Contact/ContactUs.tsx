
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const ContactUsSection = () => {
  // Form field data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-[#1f8ccc]" />,
      text: "401, Vikas Shopper, Vraj Chowk Road, Sarthana Jakatnaka, Surat-395006",
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-[#1f8ccc]" />,
      text: "+91 58565 48526",
    },
    {
      icon: <MailIcon className="w-6 h-6 text-[#1f8ccc]" />,
      text: "trilokwall@gmail.com",
    },
  ];

  return (
    <section className="relative w-full bg-white rounded-3xl overflow-hidden py-12">
      <div className="flex flex-col items-center mb-6">
        <h2 className="font-extrabold text-[#1f8ccc] text-[42px] text-center tracking-[0] leading-10">
          Have inquiries or suggestions?
        </h2>
        <p className="mt-2 font-semibold text-[#032534] text-2xl text-center tracking-[0] leading-10">
          We're just a click away—reach out now!
        </p>
      </div>



      <div className="flex flex-col xl:flex-row justify-center gap-6 md:gap-8 px-4 md:px-6 lg:px-10">
        {/* Map Card */}
        <Card className="w-full max-w-[788px] h-[300px] md:h-[400px] lg:h-[494px] rounded-xl overflow-hidden shadow-[0px_0px_24px_#0000000f] relative">
          <CardContent className="p-0 h-full">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                alt="Map"
                src="https://c.animaapp.com/mdaqa09ck6xuyI/img/image-239.png"
              />
              <div className="absolute inset-0 bg-[#00000033]" />
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="w-full max-w-[788px] min-h-[494px] rounded-xl overflow-hidden shadow-[0px_0px_24px_#0000000f]">
          <CardContent className="p-4 md:p-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* First Name */}
              <div className="relative md:col-span-1">
                <Input
                  className="h-[46px] border border-[#1f8ccc] font-medium text-[#1f8ccc] text-base"
                  placeholder="First Name *"
                />
              </div>

              {/* Last Name */}
              <div className="relative md:col-span-1">
                <Input
                  className="h-[46px] font-medium text-[#727272] text-sm"
                  placeholder="Last Name *"
                />
              </div>

              {/* Select Your Role */}
              <div className="relative md:col-span-1"
              >
                <Select>
                  <SelectTrigger className="w-full font-medium text-[#727272] text-sm">
                    <SelectValue placeholder="Select Your Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Project Manager</SelectItem>
                    <SelectItem value="analyst">Data Analyst</SelectItem>
                    <SelectItem value="marketing">Marketing Specialist</SelectItem>
                    <SelectItem value="sales">Sales Representative</SelectItem>
                    <SelectItem value="hr">HR Professional</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="col-span-1 md:col-span-2 relative">
                <Input
                  className="h-[46px]  font-medium text-[#727272] text-sm"
                  placeholder="Email"
                />
              </div>

              {/* Contact No. */}
              <div className="relative md:col-span-1">
                <Input
                  className="h-[46px]  font-medium text-[#727272] text-sm"
                  placeholder="Contact No. *"
                />
              </div>

              {/* State */}
              <div className="relative md:col-span-1">
                <Input
                  className="h-[46px]  font-medium text-[#727272] text-sm"
                  placeholder="State *"
                />
              </div>

              {/* City */}
              <div className="relative md:col-span-1">
                <Input
                  className="h-[46px]  font-medium text-[#727272] text-sm"
                  placeholder="City *"
                />
              </div>

              {/* Pincode */}
              <div className="relative md:col-span-1">
                <Input
                  className="h-[46px] font-medium text-[#727272] text-sm"
                  placeholder="Pincode *"
                />
              </div>

              {/* Product Category */}
              <div className="col-span-1 md:col-span-3 relative">
                <Select>
                  <SelectTrigger className="h-[46px] w-full  font-medium text-[#727272] text-sm">
                    <SelectValue placeholder="Select Product Category *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="home-garden">Home & Garden</SelectItem>
                    <SelectItem value="sports-outdoors">Sports & Outdoors</SelectItem>
                    <SelectItem value="office-supplies">Office Supplies</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="col-span-1 md:col-span-3 relative">
                <Textarea
                  className="h-[100px] resize-none  font-medium text-[#727272] text-sm"
                  placeholder="Enter Message"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-3 mt-2">
                <Button className="w-full h-[42px] bg-[#1f8ccc] hover:bg-[#1a7ab3]  font-semibold text-white text-xl">
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Contact Information Card */}
      <Card className="mx-auto mt-6 w-[1600px] rounded-xl shadow-[0px_0px_24px_#0000000f]">
        <CardContent className="p-9">
          <div className="flex flex-col space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-[42px] h-[42px] bg-white rounded-xl shadow-[0px_0px_24px_#00000026]">
                  {item.icon}
                </div>
                <div className="px-2 py-1">
                  <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#032534]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};