import { ReactNode } from "react";
import "./root.css";

export const metadata = {
  title: "FootballInfo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="overflow-hidden max-h-screen">
        <main className="h-full flex flex-col flex-grow bg-black overflow-hidden bg-[url('/soccer-ball-goal.jpg')] bg-cover bg-center justify-items-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
