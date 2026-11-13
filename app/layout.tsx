import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
export const metadata:Metadata={
  title:{default:"BlueHatch Digital | Better tools. Clearer decisions.",template:"%s | BlueHatch Digital"},
  description:"A digital product studio by Collinalitics. Explore your business data, try simple tools and discover practical software for growing businesses.",
  robots:{index:false,follow:false},
  icons:{icon:"/favicon.svg"},
  openGraph:{title:"BlueHatch Digital",description:"Better tools. Clearer decisions.",type:"website"},
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en-GB"><body><Header/>{children}<Footer/></body></html>;
}
