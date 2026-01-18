import Image from "next/image";

const ImpactReport = () => {
  return (
    <a
      href="/Omar-Samir-Frontend-Developer-CV.pdf"
      target="_blank"
      className="h-10 flex items-center shadow shadow-gray-300"
    >
      <div className="h-10 flex items-center">
        <Image
          src="/impact-report.webp"
          alt="HUB71"
          width={300}
          height={230}
          className="h-full w-auto"
          priority
        />
      </div>
    </a>
  );
};

export default ImpactReport;
