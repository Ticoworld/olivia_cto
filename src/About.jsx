import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-800 text-white px-4 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-300 ease-in-out">
            About $OLIVIA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 transition-all duration-300 ease-in-out">
            $OLIVIA is a community-owned token that emerged victorious in a fierce PVP battle among various Olivia tokens.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-6 transition-all duration-300 ease-in-out">
            It stands as a tribute to the first AI in government, symbolizing innovation, fairness, and a united community spirit.
          </p>
          <p className="text-lg md:text-xl text-gray-300 transition-all duration-300 ease-in-out">
            Join us in shaping a groundbreaking future in the crypto space.
          </p>
          
        </div>
        {/* Image */}
        <div className="md:w-1/2 p-4">
          <img
            src="/hero.jpg"
            alt="About $OLIVIA"
            className="w-full h-auto rounded shadow-lg transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
