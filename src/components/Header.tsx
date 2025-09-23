import { useState } from "react";

const imgUnderscore = "/assets/underscore.svg";
const imgCollapseArrow = "/assets/collapse-arrow.svg";
const imgLogoCgi = "/assets/Logo-CGI.svg";

interface HeaderProps {
  language: "EN" | "ZH";
  onLanguageChange: (lang: "EN" | "ZH") => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className="bg-light-beige w-full">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto flex items-center justify-between px-4 md:px-12 py-6 md:py-8">
        {/* Logo */}
        <div className="h-12 md:h-16 lg:h-18 w-24 md:w-32 lg:w-40">
          <img
            alt="CID Global Investments Logo"
            className="block w-full h-full object-contain"
            src={imgLogoCgi}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Contact Us */}
          <div className="hidden sm:block">
            <div className="font-montserrat font-semibold text-dark-brown text-sm md:text-base cursor-pointer hover:opacity-80">
              Contact Us
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 relative">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <div className="font-montserrat font-semibold text-dark-brown text-sm md:text-base">
                {language}
              </div>
              <div className="h-0.5 w-full mt-1">
                <img
                  alt=""
                  className="block w-full h-0.5"
                  src={imgUnderscore}
                />
              </div>
            </div>

            <div
              className="w-4 h-4 md:w-6 md:h-6 cursor-pointer"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <img
                alt=""
                className={`block w-full h-full transition-transform ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
                src={imgCollapseArrow}
              />
            </div>

            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-2 z-20 min-w-[80px]">
                <div
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer font-montserrat font-semibold text-dark-brown text-sm md:text-base rounded"
                  onClick={() => {
                    onLanguageChange("EN");
                    setIsLanguageDropdownOpen(false);
                  }}
                >
                  EN
                </div>
                <div
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer font-montserrat font-semibold text-dark-brown text-sm md:text-base rounded"
                  onClick={() => {
                    onLanguageChange("ZH");
                    setIsLanguageDropdownOpen(false);
                  }}
                >
                  中文
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
