import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">$OLIVIA</h3>
          <p className="text-sm text-gray-400">
            Community Token Tribute to the First AI in Government.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://t.me/oliviasolcto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Join our Telegram"
          >
            Telegram
          </a>
          <a
            href="https://x.com/oliviacommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Follow us on Twitter"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} $OLIVIA. All rights reserved.</p>
        <p>Not affiliated with Aigov_agent.</p>
      </div>
    </footer>
  );
};

export default Footer;
