import Container from "./Container";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const imgOurOffices = "/assets/our-offices.jpg";

interface OfficeProps {
  language: "EN" | "ZH";
}

export default function Office({ language }: OfficeProps) {
  const content = {
    EN: {
      title: "OUR OFFICES",
      location: "Singapore",
      addressLabel: "Address:",
      address: "Fullerton Road #02-01, One Fullerton, Singapore 049213",
      phoneLabel: "Phone:",
      phone: "+65-6408-3807",
      emailLabel: "Mail:",
      email: "cgi-general@cidglobal.com",
    },
    ZH: {
      title: "辦公室",
      location: "新加坡",
      addressLabel: "地址：",
      address: "Fullerton Road #02-01, One Fullerton, Singapore 049213",
      phoneLabel: "電話：",
      phone: "+65-6408-3807",
      emailLabel: "郵件：",
      email: "cgi-general@cidglobal.com",
    },
  };

  const currentContent = content[language];

  return (
    <Section className="bg-beige-mid w-full">
      <Container>
        <SectionTitle className="text-blue-deep mb-12">
          {currentContent.title}
        </SectionTitle>
        <div className="col-span-19 xl:hidden mb-8 font-rosarivo text-blue-deep text-headline4 xl:text-headline3 2xl:text-headline2">
          {currentContent.location}
        </div>
        <div className="col-span-19 xl:col-span-6 flex flex-col xl:flex-col-reverse gap-y-8 xl:gap-y-10 mb-12 xl:mb-0">
          <div
            className="w-auto h-[480px] sm:h-[280px] md:h-[376px] lg:h-[400px] xl:h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${imgOurOffices})`,
            }}
          />
        </div>
        <div className="col-span-19 xl:col-span-11 xl:col-start-9 flex flex-col gap-8">
          <div className="hidden xl:block font-rosarivo text-blue-deep text-headline4 xl:text-headline3 2xl:text-headline2">
            {currentContent.location}
          </div>
          <div className="h-0.5 w-full bg-blue-deep" />

          <div className="grid grid-cols-11 gap-2 sm:grid-cols-19 sm:gap-x-0 xl:grid-cols-11 gap-y-4 2xl:gap-y-6">
            <p className="col-span-3 sm:col-span-4 xl:col-span-3 font-montserrat text-blue-deep text-body4 3xl:text-body2">
              {currentContent.addressLabel}
            </p>
            <p className="col-start-4 col-span-8 sm:col-start-5 sm:col-span-14 xl:col-start-4 xl:col-span-8 font-montserrat text-blue-deep text-body4 3xl:text-body2">
              {currentContent.address}
            </p>

            <p className="col-span-3 sm:col-span-4 xl:col-span-3 font-montserrat text-blue-deep text-body4 3xl:text-body2">
              {currentContent.phoneLabel}
            </p>
            <p className="col-start-4 col-span-8 sm:col-start-5 sm:col-span-14 xl:col-start-4 xl:col-span-8 font-montserrat text-blue-deep text-body4 3xl:text-body2">
              {currentContent.phone}
            </p>

            <p className="col-span-3 sm:col-span-4 xl:col-span-3 font-montserrat text-blue-deep text-body4 3xl:text-body2">
              {currentContent.emailLabel}
            </p>
            <p className="col-start-4 col-span-8 sm:col-start-5 sm:col-span-14 xl:col-start-4 xl:col-span-8 font-montserrat text-blue-deep text-body4 3xl:text-body2">
              {currentContent.email}
            </p>
          </div>

          <div className="h-0.5 w-full bg-blue-deep" />
        </div>
      </Container>
    </Section>
  );
}
