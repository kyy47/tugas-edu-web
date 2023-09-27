import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-monst">
      <Header />
      <Hero />
      <div className="h-[80vh]"></div>
      <Footer />
    </div>
  );
}
