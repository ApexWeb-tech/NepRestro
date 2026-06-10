import "./globals.css";
import type { ReactNode } from "react";
import { Toaster } from 'sonner';

export const metadata = {
  title: "Restro Demo",
  description: "Nepali Restaurant Website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}