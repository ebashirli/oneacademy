import Image from "next/image";

const values = [
  {
    icon: "/icons/chat.svg",
    title: "Speaking clubs",
    description:
      "In our school you will practice your speaking skills and just get a lot of positive emotions!",
  },
  {
    icon: "/icons/send.svg",
    title: "Quality control",
    description:
      "A huge work has been done with the teachers and their work has been monitored thoroughly.",
  },
  {
    icon: "/icons/paper.svg",
    title: "Progress analysis",
    description:
      "The CEF of Reference has been used at our school. It allows to control our students’ success in studying.",
  },
];

export default function Values() {
  return (
    <section className="grid text-center gap-20 justify-center ">
      <div>
        <h3 className="text-[#b0b0c0] text-lg font-bold uppercase leading-[34.20px]">
          why choose us
        </h3>
        <h4 className="text-[#181a31] text-5xl font-light leading-[62.40px]">
          Our values
        </h4>
      </div>

      <ul className="grid gap-32 justify-center xl:grid-cols-3">
        {values.map(({ icon, title, description }) => (
          <li key={title} className="max-w-72 grid gap-12">
            <div className="aspect-square relative h-28 mx-auto">
              <Image src={icon} alt="" fill className="object-contain " />
            </div>
            <div>
              <h4 className="font-medium leading-9 text-2xl">{title}</h4>
              <p className="text-[#66667f] text-lg leading-[34.20px] ">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

//
// text-lg
// font-light
// font-['Axiforma']
// leading-[34.20px]
