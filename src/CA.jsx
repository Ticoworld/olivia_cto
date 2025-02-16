import React, { useState } from 'react';

const CA = () => {
  const contractAddress = "FbjZi67q8khXNaZpgESNDSdP3wFvpV6wRxW54va7pump";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl flex flex-col items-center justify-center space-y-6 max-w-xl mx-auto my-8">
          <h3 className="text-2xl font-bold text-white">Contract Address</h3>
          <div className="w-full">
            <span className="block bg-gray-700 text-white px-4 py-3 rounded font-mono break-all text-center">
              {contractAddress}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-6 py-3 rounded"
          >
            {copied ? "Copied!" : "Copy Address"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CA;
