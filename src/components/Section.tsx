import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className = "", children }: SectionProps) {
  return (
    <section
      className={`bg-beige-light w-full pt-[80px] pb-[96px] xl:pt-[96px] xl:pb-[116px] 2xl:pt-[120px] 2xl:pb-[144px] ${className}`}
    >
      {children}
    </section>
  );
}
