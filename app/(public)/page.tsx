import { Footer } from "@/components/layouts/landing/Footer";
import { About } from "../../components/layouts/landing/About";
import Hero from "../../components/layouts/landing/Hero";
import Services from "../../components/layouts/landing/Services";
import LandingHeader from "@/components/navigation/landing/desktop/Header";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Footer />
      </main>
    </>
  )
}