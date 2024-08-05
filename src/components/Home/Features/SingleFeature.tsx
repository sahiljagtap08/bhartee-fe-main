import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
        <span
          className={`features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100 ${
            feature?.rotate && "rotate-180"
          }`}
        ></span>
        <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
          <Image src={feature.icon} alt="icon" width={32} height={32} />
        </span>
        <h3 className="mb-4 text-lg font-semibold text-white">
          {feature.title}
        </h3>
        <p className="font-medium">{feature.description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
