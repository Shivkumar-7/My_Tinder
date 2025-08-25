import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-500 text-white z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side - Personal Info */}
        <aside className="mb-4 md:mb-0 flex items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current mr-2"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <div>
            <p className="font-bold">
              Shiv Kumar
              <br />
              <span className="font-normal">Building reliable tech with passion 🚀</span>
            </p>
          </div>
        </aside>

        {/* Copyright - centered on mobile */}
        <p className="text-center mb-4 md:mb-0 md:text-left">
          © {new Date().getFullYear()} Shiv Kumar - All rights reserved
        </p>

        {/* Right side - Social links */}
        <nav className="flex justify-center md:justify-end">
          <div className="grid grid-flow-col gap-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/shiv-kumar-6ab079263/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
            </a>
            {/* GitHub */}
            <a href="https://github.com/Shivkumar-7" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="w-6 h-6"/>
            </a>
            {/* Email */}
            <a href="mailto:kumar00shiv00k123@gmail.com" className="hover:opacity-80 transition-opacity">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" className="w-6 h-6"/>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
