import "./globals.css";
import { playfair } from "@/lib/fonts";

import Nav from "@/components/Nav";

export const metadata = {
  title: "MoonRay Development",
  description: "Space Age Soltuions For The Digital World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
