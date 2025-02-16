import React, { useState, useEffect } from 'react';

const Marquee = () => {
  const [numCopies, setNumCopies] = useState(1);

  useEffect(() => {
    const updateCopies = () => {
      // Estimate each marquee item (including gap) to be about 200px wide.
      const itemWidth = 200;
      const width = window.innerWidth;
      // Calculate copies needed and cap the max to 6
      const computedCopies = Math.ceil(width / itemWidth) + 1;
      const copies = Math.min(computedCopies, 6);
      setNumCopies(copies);
    };

    updateCopies();
    window.addEventListener('resize', updateCopies);
    return () => window.removeEventListener('resize', updateCopies);
  }, []);

  const marqueeItems = Array.from({ length: numCopies }).map((_, index) => (
    <div key={index} className="flex items-center whitespace-nowrap mr-8">
      <img
        src="/hero.jpg"
        alt="Olivia CtO"
        className="h-10 mr-4"
      />
      <span className="text-white text-2xl font-bold">Olivia CtO</span>
    </div>
  ));

  return (
    <div className="relative overflow-hidden bg-gray-800 py-4">
      <div
        className="flex items-center gap-8"
        style={{ animation: 'marquee 15s linear infinite' }}
      >
        {marqueeItems}
      </div>
    </div>
  );
};

export default Marquee;
