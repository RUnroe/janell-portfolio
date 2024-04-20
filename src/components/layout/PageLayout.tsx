import { ReactNode } from "react";
import TopNavMenu from "../navigation/TopNavMenu";
import Container from "./Container";

interface Props {
  children: ReactNode,
  pageName: string,
}

const PageLayout = ({children, pageName}: Props) => {
  return (  
    <>
      <TopNavMenu />
      <main className={pageName}>
        <Container>
          {children}
        </Container>
      </main>
    </>
  );
}
 
export default PageLayout;