import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyBedMap | Mapa de compatibilidad sexual",
  description:
    "Descubre tu perfil sexual, tus deseos, tus límites y tu compatibilidad íntima real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}