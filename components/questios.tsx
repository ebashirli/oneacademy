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
    <section className="grid gap-12 xl:px-32  ">
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
      <ul className="grid xl:grid-cols-2 justify-between gap-4 w-full ">
        {qas.map(({ question, answer }) => (
          <div key={question}>
            <li>
              <Accordion type="multiple">
                <AccordionItem
                  value={question}
                  key={question}
                  className={`xl:w-4/5 border rounded-[40px] p-10 py-5
                    border-b transition-colors duration-200
                  [&[data-state=open]]:bg-primary-200 
                  [&[data-state=open]]:text-white 
                    `}
                >
                  <AccordionTrigger className="text-left">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="xl:w-3/4 ">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
}
