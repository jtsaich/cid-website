const imgLine17 = "/assets/line.svg";

interface ServiceSection2Props {
  language: "EN" | "ZH";
}

export default function ServiceSection2({ language }: ServiceSection2Props) {
  const content = {
    EN: {
      mainTitle: ["Distinctive Strategy,", "Shared Mission."],
      items: [
        {
          title: ["Sustainable", "Development"],
          description:
            "Established a family office with a commitment to long-term development goals, aiming to become a sustainable industrial and investment group.",
        },
        {
          title: ["Asset", "Allocation"],
          description:
            "Utilizing our deep experience in private equity investment and industry operations to develop unique investment strategies, achieving long-term and stable asset allocation.",
        },
        {
          title: ["Cross-generational", "Succession"],
          description:
            "Actively cultivating the next generation of talent for the sustainable development of businesses and families, providing comprehensive and pragmatic inheritance training.",
        },
        {
          title: ["International", "Platform"],
          description:
            "Leveraging Singapore's robust financial system and tax incentives to establish an advanced family legacy and wealth management platform.",
        },
        {
          title: ["Unique", "Solutions"],
          description:
            "Tailoring secure, autonomous, flexible, and independent asset management solutions for each family.",
        },
        {
          title: ["Long-term", "Partnerships"],
          description:
            "Inviting long-term trusted and like-minded partners to participate in the development of the multi-family office.",
        },
      ],
    },
    ZH: {
      mainTitle: ["獨特策略，", "共同使命。"],
      items: [
        {
          title: ["可持續", "發展"],
          description:
            "建立一個致力於長期發展目標的家族辦公室，旨在成為可持續的產業和投資集團。",
        },
        {
          title: ["資產", "配置"],
          description:
            "利用我們在私募股權投資和行業運營方面的深厚經驗，制定獨特的投資策略，實現長期穩定的資產配置。",
        },
        {
          title: ["跨代", "傳承"],
          description:
            "積極培養下一代人才，促進企業和家族的可持續發展，提供全面而務實的傳承培訓。",
        },
        {
          title: ["國際", "平台"],
          description:
            "利用新加坡強大的金融體系和稅收優惠，建立先進的家族傳承和財富管理平台。",
        },
        {
          title: ["獨特", "解決方案"],
          description:
            "為每個家族量身定制安全、自主、靈活和獨立的資產管理解決方案。",
        },
        {
          title: ["長期", "合作夥伴關係"],
          description:
            "邀請長期信任和志同道合的合作夥伴參與多家族辦公室的發展。",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section className="bg-dark-brown py-16 px-4 md:px-12 w-full">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left side - image placeholder and title */}
        <div className="flex flex-col gap-y-7">
          <div className="bg-[#d9d9d9] aspect-[4/5] mb-8 rounded-lg" />
          <h2 className="font-rosarivo leading-tight text-white text-3xl md:text-4xl lg:text-5xl">
            {currentContent.mainTitle[0]}
            <br />
            {currentContent.mainTitle[1]}
          </h2>
        </div>

        {/* Right side - grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {currentContent.items.map((item, index) => (
            <div key={index} className="">
              <div className="h-px bg-white mb-6">
                <img alt="" className="block w-full h-px" src={imgLine17} />
              </div>
              <h3 className="font-rosarivo leading-tight text-white text-xl md:text-2xl lg:text-3xl mb-4">
                <div className="mb-1">{item.title[0]}</div>
                <div>{item.title[1]}</div>
              </h3>
              <p className="font-montserrat font-normal leading-relaxed text-white text-sm md:text-base lg:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
