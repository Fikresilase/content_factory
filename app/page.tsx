import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import AffiliateBanner from "./components/AffiliateBanner";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-background-dark text-slate-100 antialiased selection:bg-primary selection:text-white min-h-screen">
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <AffiliateBanner />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
