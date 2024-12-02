import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Hero = ({
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.3)",
  title,
  subtitle,
  description,
  highlightText,
  highlightStyle,
  buttonText,
  buttonLink = "#",
  links = [],
}) => {
  return (
    <div
      className="relative py-10 px-4 sm:px-6 md:px-10 bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      {overlayColor && <div className="absolute inset-0" style={{ backgroundColor: overlayColor, zIndex: -10 }}></div>}

      {/* Main Content */}
      <div className="relative z-10 mx-auto mb-4 w-full max-w-3xl text-center md:mb-8 lg:mb-4 mt-5">
        {/* Subtitle */}
        {subtitle && (
          <p className="mx-auto mb-2 max-w-lg text-xs sm:text-sm md:text-base text-black md:mb-6 lg:mb-8">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1 className="mb-4 text-1xl sm:text-1xl md:text-2xl lg:text-4xl font-bold text-blue-950 leading-tight">
          {title} <br />
          {highlightText && (
            <span
              style={{
                fontFamily: "Bhineka",
                fontSize: "3rem",
                ...highlightStyle,
              }}
            >
              {highlightText}
            </span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="mx-auto mb-5 max-w-lg text-sm sm:text-base lg:text-lg text-black md:mb-6 lg:mb-8">
            {description}
          </p>
        )}

        {/* Button */}
        {buttonText && (
          <div className="flex items-center justify-center space-x-4">
            <a
              href={buttonLink}
              className="inline-block rounded-md bg-blue-950 px-5 sm:px-8 py-3 sm:py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-800"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      {links.length > 0 && (
        <div className="relative z-10 flex justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 bg-white p-4 rounded-full">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200 ${
                  link.active
                    ? "bg-[#172554] text-white font-extrabold"
                    : ""
                }`}
                to={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  overlayColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  highlightText: PropTypes.string,
  highlightStyle: PropTypes.object,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
};

export default Hero;
