import { Roboto, Playfair, Playfair_Display_SC } from "next/font/google";

export const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});
