import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    company: string;
    logo: string;
    logoAlt: string;
    description: React.ReactNode;
    image: string;
    imageAlt: string;
  };
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left side - Project Image */}
          <div className="relative h-full">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Project Details */}
          <div className="p-6 flex flex-col">
            <div className="flex items-start mb-4">
              <div className="w-[72px] h-[72px] bg-white rounded overflow-hidden border-[0.65px] border-solid border-[#1f8ccc] flex items-center justify-center">
                <img
                  className="max-w-full max-h-full object-contain"
                  alt={project.logoAlt}
                  src={project.logo}
                />
              </div>

              <div className="ml-6">
                <div className="flex items-center gap-[3.51px] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="w-[27.45px] h-[26.24px]"
                      alt="Star"
                      src="https://c.animaapp.com/mdahcrcekTrHmF/img/star-10.svg"
                    />
                  ))}
                </div>
                <h3 className="font-['Mulish',Helvetica] font-medium text-[#032534] text-[22px] leading-[30px]">
                  {project.company}
                </h3>
              </div>
            </div>

            <div className="mt-4 flex-grow">
              <p className="font-['Mulish',Helvetica] text-base text-justify leading-[30px] text-[#1a1a1a]">
                We've proudly partnered with <span className="font-black">{project.company}</span>, providing robust and customized precast solutions that meet their large-scale infrastructure demands.
              </p>

              <p className="font-['Mulish',Helvetica] text-base text-justify leading-[30px] text-[#1a1a1a] mt-4">
                This collaboration highlights our ability to deliver complex requirements with precision and efficiency, solidifying our position as a trusted partner in the infrastructure and construction sector.
              </p>

              <p className="font-['Mulish',Helvetica] text-base text-justify leading-[30px] text-[#1a1a1a] mt-4">
                From design to execution, every aspect was aligned with their vision and goals. Our partnership with {project.company} stands as a testament to our commitment to quality and innovation.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                variant="outline"
                className="w-[218px] h-[42px] rounded-lg relative border-[#1f8ccc]"
              >
                <span className="font-['Roboto',Helvetica] text-base text-justify leading-[18px] text-[#1f8ccc]">
                  Contact Us
                </span>
                <div className="absolute w-[30px] h-[30px] top-1.5 right-1.5 rounded flex items-center justify-center bg-[#1f8ccc]">
                  <img
                    className="w-[18px] h-3"
                    alt="Arrow"
                    src="https://c.animaapp.com/mdahcrcekTrHmF/img/vector-9.svg"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
