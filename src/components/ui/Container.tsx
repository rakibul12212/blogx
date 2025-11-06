import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-[1920px] mx-auto px-2  ${className}`}>
      {children}
    </div>
  );
};
