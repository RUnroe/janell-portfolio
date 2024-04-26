import ExperienceCard from "../components/experience/ExperienceCard";
import PageLayout from "../components/layout/PageLayout";
import AnimatedHeader from "../components/text/AnimatedHeader";
import pageData from "../pageData";
import toFriendlyName from "../util/text/toFriendlyName";


const ExperienceList = () => {

  return (
    <PageLayout pageName="experience-list-page">
      <header className="header-title">
        <AnimatedHeader textList={["Experience"]} />
      </header>

      <section className="flex-list">
        {Object.entries(pageData.experience).map(([key, value]) => (
          <ExperienceCard title={toFriendlyName(key)} imageSrc={value.coverImageSrc} />
        ))}
        
      </section>
     
   </PageLayout>
  )
}

export default ExperienceList;
