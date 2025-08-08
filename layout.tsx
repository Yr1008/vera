import "./globals.css";
export const metadata = { title: "Vera", description: "Viral UGC coach" };
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
