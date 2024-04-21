import PageLayout from "../components/layout/PageLayout";
import pageData from "../pageData";

import headshot from "../assets/images/headshot.jpg";
import SocialRow from "../components/socials/SocialRow";
import AnimatedHeader from "../components/text/AnimatedHeader";
import { motion } from "framer-motion";
import FadeUpSection from "../components/layout/animation/FadeUpSection";

const Home = () => {

  return (
    <PageLayout pageName="home-page">
      
        {/* <header className="header">
          <h1 className="text-uppercase text-large"><TextHighlight>Hello, </TextHighlight><TextHighlight> I'm Janell Rogers</TextHighlight></h1>
        </header> */}
        <AnimatedHeader textList={["Hello,", "I'm Janell Rogers"]} containerClassName="header" headerClassName={"text-uppercase text-large"}/>

        <aside className="headshot">
          <img className="dropshadow border-radius" src={headshot} />
        </aside>
        
        <FadeUpSection sectionClassName="about-content">
          <p className="headline sub-header text-center">{pageData.home.headline}</p>

          <SocialRow />

          <p className="bio text-justify">
            {pageData.home.bio}
          </p>
        </FadeUpSection>

        

    </PageLayout>
  )
}

export default Home;
