import { ReactNode, RefObject } from "react";
import Container from "./Container";
import { WaveBGIcon } from "../../assets/icons/icons";

interface Props {
  children: ReactNode,
  pageName: string,
  ref?: RefObject<HTMLElement>,
}

const PageLayout = ({children, pageName, ref}: Props) => {
  return (  
    <>
      {/* <TopNavMenu /> */}
      <main className={`${pageName} page-main grid-layout`} ref={ref}>
        
        <Container>
          {children}
        </Container>
      </main>
      <WaveBGIcon />
    </>
  );
}
 
export default PageLayout;