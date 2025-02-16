import React from 'react';

const HypeSection = () => {
  return (
    <section
      id="hype"
      className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white px-4 text-center"
      role="region"
      aria-label="Hype and Motivation Section"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          United, We Move!
        </h2>
        <p className="text-xl md:text-2xl mb-6">
          Our diamond-handed community is on the rise. $OLIVIA isn’t just another token—it’s the people's choice and the first AI in government.
        </p>
        <p className="text-lg md:text-xl mb-6">
          We've conquered challenges and won two PVP wars, proving that conviction beats market noise. Every holder’s belief drives our future.
        </p>
        <p className="text-lg md:text-xl font-bold">
          This is YOUR project. Hold with conviction and let's shape our future together!
        </p>
      </div>
    </section>
  );
};

export default HypeSection;
