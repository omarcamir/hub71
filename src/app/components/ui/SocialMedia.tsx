import { socialLinks } from "@/app/utils/paths";

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          href={link.href}
          key={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:text-main-color transition-all"
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
