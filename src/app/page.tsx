import { Closing, Footer, WhatsAppFloat } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Steps />
        <Location />
        <Closing />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
