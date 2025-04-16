import { Theme } from "@/utils/types";
import DarkLightBtn from "./DarkLIghtBtn";

interface Props {
  currentTheme: Theme;
}

export function Header({ currentTheme }: Props) {
  return (
    <header className="flex justify-between gap-3">
      <p className="text-xl font-semibold dark:text-white">Github Search</p>
      <DarkLightBtn currentTheme={currentTheme} />
    </header>
  );
}
