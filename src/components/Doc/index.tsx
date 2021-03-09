import { ReactNode } from "react";
import ColorScheme from "../ColorScheme";

interface DocProps {
  children: ReactNode;
}

function Doc({ children }: DocProps) {
  return (
    <>
      <ColorScheme />
      {children}
    </>
  );
}

export default Doc;
