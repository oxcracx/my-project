import Banner from "@/components/home-page/Banner";
import CaseStudyCard from "@/components/home-page/CaseStudyCard";

export default function Home() {
  return (
    <div className="bg-[#060608] px-5 h-full">
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-4">
        <CaseStudyCard imgSrc="/assets/img/caseImg-1.avif" />
        <CaseStudyCard imgSrc="/assets/img/caseImg-2.avif" />
        <CaseStudyCard imgSrc="/assets/img/caseImg-3.avif" />
        <CaseStudyCard imgSrc="/assets/img/caseImg-4.avif" />
      </div>
    </div>
  );
}
