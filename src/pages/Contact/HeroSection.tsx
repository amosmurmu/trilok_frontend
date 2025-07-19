export const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/contact/contact_us_bg.png"
          alt="Contact Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Contact Us Text Overlay */}
      <div className="absolute left-0 bottom-[100px] px-10">
        <h1 className="text-white text-[60px] font-semibold">Contact Us</h1>
      </div>
      <img
        className="absolute w-full max-w-[1373px] h-auto bottom-[20px] left-0 object-cover"
        alt="Rectangle background shape"
        src="https://c.animaapp.com/mda3wbuoE58tBx/img/rectangle-3.svg"
        style={{ aspectRatio: '1373/230' }}
      />
    </section>
  );
};