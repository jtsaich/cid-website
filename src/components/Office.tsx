const imgLine13 = "/assets/line.svg";

interface OfficeProps {
  language: 'EN' | 'ZH';
}

export default function Office({ language }: OfficeProps) {
  const content = {
    EN: {
      title: "Singapore Office",
      address: "Fullerton Road #02-01, One Fullerton, Singapore 049213",
      phone: "Tel: +65-6408-3807",
      email: "Email: cgi-general@cidglobal.com",
      buttonText: "View Map"
    },
    ZH: {
      title: "新加坡辦事處",
      address: "新加坡富勒頓路 #02-01，富勒頓一號，新加坡 049213",
      phone: "電話: +65-6408-3807",
      email: "電子郵件: cgi-general@cidglobal.com",
      buttonText: "查看地圖"
    }
  };

  const currentContent = content[language];

  return (
    <section className="bg-light-beige py-16 px-4 md:px-12 w-full">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <h2 className="font-rosarivo leading-tight text-deep-blue text-2xl md:text-3xl lg:text-4xl">
            {currentContent.title}
          </h2>
          
          <p className="font-rosarivo leading-relaxed text-deep-blue text-lg md:text-xl lg:text-2xl">
            {currentContent.address}
          </p>
          
          <div className="h-px">
            <img alt="" className="block w-full h-px" src={imgLine13} />
          </div>
          
          <p className="font-rosarivo leading-relaxed text-deep-blue text-lg md:text-xl lg:text-2xl">
            {currentContent.phone}
          </p>
          
          <div className="h-px">
            <img alt="" className="block w-full h-px" src={imgLine13} />
          </div>
          
          <p className="font-rosarivo leading-relaxed text-deep-blue text-lg md:text-xl lg:text-2xl">
            {currentContent.email}
          </p>
          
          <button className="bg-dark-brown text-white font-montserrat font-semibold text-sm md:text-base px-8 md:px-12 py-3 md:py-4 hover:opacity-90 transition-opacity rounded">
            {currentContent.buttonText}
          </button>
        </div>
        
        <div className="bg-[#d9d9d9] aspect-[4/3] rounded-lg" />
      </div>
    </section>
  );
}