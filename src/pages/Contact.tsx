import ContactForm from "../components/form/ContactForm";
import PageLayout from "../components/layout/PageLayout";
import headshot from "../assets/images/headshot_2.jpg";
import FadeUpSection from "../components/layout/animation/FadeUpSection";
import AnimatedHeader from "../components/text/AnimatedHeader";
import IconText from "../components/socials/IconText";
import pageData from "../pageData";
import { IconComponentType, MailIcon, PhoneIcon } from "../assets/icons/icons";

const Contact = () => {

  return (
    <PageLayout pageName="contact-page">
      <header className="header-title">
        <AnimatedHeader textList={["Contact Me"]} />
      </header>
     <section className="contact-info">
      <FadeUpSection delay={0.1}>
        <img className="dropshadow border-radius" src={headshot} />
      </FadeUpSection>
      <FadeUpSection delay={0.3}>
        <h2 className="mb-0 text-uppercase">Janell Rogers</h2>
        {/* <IconText IconComponent={(PhoneIcon as unknown) as IconComponentType} text={pageData.contact.phoneNumber}/> */}
        <IconText IconComponent={(MailIcon as unknown) as IconComponentType} text={pageData.contact.email}/>
      </FadeUpSection>
     </section>
      
      <section className="form-section">
        <FadeUpSection delay={0.4}>
          <ContactForm />
        </FadeUpSection>
      </section>
      
    </PageLayout>
  )
}

export default Contact;
