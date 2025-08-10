import { Card, CardContent } from "@/components/ui/card";

export const KeyPeopleSection = () => {
  // Data for key people cards
  const keyPeople = [
    {
      name: "Mr. Sanjay Shingala",
      title: "Director",
      image: "./aboutus/pfp_dummy.png",
    },
    {
      name: "Mr. Piyush Shingala",
      title: "Director",
      image: "./aboutus/pfp_dummy.png",
    },
    {
      name: "Mr. Ajay Shingala",
      title: "Director",
      image: "./aboutus/pfp_dummy.png",
    },
  ];

  // Social media icons
  const socialIcons = [
    {
      src: "./linkedin.svg",
      alt: "LinkedIn",
    },
    {
      src: "./instagram.svg",
      alt: "Instagram",
    },
    {
      src: "./facebook.svg",
      alt: "Facebook",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-gray-900 text-4xl mb-12">
          Our Key People
        </h2>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {keyPeople.map((person, index) => (
            <div key={index} className="relative">
              {/* Profile Image - positioned above the card */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 overflow-hidden border-4 rounded-lg border-white shadow-lg bg-white relative z-10">
                  <img
                    className="w-full h-full object-cover"
                    alt={`${person.name} profile`}
                    src={person.image}
                  />
                </div>
              </div>

              {/* Card Content */}
              <Card className="w-80 h-48 rounded-lg border border-gray-300 shadow-md bg-white -mt-16 pt-16">
                <CardContent className="flex flex-col items-center text-center h-full justify-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {person.name}
                  </h3>
                  <p className="font-semibold text-gray-700 text-base mb-4">
                    {person.title}
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3">
                    {socialIcons.map((icon, iconIndex) => (
                      <button
                        key={iconIndex}
                        className="group w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <img
                          className="w-5 h-5 cursor-pointer filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          alt={icon.alt}
                          src={icon.src}
                        />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
