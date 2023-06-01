import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

import "normalize.css";

import logo from "../assets/duckling.png";
import "./layout.css";

// NOTE: this is Vercel specific
// import Image from "next/image";

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/bjx8ola.css" />
      </head>
      <body>
        <h1>Kvauppalehti</h1>

        <img
          src={logo.src}
          className="mainLogo"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        {children}
      </body>
    </html>
  );
}
