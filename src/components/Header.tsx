import { useState } from "react";
import Container from "./Container";

const imgGlobe = "/assets/Globe.svg";
const imgLogoCgi = "/assets/Logo-CGI.svg";

interface HeaderProps {
  language: "EN" | "ZH";
  onLanguageChange: (lang: "EN" | "ZH") => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const content = {
    EN: {
      contactUs: "Contact Us",
      languageTitle: "Language",
      languageEN: "English",
      languageZH: "中文",
    },
    ZH: {
      contactUs: "聯絡我們",
      languageTitle: "語言",
      languageEN: "English",
      languageZH: "中文",
    },
  };

  const currentContent = content[language];

  return (
    <>
      <header className="bg-light-beige w-full relative z-30">
        <Container className="">
          <div className="col-span-19 py-6 flex items-center justify-between">
            {/* Logo */}
            <div className="w-auto h-[56px]">
              <img
                alt="CID Global Investments Logo"
                className="block w-full h-full object-contain"
                src={imgLogoCgi}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              {/* Contact Us */}
              <div className="hidden sm:block">
                <a
                  href="mailto:cgi-general@cidglobal.com"
                  className="font-montserrat font-semibold text-brown-dark text-sm md:text-base cursor-pointer hover:opacity-80"
                >
                  {currentContent.contactUs}
                </a>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-2 relative">
                <div
                  className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                >
                  <img
                    alt="Language"
                    className="block w-6 h-6"
                    src={imgGlobe}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Language Dropdown */}
          {isLanguageDropdownOpen && (
            <>
              {/* Dropdown content */}
              <div className="col-span-19 pb-12 flex flex-col gap-9">
                {/* Top underscore line */}
                <div className="h-0.5 w-full bg-brown-dark" />

                {/* Menu content */}
                <div className="flex flex-col gap-8 w-fit">
                  {/* Language title */}
                  <h3 className="font-montserrat font-semibold text-brown-dark text-subhead1">
                    {currentContent.languageTitle}
                  </h3>

                  {/* Language options */}
                  <div className="flex flex-col gap-4">
                    {/* English option */}
                    <div
                      className="flex flex-col gap-2 cursor-pointer w-fit"
                      onClick={() => {
                        onLanguageChange("EN");
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      <div className="font-montserrat font-semibold text-brown-dark text-body3">
                        {currentContent.languageEN}
                      </div>
                      {language === "EN" && (
                        <div className="h-0.5 w-full bg-brown-dark" />
                      )}
                    </div>

                    {/* Chinese option */}
                    <div
                      className="flex flex-col gap-2 cursor-pointer w-fit"
                      onClick={() => {
                        onLanguageChange("ZH");
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      <div className="font-montserrat font-semibold text-brown-dark text-body3">
                        {currentContent.languageZH}
                      </div>
                      {language === "ZH" && (
                        <div className="h-0.5 w-full bg-brown-dark" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Container>
      </header>

      {/* Backdrop blur overlay */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-10"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </>
  );
}
