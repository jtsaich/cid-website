interface ServiceSection1Props {
  language: 'EN' | 'ZH';
}

export default function ServiceSection1({ language }: ServiceSection1Props) {
  const content = {
    EN: {
      title: "From Legacy to Sustainable Growth",
      subtitle: "We create collaborative platforms and provide diversified solutions, dedicating ourselves to support each client in pursing stable and sustainable family legacies.",
      cards: [
        {
          title: "Collaborate",
          description: "We leverage strategic resources, global networks and expert insights to empower our partners and create synergies for transformation."
        },
        {
          title: "Support",
          description: "We deliver trusted solutions tailored by experienced professionals to turn visions into action."
        },
        {
          title: "Foster",
          description: "We make sustainable growth possible through creation and access to a diverse range of investment opportunities."
        }
      ]
    },
    ZH: {
      title: "從傳承到可持續增長",
      subtitle: "我們創建合作平台並提供多元化解決方案，致力於支持每位客戶追求穩定和可持續的家族傳承。",
      cards: [
        {
          title: "協作",
          description: "我們利用戰略資源、全球網絡和專家見解來賦能我們的合作夥伴，為轉型創造協同效應。"
        },
        {
          title: "支持",
          description: "我們提供由經驗豐富的專業人士量身定制的可信解決方案，將願景轉化為行動。"
        },
        {
          title: "培育",
          description: "我們通過創造和獲取多樣化的投資機會，讓可持續增長成為可能。"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="bg-light-beige py-16 px-4 md:px-12 w-full">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto">
        <h2 className="font-rosarivo leading-relaxed text-deep-blue text-3xl md:text-4xl lg:text-5xl mb-8">
          {currentContent.title}
        </h2>
        
        <p className="font-rosarivo leading-relaxed text-deep-blue text-xl md:text-2xl lg:text-3xl mb-16 max-w-6xl">
          {currentContent.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {currentContent.cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-[#d9d9d9] aspect-square mb-8 rounded-lg" />
              <h3 className="font-rosarivo leading-tight text-deep-blue text-2xl md:text-3xl lg:text-4xl mb-4">
                {card.title}
              </h3>
              <p className="font-montserrat font-normal leading-relaxed text-deep-blue text-base md:text-lg lg:text-xl">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}