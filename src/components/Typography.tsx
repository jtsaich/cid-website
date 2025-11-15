import React from 'react';

// Title Components - Rosarivo Regular
export const Title1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h1
    className={`font-rosarivo text-[72px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h1>
);

export const Title2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h2
    className={`font-rosarivo text-[56px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h2>
);

export const Title3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3
    className={`font-rosarivo text-[48px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h3>
);

// Headline Components - Rosarivo Regular
export const Headline1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h2
    className={`font-rosarivo text-[40px] font-normal leading-[1.4] ${className}`}
    {...props}
  >
    {children}
  </h2>
);

export const Headline2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3
    className={`font-rosarivo text-[36px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const Headline3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h4
    className={`font-rosarivo text-[32px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h4>
);

export const Headline4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h5
    className={`font-rosarivo text-[24px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h5>
);

// Subhead Component - Montserrat SemiBold
export const Subhead1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h6
    className={`font-montserrat text-[24px] font-semibold leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </h6>
);

// Body Components - Montserrat
export const Body1: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p
    className={`font-montserrat text-[20px] font-semibold leading-[1.6] ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const Body2: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p
    className={`font-montserrat text-[20px] font-normal leading-[1.6] ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const Body3: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p
    className={`font-montserrat text-[16px] font-semibold leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const Body4: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p
    className={`font-montserrat text-[16px] font-normal leading-[1.5] ${className}`}
    {...props}
  >
    {children}
  </p>
);
