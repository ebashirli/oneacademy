import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Cto() {
  return (
    <section className="py-100px flex flex-col justify-center items-center gap-12 ">
      <div className="text-center grid gap-4">
        <h2 className="text-[#181a31] text-5xl  leading-[62.40px]">
          Get a free trial lesson today
        </h2>
        <p className="text-[#b0b0c0] text-lg font-medium leading-[34.20px] p-8">
          Start fulfilling your language dreams with our school
        </p>
      </div>
      <div className="grid xl:flex gap-3 xl:w-1/4 w-full ">
        <Input
          className="bg-[#f8fafe] p-7 rounded-3xl grow border-none "
          placeholder="Enter your email"
        />
        <Button className="bg-primary-200 text-white rounded-3xl p-7">
          Send
        </Button>
      </div>
    </section>
  );
}
