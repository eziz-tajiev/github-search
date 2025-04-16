import SearchBtn from "@/components/SearchBtn";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <section className="flex flex-col gap-6 pt-6">
      <SearchBtn />
      <Card />
    </section>
  );
}
