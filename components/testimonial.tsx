import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="px-8 xl:px-32 xl:h-[calc(100vh-64px)] flex flex-col gap-16 ">
      <div className="text-center xl:text-left">
        <h3 className="text-[#b0b0c0] text-lg font-bold uppercase leading-[34.20px]">
          nəaliyyətlərimiz
        </h3>
        <h4 className="text-[#181a31] text-5xl font-light leading-[62.40px]">
          Tələbələrimiz haqqımızda deyir
        </h4>
      </div>
      <div className="grid gap-16 xl:grid-cols-2 justify-center">
        <div className="relative bg-[#fceae3] rounded-[40px] xl:max-w-[calc(100%/1.4)] aspect-[502/633]  ">
          <Image
            src="/testimonials/s1.png"
            alt=""
            fill
            className="object-cover rounded-[40px] "
          />
        </div>
        <div className="flex gap-2 flex-col justify-center max-w-[400px]">
          <h5 className="font-bold text-2xl">Martin Watson</h5>
          <div className="flex items-end gap-2">
            <div className="h-10 w-10 relative ">
              <Image
                src={`/key-persons/flags/es.png`}
                alt=""
                fill
                className="object-cover rounded-full "
              />
            </div>
            <p>B2 course student</p>
          </div>
          <p className="text-lg">
            There is no way I could have made the same progress learning Spanish
            without using Lingua. The best part is now learning Spanish has
            become one of my biggest hobbies.
          </p>
        </div>
      </div>
    </section>
  );
}
