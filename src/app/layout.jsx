import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PVPPCOE CONSULTANCY",
  description: "Welcome to VPPCOE Consultancy, where innovation meets expertise! We are a team of skilled students with diverse backgrounds in software development, design, and digital strategy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}> 
          <Header />
        {children}
        </div>
      </body>
    </html>
  );
}
