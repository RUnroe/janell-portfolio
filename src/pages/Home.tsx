import TextHighlight from "../components/text/TextHighlight";
import PageLayout from "../components/layout/PageLayout";
import pageData from "../pageData";

import headshot from "../assets/images/headshot.jpg";
import SocialRow from "../components/socials/SocialRow";
import AnimatedCharacters from "../components/text/AnimatedTitle";
import { motion } from "framer-motion";

const Home = () => {

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <PageLayout pageName="home-page">
      
        <header className="header">
          <h1 className="text-uppercase text-large"><TextHighlight>Hello, </TextHighlight><TextHighlight> I'm Janell Rogers</TextHighlight></h1>
          
        </header>
        <motion.header 
          className="header"
          initial="hidden"
          animate="visible"
          // animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <AnimatedCharacters type="h1" text="Hello, I'm animated"/>
        </motion.header>

        <aside className="headshot">
          <img className="dropshadow border-radius" src={headshot} />
        </aside>
        
        <section className="about-content">
          <p className="headline sub-header text-center">{pageData.home.headline}</p>

          <SocialRow />

          <p className="bio text-justify">
            {pageData.home.bio}
          </p>
        </section>

    </PageLayout>
  )
}

export default Home;
