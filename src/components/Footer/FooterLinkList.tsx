import { FooterLink } from "@/types/footerLink";
const FooterLinkList = ({ title, links }: { title: string; links: FooterLink[] }) => {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-white">{title}</h3>

      <ul className="flex flex-col gap-3.5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "nofollow noopenner" : ""}
              className="font-medium duration-300 ease-in hover:text-white"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
