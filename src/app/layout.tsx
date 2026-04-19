import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/QueryProvider";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieApp",
  description: "Explora y guarda tus películas favoritas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <QueryProvider>
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
