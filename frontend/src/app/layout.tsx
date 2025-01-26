import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalktuAAh Airlines", 
  description: "Welcome to Talktuah Airlines. How can we assist you?", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Header/Navigation */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">Talktuah Airlines</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">{children}</main>

        
      </body>
    </html>
  );
}