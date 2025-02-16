import React, { useState } from 'react';

const CopyableAddress = () => {
  const address = "FbjZi67q8khXNaZpgESNDSdP3wFvpV6wRxW54va7pump";
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <span className="bg-gray-700 px-3 py-2 rounded-md font-mono">{address}</span>
      <button
        onClick={copyAddress}
        className="ml-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-4 py-2 rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is $OLIVIA?",
      answer:
        "$OLIVIA is a community-owned token that emerged as the winner of a PVP battle among various Olivia tokens, inspired by the first AI in government."
    },
    {
      question: "How is $OLIVIA distributed?",
      answer:
        "The token is fairly distributed among community members, ensuring transparency and equal opportunity for all."
    },
    {
      question: "Where can I join the community?",
      answer:
        "Join our Telegram channel at https://t.me/oliviasolcto and follow us on Twitter to stay updated."
    },
    {
      question: "Are you affiliated with Aigov_agent?",
      answer:
        "No, we are not affiliated with Aigov_agent. We are an independent, community-driven project."
    },
    {
      question: "What blockchain is $OLIVIA deployed on?",
      answer: "$OLIVIA is deployed on the Solana blockchain."
    },
    {
      question: "What is the contract address (CA) and how can I copy it?",
      answer: (
        <>
          <p className="text-gray-300">The contract address is shown below:</p>
          <CopyableAddress />
        </>
      )
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gray-800 text-white px-4 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  {typeof faq.answer === "string" ? (
                    <p className="text-gray-300">{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
