export const HeroSection = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="./products/products_bg_trilok.png"
          alt="Products Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Heading */}
      <div className="absolute left-[140px] bottom-[80px] sm:bottom-[90px] md:bottom-[95px] lg:bottom-[100px] px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold leading-tight">
          Our Products
        </h1>
      </div>

      {/* Responsive Rectangle Shape */}
      <img
        className="absolute hidden lg:block bottom-[10px] sm:bottom-[15px] md:bottom-[18px] lg:bottom-[20px] left-0 object-cover"
        alt="Rectangle background shape"
        src="./rectangle_cutout.svg"
        style={{
          aspectRatio: '1373/230',
          minHeight: '40px',
          maxHeight: '230px'
        }}
      />
    </section>
  );
};
