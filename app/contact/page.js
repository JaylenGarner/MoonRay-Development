import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const service = {
    name: "Contact Us",
    heroImg:
      "https://moonray-development.s3.amazonaws.com/Public/Assets/satellite.jpg",
  };

  return (
    <>
      <Hero service={service} />
      <ContactForm />
    </>
  );
};

export default Contact;
