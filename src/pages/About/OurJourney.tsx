import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OurJourneySection = () => {
  const [selectedYear, setSelectedYear] = useState(2015);

  const timelinePoints = [
    {
      year: "2005",
      yearNum: 2005,
      title: "The Foundation",
      location: "Surat, Gujarat",
      highlighted: false,
    },
    {
      year: "2007",
      yearNum: 2007,
      title: "First Expansion",
      location: "Mumbai, Maharashtra",
      highlighted: false,
    },
    {
      year: "2009",
      yearNum: 2009,
      title: "South India Entry",
      location: "Bangalore, Karnataka",
      highlighted: false,
    },
    {
      year: "2011",
      yearNum: 2011,
      title: "Technology Upgrade",
      location: "Delhi NCR",
      highlighted: false,
    },
    {
      year: "2013",
      yearNum: 2013,
      title: "Major Milestone",
      location: "Pune, Maharashtra",
      highlighted: false,
    },
    {
      year: "2015",
      yearNum: 2015,
      title: "National Recognition",
      location: "Chennai, Tamil Nadu",
      highlighted: true,
    },
    {
      year: "2017",
      yearNum: 2017,
      title: "Innovation Hub",
      location: "Hyderabad, Telangana",
      highlighted: false,
    },
    {
      year: "2019",
      yearNum: 2019,
      title: "Market Leadership",
      location: "Kolkata, West Bengal",
      highlighted: false,
    },
    {
      year: "2021",
      yearNum: 2021,
      title: "Digital Transformation",
      location: "Ahmedabad, Gujarat",
      highlighted: false,
    },
    {
      year: "2023",
      yearNum: 2023,
      title: "Sustainability Focus",
      location: "Jaipur, Rajasthan",
      highlighted: false,
    },
    {
      year: "2024",
      yearNum: 2024,
      title: "Global Vision",
      location: "Indore, Madhya Pradesh",
      highlighted: false,
    },
  ];

  const descriptionList = [
    {
      year: 2005,
      text: "TRILOK Cement Products was born in Surat with a bold vision to revolutionize India's infrastructure through durable precast innovation. Our journey began with a single facility and unwavering commitment to quality.",
    },
    {
      year: 2007,
      text: "Expanded operations to Mumbai, establishing our first manufacturing unit outside Gujarat. This marked the beginning of our pan-India presence and demonstrated our commitment to serving major metropolitan markets.",
    },
    {
      year: 2009,
      text: "Made our entry into South India with a state-of-the-art facility in Bangalore. This strategic move allowed us to serve the growing IT and infrastructure demands of Southern India with our innovative precast solutions.",
    },
    {
      year: 2011,
      text: "Invested heavily in cutting-edge technology and automation at our Delhi NCR facility. This technological upgrade significantly enhanced our production capacity and quality standards, setting new benchmarks in the industry.",
    },
    {
      year: 2013,
      text: "Achieved a major milestone by completing our 1000th project in Pune. This achievement reinforced our position as a trusted partner for large-scale infrastructure development across diverse sectors.",
    },
    {
      year: 2015,
      text: "Received national recognition for excellence in precast concrete solutions. Our Chennai facility became a model for sustainable manufacturing practices, earning multiple industry awards and certifications.",
    },
    {
      year: 2017,
      text: "Established our innovation and R&D hub in Hyderabad, focusing on developing next-generation precast technologies. This center became the birthplace of several breakthrough products that revolutionized the industry.",
    },
    {
      year: 2019,
      text: "Achieved market leadership position with presence in 50+ cities across India. Our Kolkata facility marked our strong foothold in Eastern India, completing the pan-India coverage of our operations.",
    },
    {
      year: 2021,
      text: "Launched comprehensive digital transformation initiative from our Ahmedabad center. Implemented IoT, AI, and advanced analytics across all operations, making us the first fully digitized precast company in India.",
    },
    {
      year: 2023,
      text: "Pioneered sustainable construction practices with our green manufacturing facility in Jaipur. Achieved carbon-neutral operations and introduced eco-friendly precast solutions that set new environmental standards.",
    },
    {
      year: 2024,
      text: "Expanded to 70+ locations across India and initiated our global expansion strategy from Indore. Today, TRILOK stands as India's largest precast solutions provider, ready to serve international markets.",
    },
  ];

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  const getSelectedDescription = () => {
    const description = descriptionList.find(item => item.year === selectedYear);
    return description ? description.text : "";
  };

  const getSelectedPoint = () => {
    return timelinePoints.find(point => point.yearNum === selectedYear);
  };

  // Calculate position and size for each timeline point
  const getTimelineItemStyle = (index: number) => {
    const totalItems = timelinePoints.length;
    const centerIndex = Math.floor(totalItems / 2);
    const distanceFromCenter = Math.abs(index - centerIndex);

    // Size calculation - center is largest, decreases towards edges
    const maxSize = 80;
    const minSize = 40;
    const sizeReduction = (maxSize - minSize) / centerIndex;
    const size = Math.max(minSize, maxSize - (distanceFromCenter * sizeReduction));

    // Position calculation to align with the curved earth image
    const containerWidth = 1400; // Match the max-width of the container
    const radius = 700; // Approximate radius of the semi-circle
    const centerX = containerWidth / 2;
    const centerY = 410; // Adjust based on the earth image position

    // Calculate angle for each point along the semi-circle
    const startAngle = Math.PI; // Start from left (180 degrees)
    const endAngle = 0; // End at right (0 degrees)
    const angleStep = (startAngle - endAngle) / (totalItems - 1);
    const angle = startAngle - (index * angleStep);

    // Calculate x, y coordinates on the circle
    const x = centerX + radius * Math.cos(angle);
    const y = centerY - radius * Math.sin(angle) * 0.6; // Flatten the curve slightly

    return {
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
    };
  };

  return (
    <section className="relative w-full py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Section Heading */}
          <h2 className="font-extrabold text-[#032534] text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-4">
            Our Journey
          </h2>

          {/* Subtitle */}
          <div className="font-semibold text-[#1f8ccc] text-xl sm:text-2xl lg:text-[32px] mb-3">
            Precision. Progress. Precast — The Journey of Trilok Group
          </div>

          {/* Secondary Subtitle */}
          <div className="font-semibold text-[#032534] text-lg sm:text-xl lg:text-2xl mb-8">
            From One City to 70+ Locations Across India
          </div>

          {/* Information Card */}
          <Card className="w-full max-w-[787px] mb-12 border border-[#032534] shadow-[0_0_24px_#0000000f] rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardContent className="p-6 sm:p-8">
              <p className="font-medium text-[#032534] text-base sm:text-lg leading-relaxed">
                TRILOK Cement Products was born in Surat, with a bold vision —
                to revolutionize India&apos;s infrastructure through durable
                precast innovation. Today, we stand as a testament to unwavering
                commitment and continuous growth.
              </p>
            </CardContent>
          </Card>

          {/* Timeline - Desktop Version */}
          <div className="relative hidden lg:block w-full max-w-[1400px] h-[300px] mb-12">
            {/* Curved Path Background */}
            <div className="absolute inset-0">
              <img
                className="w-full max-w-[1489px] h-[420px] mx-auto relative"
                alt="Timeline path"
                src="./aboutus/obj_1.svg"
              />
            </div>

            {/* Timeline Points */}
            {timelinePoints.map((point, index) => {
              const isSelected = selectedYear === point.yearNum;
              const style = getTimelineItemStyle(index);
              const size = parseInt(style.width);

              return (
                <div
                  key={`timeline-point-${index}`}
                  className="absolute cursor-pointer transition-all duration-500 hover:scale-110 group"
                  style={{
                    left: style.left,
                    top: style.top,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => handleYearClick(point.yearNum)}
                >
                  {/* Point Circle */}
                  <div
                    className={`relative rounded-full transition-all duration-300 ${isSelected
                      ? 'bg-gradient-to-br from-[#1f8ccc] to-[#032534] shadow-xl'
                      : 'bg-white border-2 border-[#1f8ccc] shadow-lg hover:shadow-xl group-hover:border-[#032534]'
                      }`}
                    style={{ width: style.width, height: style.height }}
                  >
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${isSelected ? 'bg-white' : 'bg-[#1f8ccc] group-hover:bg-[#032534]'
                        } transition-all duration-300`}
                      style={{
                        width: `${size * 0.4}px`,
                        height: `${size * 0.4}px`
                      }}
                    />
                  </div>

                  {/* Year Label */}
                  <div
                    className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 font-bold transition-all duration-300 whitespace-nowrap ${isSelected ? 'text-[#1f8ccc] scale-110' : 'text-[#032534] group-hover:text-[#1f8ccc]'
                      }`}
                    style={{ fontSize: `${Math.max(14, size * 0.25)}px` }}
                  >
                    {point.year}
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-[#032534] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                      <div className="font-semibold">{point.title}</div>
                      <div className="text-xs text-blue-200">{point.location}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden w-full mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {timelinePoints.map((point, index) => {
                const isSelected = selectedYear === point.yearNum;
                return (
                  <div
                    key={`mobile-point-${index}`}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${isSelected
                      ? 'bg-gradient-to-br from-[#1f8ccc] to-[#032534] text-white'
                      : 'bg-white border-2 border-[#1f8ccc] hover:border-[#032534]'
                      }`}
                    onClick={() => handleYearClick(point.yearNum)}
                  >
                    <div className={`font-bold text-lg ${isSelected ? 'text-white' : 'text-[#032534]'}`}>
                      {point.year}
                    </div>
                    <div className={`text-sm ${isSelected ? 'text-blue-100' : 'text-[#1f8ccc]'}`}>
                      {point.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description Section */}
          <div className="w-full max-w-5xl mt-26">
            <Card className="border-2 border-[#1f8ccc] shadow-xl rounded-2xl bg-gradient-to-br from-white to-blue-50 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="font-extrabold text-[#1f8ccc] text-3xl mb-2">
                    {selectedYear}
                  </h3>
                  {getSelectedPoint() && (
                    <div className="space-y-1">
                      <div className="font-bold text-[#032534] text-xl">
                        {getSelectedPoint()?.title}
                      </div>
                      <div className="font-semibold text-[#1f8ccc] text-lg">
                        {getSelectedPoint()?.location}
                      </div>
                    </div>
                  )}
                </div>
                <p className="font-medium text-[#032534] text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  {getSelectedDescription()}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 flex items-center space-x-2">
            <div className="text-sm font-semibold text-[#032534]">Journey Progress:</div>
            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
              <div
                className="bg-gradient-to-r from-[#1f8ccc] to-[#032534] h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((timelinePoints.findIndex(p => p.yearNum === selectedYear) + 1) / timelinePoints.length) * 100}%`
                }}
              />
            </div>
            <div className="text-sm font-semibold text-[#1f8ccc]">
              {timelinePoints.findIndex(p => p.yearNum === selectedYear) + 1} / {timelinePoints.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
