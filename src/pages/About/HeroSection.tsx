export const HeroSection = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="./aboutus/about_us_bg.png"
          alt="About Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent"></div>
      </div>

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
          aspectRatio: '1373/230',
          minHeight: '40px',
          maxHeight: '230px'
        }}
      />
    </section>
  );
};