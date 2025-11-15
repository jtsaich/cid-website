import Header from "./Header";
import Introduction from "./Introduction";
import ServiceSection1 from "./ServiceSection1";
import ServiceSection2 from "./ServiceSection2";
import Office from "./Office";
import Footer from "./Footer";

interface HomePageProps {
  language: "EN" | "ZH";
  onLanguageChange: (lang: "EN" | "ZH") => void;
}

export default function HomePage({
  language,
  onLanguageChange,
}: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <Introduction language={language} />
      <ServiceSection1 language={language} />
      <ServiceSection2 language={language} />
      <Office language={language} />
      <Footer />
    </div>
  );
}
