import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return React.createElement(
    "footer",
    { className: "bg-[#060608] text-[#86868D] py-6 px-5 mt-10" },
    React.createElement(
      "div",
      {
        className:
          "max-w-screen-xl mx-auto flex flex-col items-center text-center md:flex-row md:justify-between md:text-left",
      },

      // Name and Copyright
      React.createElement(
        "div",
        { className: "text-lg font-semibold" },
        `© ${new Date().getFullYear()} Mazin Khan`
      ),

      // Social Media Links
      React.createElement(
        "div",
        { className: "flex space-x-6 mt-4 md:mt-0" },
        [
          { icon: FiGithub, url: "https://github.com/oxcracx" },
          { icon: FiLinkedin, url: "https://www.linkedin.com/in/mazen-khan/" },
          { icon: FiTwitter, url: "https://twitter.com" },
        ].map((social, index) =>
          React.createElement(
            "a",
            {
              key: index,
              href: social.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-xl hover:text-white transition-all duration-200",
            },
            React.createElement(social.icon, {})
          )
        )
      )
    )
  );
};

export default Footer;
