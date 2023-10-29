import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import LoadIn from "@/components/animations/LoadIn";

const Contact = () => {
  const info = {
    name: "Contact Us",
    heroImg:
      "https://moonray-development.s3.amazonaws.com/Public/Assets/satellite.jpg",
  };

  return (
    <LoadIn>
      <Hero service={info} />
      <ContactForm />
    </LoadIn>
  );
};

export default Contact;
