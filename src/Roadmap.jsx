import React from 'react';

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-20 bg-gray-800 text-white px-4 transition-all duration-300 ease-in-out"
      role="region"
      aria-label="Roadmap section"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Roadmap</h2>
        
        {/* Completed Milestones */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Completed</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-900 rounded shadow">
              CTO aigov_agent <span className="text-green-500 font-bold">DONE!</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Fair distribution, dev sold, attacked and revived <span className="text-green-500 font-bold">DONE!</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              ATH <span className="text-green-500 font-bold">DONE!</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Over 1000 holders <span className="text-green-500 font-bold">DONE!</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Over 2000 holders <span className="text-green-500 font-bold">DONE!</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Website – being made by another holder/believer{" "}
              <span className="text-green-500 font-bold">DONE!</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Community building and participating in this CTO <span className="text-green-500 font-bold">YES</span>
            </li>
          </ul>
        </div>

        {/* In Process Milestones */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">In Process</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-900 rounded shadow">
              Received donation to make dextools and dexscreener{" "}
              <span className="text-yellow-500 font-bold">in process</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Website – being made by another holder/believer{" "}
              <span className="text-yellow-500 font-bold">in process</span>
            </li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Raiding <span className="text-yellow-500 font-bold">started</span>
            </li>
          </ul>
        </div>

        {/* Upcoming Milestones */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Milestones</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-900 rounded shadow">3000 holders</li>
            <li className="p-4 bg-gray-900 rounded shadow">4000 holders</li>
            <li className="p-4 bg-gray-900 rounded shadow">5000 holders</li>
            <li className="p-4 bg-gray-900 rounded shadow">Day above 500k</li>
            <li className="p-4 bg-gray-900 rounded shadow">Day above 1m</li>
            <li className="p-4 bg-gray-900 rounded shadow">Day above 5m</li>
            <li className="p-4 bg-gray-900 rounded shadow">
              Gain traction as the first AI GOV token ever made{" "}
              <span className="text-gray-400 text-sm">
                (our CTO supports the first ever created token; our Olivia is the oldest CA)
              </span>
            </li>
          </ul>
        </div>

        {/* Momentum Phase */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Momentum Phase</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-900 rounded shadow">10,000 holders</li>
            <li className="p-4 bg-gray-900 rounded shadow">20mm MC</li>
            <li className="p-4 bg-gray-900 rounded shadow">100mm MC</li>
            <li className="p-4 bg-gray-900 rounded shadow">Above MC</li>
            <li className="p-4 bg-gray-900 rounded shadow">Blue Chip $OLIVIA Token</li>
          </ul>
        </div>

        {/* Motivational Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Motivation</h3>
          <p className="text-lg leading-relaxed p-4 bg-gray-900 rounded shadow">
            Your contribution, dedication, and refusal to react to bot manipulators and short-term thinkers can help
            $OLIVIA become great. In three green days, true holders and believers shine; in red days, real diamond
            hands are forged. Decide today who you are, and then stick to your plan.
            <br /><br />
            Let's do it, together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
