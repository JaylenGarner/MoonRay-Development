import "./globals.css";
import { playfair } from "@/lib/fonts";

import Nav from "@/components/Nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
