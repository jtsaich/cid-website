import React, { type CSSProperties } from "react";

interface SectionSubTitleProps {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export default function SectionSubTitle({
  className = "",
  children,
}: SectionSubTitleProps) {
  return (
    <h3
      className={`font-rosarivo whitespace-pre-wrap col-span-10 text-left text-headline4 xl:text-headline3 3xl:text-headline2 ${className}`}
    >
      {children}
    </h3>
  );
}
