import PageLayout from "../components/layout/PageLayout";

import headshot from "../assets/images/headshot.jpg";
import SocialRow from "../components/socials/SocialRow";
import AnimatedHeader from "../components/text/AnimatedHeader";
import FadeUpSection from "../components/layout/animation/FadeUpSection";
import { useEffect, useRef, useState } from "react";

import { CmsHeader, CmsImage, CmsImageGallery, CmsText } from "react-simple-cms";

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
  return (
    <PageLayout pageName="home-page">
        {textList ? 
          <AnimatedHeader textList={textList} containerClassName="header" headerClassName={"text-uppercase text-large"}/>
        : null}
        <aside className="headshot">
          <FadeUpSection delay={0.25}>
            <img className="dropshadow border-radius" src={headshot} />
            <CmsImage alt="Headshot" cmsKey="headshot"/>
          </FadeUpSection>
          <CmsImageGallery cmsKey="galleryDemo"/>
        </aside>
        
        
        <FadeUpSection sectionClassName="about-content" delay={0.5}>
          {/* <p className="headline sub-header text-center">{pageData.pages.home.headline.text}</p> */}
          <CmsHeader className="headline sub-header text-center" cmsKey="headline"/>
          <SocialRow />

          {/* <p className="bio text-justify">
            {pageData.pages.home.bio.text}
          </p> */}
          <CmsText className="bio text-justify" cmsKey="bio" />
        </FadeUpSection>

        <div className="detector" ref={containerRef}></div>

    </PageLayout>
  )
}

export default Home;
