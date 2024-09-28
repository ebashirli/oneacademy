import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qas = [
  { question: "Bilik səviyyəmi necə öyrənə bilərəm?" },
  { question: "Dərslər üçün material almalıyam?" },
  { question: "Fərdi və ya yalnız qrup halında edə bilərəm?" },
  { question: "Tələbə cədvəlinə uyğunlaşırsınız?" },
  { question: "Maksimum qrup ölçüsü nədir?" },
  {
    question: "Müəllimlə ilk dərs necə olacaq?",
    answer:
      "Sınaq dərsinin sonuna kimi siz bu növ dərsin sizə uyğun olub-olmadığını özünüz müəyyən edə biləcəksiniz. Təcrübələrimizə görə tələbələrin əksəriyyəti dərslərin üstünlüklərini qiymətləndirir və bizimlə öyrənməyə qərar verir.",
  },
];

export default function Questions() {
  return (
    <section className="grid gap-12 xl:px-32  ">
      <div className="grid xl:grid-cols-2 items-end ">
        <div className="text-center xl:text-left">
          <h3 className="text-[#b0b0c0] text-lg font-bold uppercase leading-[34.20px]">
            əlavə məlumat
          </h3>
          <h4 className="text-[#181a31] text-5xl font-light leading-[62.40px]">
            Ən çox soruşulanlar
          </h4>
        </div>
      </div>
      <ul className="grid xl:grid-cols-2 justify-between gap-4 w-full p-4 ">
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
