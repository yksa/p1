import bgImage from "@/assets/images/bg1.jpg";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-full bg-gray-100">
      {/* Left Side (Hero Image and Text)  */}
      <div
        className="relative w-full md:w-2/3 h-full bg-cover bg-center"
        // style="background-image: url('path/to/your-image.jpg')"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-xl mx-auto px-8 py-20 text-white">
          <h2 className="text-4xl font-bold uppercase tracking-widest">
            World News
          </h2>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
            Amazing places in America to visit
          </h1>
          <p className="mt-4 text-lg max-w-lg">
            For some reason — the country, this city, this neighborhood, this
            particular street — is the place you are living a majority of your
            life in.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-600"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Side (More News Section) */}
      <div className="w-full md:w-1/3 p-8 bg-white">
        <h3 className="text-xl font-semibold mb-4">More News</h3>
        <div className="space-y-6">
          {/* News Category  */}
          <div>
            <h4 className="text-pink-500 font-bold">Travel</h4>
            <a
              href="#"
              className="block mt-2 text-gray-800 hover:text-gray-600 text-lg font-semibold"
            >
              Amazing places in Europe to visit
            </a>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              dolor id nibh ultricies vehicula ut id elit.
            </p>
            <p className="text-xs text-gray-400 mt-1">2 min ago</p>
          </div>

          {/* Another News Category */}
          <div>
            <h4 className="text-pink-500 font-bold">Technology</h4>
            <a
              href="#"
              className="block mt-2 text-gray-800 hover:text-gray-600 text-lg font-semibold"
            >
              New advancements in AI
            </a>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
            <p className="text-xs text-gray-400 mt-1">5 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
