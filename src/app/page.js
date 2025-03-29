import Shooting  from "@/components/ui/shooting-stars";
import Stars  from "@/components/ui/stars-background";
import Banner from "@/components/home-page/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#060608] px-5 min-h-screen relative">
      {/* Background Effects */}
      <Stars />
      <Shooting />

      {/* Main Content */}
      <Banner />
      <Footer />
    </main>
  );
}