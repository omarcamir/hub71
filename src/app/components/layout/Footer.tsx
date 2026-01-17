import { Link } from "@/app/i18n/navigation";

import { getLocale } from "next-intl/server";
import Logo from "../ui/Logo";
import { footerLinks, footerTerms } from "@/app/utils/paths";
import Divider from "../ui/Divider";
import SocialMedia from "../ui/SocialMedia";

const Footer = async () => {
  const isAr = (await getLocale()) === "ar";
  return (
    <footer className="bg-gray-border py-16 min-h-130" dir={isAr? "rtl": "ltr"}>
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div className="mb-6">
            <Logo size="small" />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="text-main-color uppercase min-h-40">
              <p className="text-5xl md:text-7xl lg:text-8xl">
                {isAr ? "ابقَ" : "GET"}
              </p>
              <p className="font-extrabold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                {isAr ? "على تواصل" : "IN TOUNCH"}
              </p>
            </div>
            <div className="uppercase text-xl md:text-2xl xl:text-3xl font-extrabold leading-5 md:leading-6 xl:leading-8 2xl:leading-10">
              <p>{isAr ? "اشترك" : "Subscribe"}</p>
              <p>{isAr ? "في مجلتنا" : "to our newsletter"}</p>
            </div>
          </div>
        </div>
        {footerLinks.map((section) => (
          <div
            key={section.titleE}
            className="md:col-span-2 lg:col-span-1 flex items-center gap-5 ps-2"
          >
            <Divider orientation="vertical" className="h-full min-h-30" />
            <ul className="space-y-3 text-sm">
              {section.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-main-color transition-colors uppercase font-bold wrap-break-word"
                  >
                    {isAr ? link.labelA : link.labelE}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-16 pt-8">
        <Divider orientation="horizontal" />
        <div className="flex flex-col md:flex-row justify-between items-center py-5">
          <ul className="space-y-3 text-sm flex gap-5">
            {footerTerms.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-main-color transition-colors uppercase wrap-break-word"
                >
                  {isAr ? link.labelA : link.labelE}
                </Link>
              </li>
            ))}
          </ul>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
