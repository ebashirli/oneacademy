import Hero from "@/components/hero/hero";
import Personnel from "@/components/personnel";
import Values from "@/components/values";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="p-4 grid gap-48">
      <Hero />
      <Values />
      <Personnel />
      <Testimonial />
    </main>
  );
}
