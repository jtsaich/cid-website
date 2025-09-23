interface IntroductionProps {
  language: "EN" | "ZH";
}

export default function Introduction({ language }: IntroductionProps) {
  const content = {
    EN: {
      title: ["Diversified", "Professional Resources"],
      subtitle: "CID Multi-Family Office",
      description:
        "Assisting families in completing unique and flexible long-term plans to achieve sustainable development goals.",
    },
    ZH: {
      title: ["多元化", "專業資源"],
      subtitle: "CID 多家族辦公室",
      description: "協助家族完成獨特且靈活的長期規劃，實現可持續發展目標。",
    },
  };

  const currentContent = content[language];

  return (
    <section className="bg-light-beige relative min-h-screen flex flex-col items-center justify-center px-4 py-16 w-full">
      <div className="absolute bg-[#d9d9d9] inset-0" />

      <div className="relative z-10 max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto text-center space-y-8">
        <h1 className="font-rosarivo leading-tight text-deep-blue text-4xl md:text-6xl lg:text-7xl">
          <div className="mb-2">{currentContent.title[0]}</div>
          <div>{currentContent.title[1]}</div>
        </h1>

        <h2 className="font-rosarivo leading-relaxed text-deep-blue text-2xl md:text-4xl lg:text-5xl">
          {currentContent.subtitle}
        </h2>

        <p className="font-rosarivo leading-relaxed text-deep-blue text-lg md:text-2xl lg:text-3xl max-w-6xl mx-auto">
          {currentContent.description}
        </p>
      </div>
    </section>
  );
}
