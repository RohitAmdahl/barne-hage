import Team from "@/components/aboutSection/Team";
import ContactPage from "@/components/contact/ContactPage";

const ContactPageRoute = () => {
  return (
    <div className="pt-32 md:pt-24 lg:pt-28">
      <ContactPage />
      <div className="pt-8 container mx-auto max-w-4xl ">
        <Team />
      </div>
    </div>
  );
};

export default ContactPageRoute;
