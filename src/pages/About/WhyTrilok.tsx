
export function WhyTrilok() {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          Why TRILOK Precast
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-auto max-w-xs md:max-w-sm">
            <img
              src="./aboutus/why_trilok.png"
              alt="TRILOK Precast"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:border-l-4 md:border-gray-300 md:pl-6 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2 md:mb-3">
              Complete Precast Product Range
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Compound Walls, Labor Quarters, Security Cabins, Precast Homes & more —
              all under one brand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}