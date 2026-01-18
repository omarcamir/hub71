import { getTranslations } from "next-intl/server";
import SectionTitle from "../../ui/SectionTitle";
import ContactForm from "./ContactForm/ContactForm";
import ContactMotion from "../../ui/ContactMotion";

const Contact = async () => {
  const t = await getTranslations();
  return (
    <div className="py-14 px-8 bg-gray-card">
      <ContactMotion>
        <SectionTitle
          subtitle={t("DONT_MISS_UPCOMING_SESSIONS")}
          title={t("REGISTER_YOUR_INTEREST_NOW")}
        />
        <ContactForm />
      </ContactMotion>
    </div>
  );
};

export default Contact;
