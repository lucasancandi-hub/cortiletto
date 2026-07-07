import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export default function Container({ as: Tag = "div", children, className = "" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
