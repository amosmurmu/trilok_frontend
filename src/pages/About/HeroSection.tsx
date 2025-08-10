export const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.65) 55%,  /* Dark overlay until 55% */
        rgba(0, 0, 0, 0) 100%     /* Transparent after 55% */
      ),
        url('./aboutus/about_us_bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute left-0 lg:left-[140px] inset-0 flex items-end justify-center lg:justify-start px-4 sm:px-6 md:px-8 lg:px-10 pb-[80px] sm:pb-[90px] md:pb-[95px] lg:pb-[100px]">
        <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[60px] font-semibold leading-tight text-center lg:text-left max-w-screen-xl w-full">
          About Us
        </h1>
      </div>

      {/* Responsive Rectangle Shape */}
      <img
        className="absolute hidden lg:block bottom-[10px] sm:bottom-[15px] md:bottom-[18px] lg:bottom-[20px] left-0 object-cover"
        alt="Rectangle background shape"
        src="https://c.animaapp.com/mda3wbuoE58tBx/img/rectangle-3.svg"
        style={{
          aspectRatio: "1373/230",
          minHeight: "40px",
          maxHeight: "230px",
        }}
      />
    </section>
  );
};
