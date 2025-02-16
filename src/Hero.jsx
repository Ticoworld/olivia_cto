import React, { useState } from 'react';

const Hero = () => {
  // Subcomponent to handle the copyable contract address
  const CopyableAddress = () => {
    const address = "FbjZi67q8khXNaZpgESNDSdP3wFvpV6wRxW54va7pump";
    const [copied, setCopied] = useState(false);

    const copyAddress = () => {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
        <span className="bg-gray-700 text-white px-4 py-2 rounded font-mono break-all text-center">
          {address}
        </span>
        <button
          onClick={copyAddress}
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Copy contract address"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    );
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-white px-4 text-center"
      role="region"
      aria-label="Welcome section"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/olivia.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4" aria-label="Token name">
          $OLIVIA
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Community Token Tribute to the First AI in Government.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/oliviasolcto"
            className="bg-gray-800 px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Telegram community"
          >
            Join Telegram
          </a>
          <a
            href="https://x.com/oliviaAI_cto"
            className="bg-gray-800 px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Twitter"
          >
            Follow Twitter
          </a>
        </div>
        <p className="mt-6 text-sm" aria-label="Legal disclaimer">
          <strong>Note:</strong> Not affiliated with Aigov_agent.
        </p>
        {/* Copyable Contract Address */}
        <CopyableAddress />
      </div>
    </section>
  );
};

export default Hero;
