import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { DeliveryPromise } from "@/components/sections/DeliveryPromise";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";

/**
 * Organiza a landing page institucional e mantém a arquitetura pronta para rotas de estudos de caso no futuro.
 * Não recebe props: as seções possuem dados e responsabilidades próprias.
 * @reutilizavel não
 */
export default function Home() {
  return (
    <div className="page-shell min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Stack />
        <Portfolio />
        <DeliveryPromise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
