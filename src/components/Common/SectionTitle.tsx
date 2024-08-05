import Image from "next/image";

type propsType = {
  subTitle?: string;
  title: string;
  paragraph: string;
  center?: boolean;
  icon?: string;
};

const SectionTitle = ({
  subTitle,
  title,
  paragraph,
  icon = "/images/hero/icon-title.svg",
}: propsType) => {
  return (
    <div className="wow fadeInUp relative z-10 mb-16 text-center">
      <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
        <Image src={icon} alt="icon" width={16} height={16} />

        <span className="hero-subtitle-text"> {subTitle} </span>
      </span>
      <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
        {title}
      </h2>
      <p className="mx-auto max-w-[714px] font-medium">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
