import ContactForm from "../components/form/ContactForm";
import PageLayout from "../components/layout/PageLayout";
import TextHighlight from "../components/text/TextHighlight";
import headshot from "../assets/images/headshot.jpg";
import FadeUpSection from "../components/layout/animation/FadeUpSection";

const Contact = () => {

  return (
    <PageLayout pageName="contact-page grid-layout">
      <header>
        <TextHighlight>
            <h1>Contact</h1>
        </TextHighlight>
      </header>
      <section className="contact-info">
        <FadeUpSection delay={0.25}>
          <img className="dropshadow border-radius" src={headshot} />
        </FadeUpSection>
      </section>
      <section className="form-section">
        <ContactForm />
      </section>
    </PageLayout>
  )
}

export default Contact;
