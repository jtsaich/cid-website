import React, { type CSSProperties } from "react";

interface SectionTitleProps {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export default function SectionTitle({
  className = "",
  children,
}: SectionTitleProps) {
  return (
    <h2
      className={`font-rosarivo whitespace-pre-wrap col-span-19 text-left text-headline3 xl:text-headline1 3xl:text-title3 ${className}`}
    >
      {children}
    </h2>
  );
}
