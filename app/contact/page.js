import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const info = {
    name: "Contact Us",
    heroImg:
      "https://moonray-development.s3.amazonaws.com/Public/Assets/satellite.jpg",
  };

  return (
    <>
      <Hero service={info} />
      <ContactForm />
    </>
  );
};

export default Contact;
