import Container from "./Container";
import Section from "./Section";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

const imgCollaborate = "/assets/our-values-collaborate.jpg";
const imgSupport = "/assets/our-values-support.jpg";
const imgFoster = "/assets/our-values-foster.jpg";

interface ServiceSection1Props {
  language: "EN" | "ZH";
}

export default function ServiceSection1({ language }: ServiceSection1Props) {
  const content = {
    EN: {
      sectionTitle: "OUR VALUES",
      title: "From Legacy to Sustainable Growth",
      subtitle:
        "We create collaborative platforms and provide diversified solutions, dedicating ourselves to support each client in pursing stable and sustainable family legacies.",
      cards: [
        {
          image: imgCollaborate,
          title: "Collaborate",
          description:
            "We create collaborative platforms and provide diversified solutions, dedicating ourselves to support your family in pursing stable and sustainable legacies.",
        },
        {
          image: imgSupport,
          title: "Support",
          description:
            "We deliver trusted solutions tailored by experienced professionals to turn visions into action.",
        },
        {
          image: imgFoster,
          title: "Foster",
          description:
            "We make sustainable growth possible through creation and access to a diverse range of investment opportunities.",
        },
      ],
    },
    ZH: {
      sectionTitle: "核心價值",
      title: "傳承立本，永續為志",
      subtitle:
        "透過整合平台、專業服務，以及前瞻策略，我們幫助家族守護傳承價值，並實現跨越世代的成長。",
      cards: [
        {
          image: imgCollaborate,
          title: "整合協作",
          description:
            "我們打造整合性的交流平台，連結多家族與專業夥伴，促進洞見分享、協作互動與綜效創造。",
        },
        {
          image: imgSupport,
          title: "專業支持",
          description:
            "我們提供量身訂製的全方位專業方案，立志作為家族的信任橋樑，把願景化為策略與行動。",
        },
        {
          image: imgFoster,
          title: "厚植栽培",
          description:
            "我們協助家族擴展事業版圖，同時培育下一代人才，讓家族企業與未來領袖並肩成長、蓬勃共榮。",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <Section className="bg-beige-light">
      <Container className="space-y-12 mb-12">
        {/* Section Title */}
        <SectionTitle className="font-rosarivo text-blue-deep col-span-19">
          {currentContent.sectionTitle}
        </SectionTitle>

        {/* Title and Subtitle Container */}
        <div className="col-span-19 flex flex-col gap-4">
          <SectionSubTitle className="font-rosarivo text-blue-deep">
            {currentContent.title}
          </SectionSubTitle>
          <p className="font-montserrat 3xl:font-rosarivo text-blue-deep text-body2 3xl:text-headline4">
            {currentContent.subtitle}
          </p>
        </div>
      </Container>
      <div className="max-w-container-sm mx-auto sm:max-w-none overflow-hidden sm:overflow-x-auto xl:overflow-hidden sm:pl-[calc((100vw-456px)/2)] md:pl-[calc((100vw-608px)/2)] lg:pl-[calc((100vw-760px)/2)] xl:pl-0">
        <div className="grid grid-cols-19 gap-0">
          {/* Cards Grid - Each card takes 5 columns with 2 column gaps */}
          <div className="col-span-19 grid grid-cols-19 sm:grid-cols-31 sm:w-[calc(31_*_24px+((100vw-456px)/2))] md:grid-cols-27 md:w-[calc(27_*_32px+((100vw-608px)/2))] lg:w-[calc(27_*_40px+((100vw-760px)/2))] xl:grid-cols-19 xl:w-auto xl:max-w-container-2xl 2xl:max-w-container-3xl 3xl:max-w-container-4xl xl:mx-auto gap-y-12 sm:grid-flow-col xl:grid-flow-row sm:pr-[calc((100vw-456px)/2)] md:pr-[calc((100vw-608px)/2)] lg:pr-[calc((100vw-760px)/2)] xl:pr-0">
            {currentContent.cards.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col gap-8 ${
                  index === 0
                    ? "col-span-19 sm:col-span-9 md:col-span-7 xl:col-span-5"
                    : index === 1
                    ? "col-span-19 sm:col-span-9 sm:col-start-12 md:col-span-7 md:col-start-11 xl:col-span-5 xl:col-start-8"
                    : "col-span-19 sm:col-span-9 sm:col-start-23 md:col-span-7 md:col-start-21 xl:col-span-5 xl:col-start-15"
                }`}
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <h4 className="font-rosarivo text-blue-deep text-headline4 3xl:text-headline3 break-words">
                    {card.title}
                  </h4>
                  <p className="font-montserrat text-blue-deep text-body4 3xl:text-body2 break-words">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
