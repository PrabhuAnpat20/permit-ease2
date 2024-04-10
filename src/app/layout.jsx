
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'

import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "@/context/authContext";

// const inter = Inter({ subsets: ["latin"] });


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Permit-Ease",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthContextProvider>
        <Navbar/>
        {children}
        </AuthContextProvider>
        
        </body>
    </html>
  );
}
