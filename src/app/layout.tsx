import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import QueryClientProvider from "@/provider/QueryClientProvider";

import { Noto_Sans_Thai_Looped } from "next/font/google";
import NextAuthProvider from "@/provider/NextAuthProvider";
import CartProvider from "@/provider/CartProvider";

const notoSan = Noto_Sans_Thai_Looped({
  weight: ["400", "700"],
  subsets: ["thai"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme="ming">
      <body>
        <NextAuthProvider>
          <CartProvider>
            <QueryClientProvider>
              <div className="flex flex-col min-h-screen">
                <header className="bg-gray-200 sticky top-0"></header>
                <main className={`flex-grow bg-gray-100 ${notoSan.className}`}>
                  {children}
                </main>
                <Toaster />
              </div>
            </QueryClientProvider>
          </CartProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
