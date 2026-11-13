"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {ArrowUpRight, Menu, X} from "lucide-react";
import {Brand} from "./Brand";
const links=[{name:"Platform",href:"/platform"},{name:"Free tools",href:"/tools"},{name:"Digital products",href:"/products"},{name:"Pricing",href:"/pricing"},{name:"About",href:"/about"}];
export function Header(){
  const [open,setOpen]=useState(false);
  const path=usePathname();
  return <>
    <div className="announcement">A NEW WAY TO WORK SMARTER <b>·</b> BlueHatch is in early preview <Link href="/platform">What we&apos;re building ↗</Link></div>
    <header className="site-header">
      <div className="shell nav-shell">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(item=><Link key={item.href} href={item.href} aria-current={path===item.href?"page":undefined} style={path===item.href?{color:"#147c79"}:undefined}>{item.name}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="button primary small" href="/tools/data-explorer">Launch workspace <ArrowUpRight size={15}/></Link>
          <button className="mobile-toggle" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?"Close navigation":"Open navigation"}>{open?<X size={21}/>:<Menu size={21}/>}</button>
        </div>
      </div>
      {open&&<nav id="mobile-nav" className="mobile-menu" aria-label="Mobile navigation">
        {links.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.name}</Link>)}
        <Link href="/tools/data-explorer" onClick={()=>setOpen(false)}>Open data workspace ↗</Link>
      </nav>}
    </header>
  </>;
}
