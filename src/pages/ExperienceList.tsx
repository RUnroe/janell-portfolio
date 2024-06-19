import { motion } from "framer-motion";
import { WaveBGIcon } from "../assets/icons/icons";
import ExperienceCard from "../components/experience/ExperienceCard";
import Container from "../components/layout/Container";
import AnimatedHeader from "../components/text/AnimatedHeader";
import pageData from "../pageData";
import toFriendlyName from "../util/text/toFriendlyName";


const ExperienceList = () => {
  
  return (

    < >
      {/* <TopNavMenu /> */}
      <motion.main className={`experience-list-page page-main grid-layout`} >
        
        <Container>
          <header className="header-title">
          <AnimatedHeader textList={["Experience"]} />
        </header>

        <section className="flex-list">
          {Object.entries(pageData.pages.experience).map(([key, value]) => (
            <motion.div>
              <ExperienceCard title={toFriendlyName(key)} urlParam={key} imageSrc={value.coverImageSrc}  />
            </motion.div>
            
          ))}
          
        </section>
        </Container>
      </motion.main>
      <WaveBGIcon />
    </>
  )
}

export default ExperienceList;
