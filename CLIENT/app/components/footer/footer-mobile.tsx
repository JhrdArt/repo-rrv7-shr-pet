import { useState } from "react";
import Button from "../ui/button";
import { ChevronUp } from "lucide-react";
import { footerData } from "~/utils/data";
import { styles } from "~/styles";
import { useProductType } from "~/context/useProductType";

type FooterTitle = (typeof footerData.sections)[number]["title"];

const FooterMobileWidth: React.FC = (props) => {
  const [sectionView, setSectionView] = useState<FooterTitle>("");

  const handleSectionView = (title: FooterTitle) => {
    setSectionView((prev) => (prev === title ? "" : title));
  };

  return (
    <div className="grid-cols-1 text-black text-pretty max-md:grid hidden w-full mx-auto ">
      {footerData.sections.map((section, index) =>
        section.title === "Localiza tu tienda" ? (
          <div
            className="col-span-1 space-y-2 content-start pb-2 border-b border-b-gray-300 w-full"
            key={index}
          >
            <a
              href={section.url}
              className={`w-full flex justify-between gap-2 hover:underline hover:underline-offset-2 font-semibold`}
            >
              {section.title}
              {section.icon}
            </a>
            <p className={`${styles.p} leading-6`}>{section.description}</p>
          </div>
        ) : (
          <div className="col-span-1 content-start w-full relative" key={index}>
            <Button
              ariaLabel={`${section.title} button`}
              size="full"
              className={` cursor-pointer border-b border-b-gray-300 px-0 relative-10`}
              onClick={() => handleSectionView(section.title)}
            >
              <div className="w-full flex justify-between px-4 0">
                <span className="col-span-1">{section.title}</span>
                <ChevronUp
                  className={`duration-300 transform className="col-span-1 p-2" ${
                    sectionView === section.title ? "rotate-180 " : ""
                  }`}
                />
              </div>
            </Button>
            {section.title === "Guia de compra" ? (
              <ul
                className={`space-y-2 pl-5 pb-2 ${
                  sectionView === section.title
                    ? "h-fit translate-y-0 visible  duration-100"
                    : "invisible -translate-y-full h-0  duration-0"
                }`}
              >
                {section.links?.map((link, index) => (
                  <li className={`${styles.p}`} key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ) : section.title === "Contacto" ? (
              section.contactInfo && (
                <ul
                  className={`space-y-2 pl-5 pb-2 ${
                    sectionView === section.title
                      ? "h-fit translate-y-0 visible  duration-100"
                      : "invisible -translate-y-full h-0  duration-0"
                  }`}
                  key={index}
                >
                  <li className={`${styles.p}`}>
                    <a href={section.contactInfo.email.url}>
                      {section.contactInfo.email.label}
                    </a>
                  </li>
                  <li className={`${styles.p}`}>
                    <a href={section.contactInfo.phone.url}>
                      {section.contactInfo.phone.label}
                    </a>
                  </li>
                  <li className={`${styles.p}`}>
                    {section.contactInfo.serviceHours.weekdays}
                  </li>
                  <li className={`${styles.p}`}>
                    {section.contactInfo.serviceHours.sunday}
                  </li>
                  <li className={`${styles.p}`}>
                    <a href={section.contactInfo.email.url}>
                      {section.contactInfo.email.label}
                    </a>
                  </li>
                </ul>
              )
            ) : (
              <ul
                className={`space-y-2 pl-5 pb-2 ${
                  sectionView === section.title
                    ? "h-fit translate-y-0 visible  duration-100"
                    : "invisible -translate-y-full h-0  duration-0"
                }`}
                key={index}
              >
                {section.links?.map((link, index) => (
                  <li className={`${styles.p}`} key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default FooterMobileWidth;
