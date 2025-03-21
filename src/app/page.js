import Banner from "@/components/home-page/Banner";
import CaseStudyCard from "@/components/home-page/CaseStudyCard";
// import Collaborate from "@/components/home-page/Collaborate";
// import WorkExperience from "@/components/home-page/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[#060608] px-5 min-h-screen">
      <Banner />
    
      <CaseStudyCard imgSrc="/assets/img/caseImg-1.avif"/>
      <CaseStudyCard imgSrc="/assets/img/caseImg-2.avif"/>
      <CaseStudyCard imgSrc="/assets/img/caseImg-3.avif"/>
      <CaseStudyCard imgSrc="/assets/img/caseImg-4.avif"/>
      {/* <WorkExperience /> */}
      {/* <Collaborate /> */}
    </div>
  );
}
