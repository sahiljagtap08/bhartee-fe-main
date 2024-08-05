import { Client } from "@/types/client";
import Image from "next/image";

const SingleClient = ({ client }: { client: Client }) => {
  return (
    <div className="swiper-slide !w-auto">
      <a href="/#" className="static flex h-9 w-auto items-center">
        <Image
          src={client.image}
          alt="client"
          style={{ width: "auto", height: "auto", verticalAlign: "middle" }}
          width={80}
          height={36}
        />
      </a>
    </div>
  );
};

export default SingleClient;
