import Footer from "@/components/footer";
import Hero from "@/components/hero/hero";
import Values from "@/components/values";

export default function Home() {
  return (
    <main className="grid gap-48">
      <Hero />
      <Values />
      {/* <Personnel /> */}
      {/* <Testimonial /> */}
      {/* <Questions /> */}
      {/* <Cto /> */}
      <Footer />
    </main>
  );
}
