import SectionTitle from "@/components/Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import teamData from "./teamData";

const Team = () => {
  return (
    <section className="overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Meet Our Team"
          title="Our Dynamic Team"
          paragraph="At the heart of Bhartee AI is a team of dedicated professionals passionate about revolutionizing the recruitment process. Our diverse team brings together experts in artificial intelligence, human resources, software development, and customer support, all working collaboratively to create innovative solutions that drive success for our clients. We pride ourselves on our commitment to excellence, inclusivity, and continuous improvement, ensuring that we not only meet but exceed your hiring expectations."
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-17.5 xl:grid-cols-4">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
