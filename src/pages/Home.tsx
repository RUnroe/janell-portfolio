import PageLayout from "../components/layout/PageLayout";
import pageData from "../pageData";

import headshot from "../assets/images/headshot.jpg";
import SocialRow from "../components/socials/SocialRow";
import AnimatedHeader from "../components/text/AnimatedHeader";
import FadeUpSection from "../components/layout/animation/FadeUpSection";
import { useEffect, useRef, useState } from "react";

import { CmsHeader, HeaderType } from "react-simple-cms";

const Home = () => {
  const containerRef = useRef(null);
  const [textList, setTextList] = useState<string[] | null>(null);

  useEffect(() => {
    let width = 0;
    if(containerRef && containerRef.current) {
      width = containerRef.current["offsetWidth"];
    }
    if(width) setTextList(getTextListByScreenSize(width));
  }, [containerRef]);

  

  const getTextListByScreenSize = (width: number) => {
    if(width < 350) {
      return ["Hello,", "I'm", "Janell", "Rogers"];
    }
    if(width < 500) {
      return ["Hello, I'm", "Janell Rogers"];
    }
    return ["Hello,", "I'm Janell Rogers"];
  }
  const [tempText, setTempText] = useState("Yo");
  return (
    <PageLayout pageName="home-page">

{/* !!Temp!! */}
      <input type="text" onChange={e => setTempText(e.target.value)} value={tempText} />
      <CmsHeader inputs={{text: tempText, type: HeaderType.h1}} />
{/* ---!!Temp!! */}
      
        {/* <header className="header">
          <h1 className="text-uppercase text-large"><TextHighlight>Hello, </TextHighlight><TextHighlight> I'm Janell Rogers</TextHighlight></h1>
        </header> */}
        {textList ? 
          <AnimatedHeader textList={textList} containerClassName="header" headerClassName={"text-uppercase text-large"}/>
        : null}
        <aside className="headshot">
          <FadeUpSection delay={0.25}>
            <img className="dropshadow border-radius" src={headshot} />
          </FadeUpSection>
        </aside>
        
        
        <FadeUpSection sectionClassName="about-content" delay={0.5}>
          <p className="headline sub-header text-center">{pageData.home.headline}</p>

          <SocialRow />

          <p className="bio text-justify">
            {pageData.home.bio}
          </p>
        </FadeUpSection>

        <div className="detector" ref={containerRef}></div>

    </PageLayout>
  )
}

export default Home;
