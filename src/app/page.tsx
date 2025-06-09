import {HeroSection} from "@/components/hero/hero";
import {PromoBar} from "@/components/promo-bar/promo-bar";

export default function Home() {
  return (
    <div>
      <main style={{height: "3000px"}}>
        <HeroSection />

        <PromoBar />
      </main>
    </div>
  );
}
