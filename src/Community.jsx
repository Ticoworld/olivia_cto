import React from 'react';

const Community = () => {
  return (
    <section
      id="community"
      className="py-20 bg-gray-900 text-white px-4 text-center transition-all duration-300 ease-in-out"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Join the Community
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          $OLIVIA is a community-driven token that thrives on fairness and unity.
          Connect with us on Telegram and Twitter to stay updated and get involved!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <a
            href="https://t.me/oliviasolcto"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-8 py-4 rounded-full"
          >
            Join Telegram
          </a>
          <a
            href="https://x.com/i/communities/1891059420668235816"
            className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 ease-in-out text-white px-8 py-4 rounded-full"
          >
            Follow Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
