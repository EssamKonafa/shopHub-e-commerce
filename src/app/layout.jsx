import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from '../redux/provider';
import { AuthProvider } from "@/context/authContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>

          <AuthProvider>

            <div className="sticky w-full z-20 top-0">
              <Header />
            </div>

            <div className="component">{children}</div>
            
            <Footer/>

          </AuthProvider>

        </Providers>

      </body>
    </html>
  );
}