import ContactForm from "../components/form/ContactForm";
import PageLayout from "../components/layout/PageLayout";
import TextHighlight from "../components/text/TextHighlight";

const Contact = () => {

  return (
    <PageLayout pageName="contact-page">
      <header>
        <TextHighlight>
            <h1>Contact</h1>
        </TextHighlight>
      </header>
      <section className="form-section">
        <ContactForm />
      </section>
    </PageLayout>
  )
}

export default Contact;
