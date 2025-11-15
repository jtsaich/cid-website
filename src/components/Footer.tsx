import Container from "./Container";

const imgLogoCgi = "/assets/Logo-CGI-light.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-deep w-full">
      <Container className="h-[200px] text-beige-light">
        <div className="col-span-19 flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-y-6">
          <div className="w-auto h-[56px]">
            <img
              alt="CID Global Investments Logo"
              className="block w-full h-full object-contain"
              src={imgLogoCgi}
            />
          </div>

          <div className="font-montserrat text-center text-body4 3xl:text-body2">
            © 2025 CID Global Investment Pte Ltd. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
