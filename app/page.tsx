import TaxLawHero from "@/components/TaxLawHero";

import ResearchMadeIntelligent from "@/components/ResearchMadeIntelligent";
import WhoIsLexiTaxFor from "@/components/WhoIsLexiTaxFor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <main>
      <Navbar/>
      <TaxLawHero />
     
      <ResearchMadeIntelligent />
      <WhoIsLexiTaxFor />
      <Footer />
    </main>
  );
}
