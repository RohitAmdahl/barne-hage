import Team from "@/components/aboutSection/Team";
import ContactPage from "@/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page! Barnehage",
  description: "contact page barnehage",
};

const ContactPageRoute = () => {
  return (
    <div>
      <ContactPage />
      <div className="pt-8 container mx-auto max-w-4xl ">
        <Team />
      </div>
    </div>
  );
};

export default ContactPageRoute;
