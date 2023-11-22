import { LayoutStyles } from "@/styles/layoutStyles";
import { ReactNode, FunctionComponent } from "react";

export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <LayoutStyles>
      {children}
    </LayoutStyles>
  );
};

export default Layout;
