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
      images: ["./projects/project_1.png", "./projects/project_2.png", "./projects/project_3.png"],
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
    },
    {
      id: 2,
      images: ["./projects/project_2.png", "./projects/project_3.png", "./projects/project_4.png"],
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
    },
    {
      id: 3,
      images: ["./projects/project_3.png", "./projects/project_4.png", "./projects/project_5.png"],
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
    },
    {
      id: 4,
      images: ["./projects/project_4.png", "./projects/project_5.png", "./projects/project_6.png"],
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
    },
    {
      id: 5,
      images: ["./projects/project_5.png", "./projects/project_6.png", "./projects/project_1.png"],
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
    },
    {
      id: 6,
      images: ["./projects/project_6.png", "./projects/project_1.png", "./projects/project_2.png"],
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col lg:flex-row min-h-[406px] lg:h-[406px] rounded-2xl overflow-hidden shadow-[0px_0px_34.3px_#0000001f] border-0"
            >
              {/* Image Section - Hidden on tablets, shown on mobile and desktop */}
              <CardContent className="p-6 flex-1 md:hidden lg:flex">
                <div className="relative w-full h-[250px] lg:h-[358px] bg-white rounded-xl overflow-hidden shadow-[0px_0px_34.3px_#0000001f] transition-transform duration-300 group-hover:scale-105">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.imageAlt}
                    src={project.images[0]}
                  />
                </div>
              </CardContent>

              {/* Content Section */}
              <div className="flex flex-col p-6 pb-8 flex-1 justify-between">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="w-[72px] h-[72px] bg-white rounded overflow-hidden border-[0.65px] border-solid border-[#1f8ccc] flex items-center justify-center flex-shrink-0 p-2">
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
                      <h3 className="font-medium text-[#032534] text-[22px] leading-[30px]">
                        {project.company}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-justify leading-[30px] text-[#1a1a1a] mt-6">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="group w-[218px] h-[42px] rounded-lg relative border-[#1f8ccc] bg-white hover:bg-[#1f8ccc] transition-colors duration-300"
                    onClick={() => {
                      // Only open modal on large screens (lg and above)
                      if (window.innerWidth >= 1024) {
                        openProjectModal(project.id);
                      }
                    }}
                  >
                    <span className="font-['Roboto',Helvetica] text-base text-justify leading-[18px] text-[#1f8ccc] group-hover:text-white">
                      Read More
                    </span>
                    <div className="absolute w-[30px] h-[30px] top-1.5 right-1.5 rounded flex items-center justify-center bg-transparent group-hover:bg-[#1f8ccc]">
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