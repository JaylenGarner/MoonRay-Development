import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Calendly from "@/components/Calendly";

const Contact = () => {
  const info = {
    name: "Contact Us",
    heroImg:
      "https://moonray-development.s3.amazonaws.com/Public/Assets/satellite.jpg",
  };

  return (
    <>
      <Hero service={info} />

      <div className="flex justify-center items-center space-x-16">
        <ContactForm />
        <Calendly />
      </div>
    </>
  );
};

export default Contact;
