import Container from "./Container";

const imgIntroductionBg = "/assets/introduction-bg.jpg";

interface IntroductionProps {
  language: "EN" | "ZH";
}

export default function Introduction({ language }: IntroductionProps) {
  const content = {
    EN: {
      title: "Weaving Your Family Values\nInto a Timeless Legacy",
      titleMobile: "Weaving\nYour Family Values\nInto a\nTimeless Legacy",
      description:
        "Partnering with visionary entrepreneurs, we help families craft an everlasting heritage, harmonizing family values, enduring businesses, and treasured wealth for generations to come.",
    },
    ZH: {
      title: "傳承家族價值，成就永恆基業",
      titleMobile: "傳承家族價值，\n成就永恆基業",
      description:
        "我們與遠見卓識的創業家並肩同行，協助家族構築歷久彌新的傳承藍圖，\n融合家族精神、常青基業與世代財富，為後代奠定和諧永續的未來。",
    },
  };

  const currentContent = content[language];

  return (
    <div
      className="flex w-full h-[720px] sm:h-[480px] xl:h-[600px] 2xl:h-[720px] 3xl:h-[900px] pt-[120px] pb-[144px] bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: `url(${imgIntroductionBg})`,
      }}
    >
      <Container className="space-y-2">
        {/* Title - Mobile: left-aligned, 4 lines; Desktop: center-aligned, 2 lines */}
        <h1 className="font-rosarivo text-beige-light whitespace-pre-wrap col-span-19 md:col-span-15 md:col-start-3 text-left sm:text-center text-headline3 xl:text-headline1 3xl:text-title3">
          <span className="sm:hidden">{currentContent.titleMobile}</span>
          <span className="hidden sm:inline">{currentContent.title}</span>
        </h1>

        {/* Description */}
        <p className="font-montserrat text-beige-light whitespace-pre-wrap col-span-19 md:col-span-15 md:col-start-3 text-left sm:text-center text-body4 3xl:text-body2">
          {currentContent.description}
        </p>
      </Container>
    </div>
  );
}
