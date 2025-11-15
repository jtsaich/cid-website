import Container from "./Container";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const imgOurStrategy = "/assets/our-strategy.jpg";
const imgLine17 = "/assets/line.svg";

interface ServiceSection2Props {
  language: "EN" | "ZH";
}

export default function ServiceSection2({ language }: ServiceSection2Props) {
  const content = {
    EN: {
      mainTitle: ["OUR STRATEGY", "Distinctive Strategy, Shared Mission."],
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
      mainTitle: ["發展策略", "獨特策略，共同願景"],
      items: [
        {
          title: ["永續發展"],
          description:
            "建立一個致力於長期發展目標的家族辦公室，旨在成為可持續的產業和投資集團。",
        },
        {
          title: ["資產配置"],
          description:
            "利用我們在私募股權投資和行業運營方面的深厚經驗，制定獨特的投資策略，實現長期穩定的資產配置。",
        },
        {
          title: ["跨世代傳承"],
          description:
            "積極培養下一代人才，促進企業和家族的可持續發展，提供全面而務實的傳承培訓。",
        },
        {
          title: ["國際平台"],
          description:
            "利用新加坡強大的金融體系和稅收優惠，建立先進的家族傳承和財富管理平台。",
        },
        {
          title: ["獨特方案"],
          description:
            "為每個家族量身定制安全、自主、靈活和獨立的資產管理解決方案。",
        },
        {
          title: ["長期夥伴關係"],
          description:
            "邀請長期信任和志同道合的合作夥伴參與多家族辦公室的發展。",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <Section className="bg-brown-dark">
      <Container>
        <SectionTitle className="text-beige-light mb-12">
          {currentContent.mainTitle[0]}
        </SectionTitle>

        <div className="col-span-19 xl:col-span-6 flex flex-col xl:flex-col-reverse gap-y-8 xl:gap-y-10 mb-14 xl:mb-0">
          <div className="font-rosarivo text-beige-light text-headline4 xl:text-headline3 3xl:text-headline2">
            {currentContent.mainTitle[1]}
          </div>
          <div
            className="w-auto h-[480px] sm:h-[280px] md:h-[376px] lg:h-[400px] xl:h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${imgOurStrategy})`,
            }}
          />
        </div>

        <div className="col-span-19 xl:col-span-11 xl:col-start-9 grid grid-cols-19 xl:grid-cols-11">
          {currentContent.items.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "col-span-9 xl:col-span-5"
                  : "col-span-9 col-start-11 xl:col-span-5 xl:col-start-7"
              }
            >
              <div className="h-0.5 w-full bg-beige-light mb-6"></div>
              <h3 className="font-rosarivo text-beige-light text-headline4 2xl:text-headline-3 mb-4">
                {item.title[0]}
                {item.title.length > 1 && (
                  <>
                    (<br /> {item.title[1]})
                  </>
                )}
              </h3>
              <p className="font-montserrat text-beige-light text-body4 3xl:text-body2 mb-12">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
