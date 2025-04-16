import DarkLightBtn from "./DarkLIghtBtn";

export function Header() {
  return (
    <header className="flex justify-between gap-3">
      <p className="text-xl font-semibold">Github Search</p>
      <DarkLightBtn />
    </header>
  );
}
