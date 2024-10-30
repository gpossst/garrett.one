import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function LinksPage() {
  return (
    <div
      className="w-full h-full bg-cover bg-center min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: `url('https://i.imgur.com/aIdD8di.png')` }}
    >
      <div className="flex flex-row space-x-4 text-[#006d77]">
        <a
          href={"https://github.com/gpossst"}
          className="block bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-lg text-center text-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <a
          href={"https://www.linkedin.com/in/garrett-post-79793824b/"}
          className="block bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-lg text-center text-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={40} />
        </a>
        <a
          href={"https://www.instagram.com/gpossst/"}
          className="block bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-lg text-center text-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href={"https://x.com/imgarrettpost"}
          className="block bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-lg text-center text-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={40} />
        </a>
      </div>
    </div>
  );
}

export default LinksPage;
