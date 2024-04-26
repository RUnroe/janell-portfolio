import { FormEvent, useState } from "react";
import FormInput from "./FormInput";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formDisabled, setFormDisabled] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });



  const updateFormData = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  }

  const formatMessageWithName = () => {
    let formattedMessage = `${formData.firstName} ${formData.lastName} wrote: \n\n ${formData.message}`;
    return formattedMessage;
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    // This will prevent page refresh
    event.preventDefault();


    // Form carry email post
    fetch("https://formcarry.com/s/S0f-9erRpJ4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email: formData.email, message: formatMessageWithName() })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
        //Let overlay animation finish before changing input field color (disabled)
        setTimeout(() => { 
          setFormDisabled(true);
        }, 2000);
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <form onSubmit={submitForm} className="contact-form form dropshadow">
      {submitted ? 
      <motion.div className="form-overlay" initial={{opacity: 0}} animate={{opacity: 1}}>
        <p>Your message has been sent,<br/> thank you for contacting me!</p>
      </motion.div> : null}
      
      <div className="flex">
        <FormInput 
          field={"firstName"}
          value={formData.firstName}
          type={"text"}
          updateFormData={updateFormData}
          required={true}
          disabled={formDisabled}
        />
        <FormInput 
          field={"lastName"}
          value={formData.lastName}
          type={"text"}
          updateFormData={updateFormData}
          required={true}
          disabled={formDisabled}
        />
      </div>
      <FormInput 
        field={"email"}
        value={formData.email}
        type={"email"}
        updateFormData={updateFormData}
        required={true}
        disabled={formDisabled}
      />

      <FormInput 
        field={"message"}
        value={formData.message}
        type={"textarea"}
        updateFormData={updateFormData}
        required={true}
        disabled={formDisabled}
      />
      
      
      <button type="submit" disabled={formDisabled}>Send</button>

      
    </form>
  );
}

export default ContactForm;