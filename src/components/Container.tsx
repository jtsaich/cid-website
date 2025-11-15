import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className = "",
  children,
}: ContainerProps) {
  return (
    <div
      className={`max-w-container-sm sm:max-w-container-md md:max-w-container-lg lg:max-w-container-xl xl:max-w-container-2xl 2xl:max-w-container-3xl 3xl:max-w-container-4xl mx-auto grid grid-cols-19 gap-0 ${className}`}
    >
      {children}
    </div>
  );
}
