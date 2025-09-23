const imgLogoCgi = "/assets/Logo-CGI-light.svg";

interface FooterProps {
  language: 'EN' | 'ZH';
}

export default function Footer({ language }: FooterProps) {
  const content = {
    EN: "© 2025 CID Global Investment Pte Ltd. All rights reserved.",
    ZH: "© 2025 CID 全球投資私人有限公司。保留所有權利。"
  };

  return (
    <footer className="bg-deep-blue w-full">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 md:py-24 gap-8">
      <div className="h-16 md:h-18 w-32 md:w-40 lg:w-44">
        <img alt="CID Global Investments Logo" className="block w-full h-full object-contain" src={imgLogoCgi} />
      </div>
      
        <div className="font-montserrat font-semibold text-white text-sm md:text-base text-center md:text-right">
          {content[language]}
        </div>
      </div>
    </footer>
  );
}