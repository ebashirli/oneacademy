import Hero from "@/components/hero/hero";
import Personnel from "@/components/personnel";
import Values from "@/components/values";
import Testimonial from "@/components/testimonial";
import Questions from "@/components/questios";
import Cto from "@/components/cto";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="p-4 grid gap-48">
      <Hero />
      <Values />
      <Personnel />
      <Testimonial />
      <Questions />
      <Cto />
      <Footer />
    </main>
  );
}
