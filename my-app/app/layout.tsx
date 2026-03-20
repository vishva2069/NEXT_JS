import Navbar from "@/components/Navbar";
import "./globals.css";

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html
      lang="en">

      <body className="min-h-full bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col">
        {children}
        <div className="relative w-full flex items-center justify-center">
        <Navbar/>
       
        </div>
        </body>
    </html>
  );
}
