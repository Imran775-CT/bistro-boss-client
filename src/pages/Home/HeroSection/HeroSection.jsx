import heroImg from '../../../assets/home/05.png'
const HeroSection = () => {
  return (
    <div
      className="relative h-[400px] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Description div */}
      <div className="relative z-10 max-w-lg text-center text-white p-6 bg-black/50 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-3">Welcome to My Website</h1>
        <p className="text-lg">
          This is a description inside a div with a background image behind it.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
