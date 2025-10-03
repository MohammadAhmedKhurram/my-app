import { AppWrapper } from "@/context";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbanner from "./components/Topbanner";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// (alias) const ClerkProvider: (props: Without<NextClerkProviderProps, "__unstable_invokeMiddlewareOnAuthStateChange">) => Promise<React.JSX.Element>
// import ClerkProvider

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${josefinSans.className} m-0 p-0 border-0 box-border bg-white`}
      >
        <AppWrapper>
        
          <Topbanner />
          <Navbar />
          {children}
          <Footer />
          
        </AppWrapper>
        
      </body>
    </html>
    </ClerkProvider>
    
  );
}
