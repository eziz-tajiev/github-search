import DarkLightBtn from "@/components/DarkLIghtBtn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm: p-4 pt-10 sm:pt-12 transition-all">
      <div className="border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">Github Search</p>
          <DarkLightBtn />
        </section>
      </div>
    </div>
  );
}
