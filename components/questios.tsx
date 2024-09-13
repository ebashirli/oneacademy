import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qas = [
  { question: "How can I know my level of knowledge?" },
  { question: "Do I need to buy materials for lessons?" },
  { question: "Can I do it individually or only in a group?" },
  { question: "Are you adjusting to the student's schedule?" },
  { question: "What is the maximum group size?" },
  {
    question: "How the first lesson with teacher will be?",
    answer:
      "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
  },
];

export default function Questions() {
  return (
    <section className="grid gap-12 px-16 xl:px-32 ">
      <div className="grid xl:grid-cols-2 items-end ">
        <div className="text-center xl:text-left">
          <h3 className="text-[#b0b0c0] text-lg font-bold uppercase leading-[34.20px]">
            more info
          </h3>
          <h4 className="text-[#181a31] text-5xl font-light leading-[62.40px]">
            Common questions
          </h4>
        </div>
      </div>
      <ul className="grid xl:grid-cols-2 justify-between ">
        {qas.map(({ question, answer }) => (
          <li key={question} className="w-4/5 border">
            <Accordion type="single" collapsible>
              <AccordionItem value={question} key={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent className="w-3/4">{answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </section>
  );
}
