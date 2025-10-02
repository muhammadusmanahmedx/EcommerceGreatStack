import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ["300", "400", "500"],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  title: "Salsabeel Scents",
  description: "Pakistans Premium Fragrance Brand",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>      
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <AppContextProvider>
          
            {children}
            
          </AppContextProvider>
        </body>
      </html>
      </ClerkProvider>

  );
}
