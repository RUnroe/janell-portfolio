import { FormEvent, useState } from "react";
import FormInput from "./FormInput";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

    // replace this with your own unique endpoint URL
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
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <form onSubmit={submitForm} className="contact-form form dropshadow">
      <div className="flex">
        <FormInput 
          field={"firstName"}
          value={formData.firstName}
          type={"text"}
          updateFormData={updateFormData}
          required={true}
        />
        <FormInput 
          field={"lastName"}
          value={formData.lastName}
          type={"text"}
          updateFormData={updateFormData}
          required={true}
        />
      </div>
      <FormInput 
        field={"email"}
        value={formData.email}
        type={"email"}
        updateFormData={updateFormData}
        required={true}
      />

      <FormInput 
        field={"message"}
        value={formData.message}
        type={"textarea"}
        updateFormData={updateFormData}
        required={true}
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;