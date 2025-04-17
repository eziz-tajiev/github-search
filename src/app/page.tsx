"use client";

import SearchBtn from "@/components/SearchBtn";
import { Card } from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("tony");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section className="flex flex-col gap-6 pt-6">
      <SearchBtn
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        onSubmit={handleSubmit}
      />
      <Card userName={userName} />
    </section>
  );
}
