import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] });

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("dark antialiased", inter.className)}>
        {children}
      </body>
    </html>
  );
}
