import { createContext } from "react";
import type { SupportedLang } from "@/lib/utils";

export const LanguageContext = createContext<{ lang: SupportedLang; setLang: (l: SupportedLang) => void }>({
  lang: "vn",
  setLang: () => {},
});


