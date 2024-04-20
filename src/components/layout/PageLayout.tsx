import { ReactNode } from "react";
import TopNavMenu from "../navigation/TopNavMenu";
import Container from "./Container";
import { WaveBGIcon } from "../../assets/icons/icons";

interface Props {
  children: ReactNode,
  pageName: string,
}

const PageLayout = ({children, pageName}: Props) => {
  return (  
    <>
      <TopNavMenu />
      <main className={`${pageName} page-main grid-layout`}>
        
        <Container>
          {children}
        </Container>
      </main>
      <WaveBGIcon />
    </>
  );
}
 
export default PageLayout;