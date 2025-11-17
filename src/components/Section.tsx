import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className = "", children }: SectionProps) {
  return (
    <section
      className={`bg-beige-light w-full pt-[80px] pb-[96px] 2xl:pt-[96px] 2xl:pb-[116px] 3xl:pt-[120px] 3xl:pb-[144px] ${className}`}
    >
      {children}
    </section>
  );
}
