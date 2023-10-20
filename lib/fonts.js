import { Roboto, Playfair_Display_SC, Work_Sans } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
