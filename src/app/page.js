import Banner from "@/components/home-page/Banner";
import CaseStudyCard from "@/components/home-page/CaseStudyCard";
// import Collaborate from "@/components/home-page/Collaborate";
// import WorkExperience from "@/components/home-page/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[#060608] px-5 min-h-screen">
      <Banner />

      <CaseStudyCard/>
      {/* <WorkExperience /> */}
      {/* <Collaborate /> */}
    </div>
  );
}
