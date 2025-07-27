export const HeroSection = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="./projects/projects_bg_trilok.png"
          alt="Projects Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="absolute bottom-[80px] sm:bottom-[90px] md:bottom-[95px] lg:bottom-[100px] px-4 sm:px-6 md:px-8 lg:px-10
  left-1/2 -translate-x-1/2 text-center
  lg:left-[140px] lg:translate-x-0 lg:text-left">
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold leading-tight">
          Our Projects
        </h1>
      </div>


      {/* Responsive Rectangle Shape */}
      <img
        className="absolute hidden lg:block bottom-[20px] left-0 object-cover"
        alt="Rectangle background shape"
        src="./rectangle_cutout.svg"
        style={{
          aspectRatio: '1373/230',
          minHeight: '40px',
          maxHeight: '230px',
        }}
      />
    </section>
  );
};
