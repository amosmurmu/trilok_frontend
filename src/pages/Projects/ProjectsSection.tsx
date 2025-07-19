import { ProjectModal } from "@/components/ProjectModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  // Project data for mapping
  const projects = [
    {
      id: 1,
      image:
        "https://c.animaapp.com/mdahcrcekTrHmF/img/empty-road-by-building-against-sky--1--1.png",
      imageAlt: "Empty road by building against sky",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-12.png",
      logoAlt: "Godrej logo",
      company: "Godrej Enterprises",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve had the privilege of working with some of the most
            respected names in the industry — including{" "}
          </span>
          <span className="font-black">Godrej</span>
          <span className="font-semibold">
            {" "}
            — delivering high-quality precast solutions tailored to their
            infrastructure needs.
          </span>
        </>
      ),
      hasBorder: true,
      buttonColor: "#1f8ccc",
      buttonTextColor: "#1f8ccc",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-3.png",
      imageAlt: "Reliance Industries project",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-10.png",
      logoAlt: "Reliance logo",
      company: "Reliance Industries",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve proudly partnered with industry giants like{" "}
          </span>
          <span className="font-black">Reliance Industries</span>
          <span className="font-semibold">
            , providing robust and customized precast solutions that meet their
            large-scale infrastructure demands.
          </span>
        </>
      ),
      hasBorder: false,
      buttonColor: "#1a1a1a",
      buttonTextColor: "#1a1a1a",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mdahcrcekTrHmF/img/111.png",
      imageAlt: "Adani Wilmar project",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-8.png",
      logoAlt: "Adani Wilmar logo",
      company: "Adani Wilmar",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve had the opportunity to collaborate with leading
            enterprises like{" "}
          </span>
          <span className="font-black">Adani Wilmar</span>
          <span className="font-semibold">
            , delivering durable and efficient precast solutions aligned with
            their operational infrastructure requirements.
          </span>
        </>
      ),
      hasBorder: false,
      buttonColor: "#1a1a1a",
      buttonTextColor: "#1a1a1a",
    },
    {
      id: 4,
      image:
        "https://c.animaapp.com/mdahcrcekTrHmF/img/concrete-wall-block-with-trees.png",
      imageAlt: "Concrete wall block with trees",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-9.png",
      logoAlt: "TATA Motors logo",
      company: "TATA Motors",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve proudly partnered with industry giants like{" "}
          </span>
          <span className="font-black">TATA Motors</span>
          <span className="font-semibold">
            , providing robust and customized precast solutions that meet their
            large-scale infrastructure demands.
          </span>
        </>
      ),
      hasBorder: false,
      buttonColor: "#1a1a1a",
      buttonTextColor: "#1a1a1a",
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mdahcrcekTrHmF/img/2149207756-1.png",
      imageAlt: "NTPC project",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-11.png",
      logoAlt: "NTPC logo",
      company: "NTPC",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve had the opportunity to collaborate with leading
            enterprises like{" "}
          </span>
          <span className="font-black">NTPC</span>
          <span className="font-semibold">
            , delivering durable and efficient precast solutions aligned with
            their operational infrastructure requirements.
          </span>
        </>
      ),
      hasBorder: false,
      buttonColor: "#1a1a1a",
      buttonTextColor: "#1a1a1a",
    },
    {
      id: 6,
      image: "https://c.animaapp.com/mdahcrcekTrHmF/img/1630.png",
      imageAlt: "Hindustan Petroleum project",
      logo: "https://c.animaapp.com/mdahcrcekTrHmF/img/image-14.png",
      logoAlt: "Hindustan Petroleum logo",
      company: "Hindustan Petroleum",
      description: (
        <>
          <span className="font-semibold">
            We&apos;ve proudly partnered with industry giants like{" "}
          </span>
          <span className="font-black">Hindustan Petroleum</span>
          <span className="font-semibold">
            , providing robust and customized precast solutions that meet their
            large-scale infrastructure demands.
          </span>
        </>
      ),
      hasBorder: false,
      buttonColor: "#1a1a1a",
      buttonTextColor: "#1a1a1a",
    },
  ];

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Find the selected project
  const selectedProjectData = projects.find(p => p.id === selectedProject) || null;

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col md:flex-row h-[406px] rounded-2xl overflow-hidden shadow-[0px_0px_34.3px_#0000001f] border-0"
            >
              <CardContent className="p-6 flex-1">
                <div className="relative w-full h-[358px] bg-white rounded-xl overflow-hidden shadow-[0px_0px_34.3px_#0000001f]">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.imageAlt}
                    src={project.image}
                  />
                </div>
              </CardContent>

              <div className="flex flex-col p-6 flex-1">
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

                <p className="font-['Mulish',Helvetica] text-base text-justify leading-[30px] text-[#1a1a1a] mt-6 mb-auto">
                  {project.description}
                </p>

                <div className="mt-4">
                  <Button
                    variant="outline"
                    className={`w-[218px] h-[42px] rounded-lg relative ${project.hasBorder ? "border-[#1f8ccc]" : "border-[#e5e5e5]"}`}
                    onClick={() => openProjectModal(project.id)}
                  >
                    <span
                      className={`font-['Roboto',Helvetica] text-base text-justify leading-[18px] text-${project.buttonTextColor}`}
                    >
                      Read More
                    </span>
                    <div
                      className={`absolute w-[30px] h-[30px] top-1.5 right-1.5 rounded flex items-center justify-center ${project.hasBorder ? "bg-[#1f8ccc]" : "bg-transparent"}`}
                    >
                      <img
                        className="w-[18px] h-3"
                        alt="Arrow"
                        src="https://c.animaapp.com/mdahcrcekTrHmF/img/vector-9.svg"
                      />
                    </div>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProjectData && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={closeProjectModal}
          project={selectedProjectData}
        />
      )}
    </section>
  );
};
