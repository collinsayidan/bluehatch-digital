import Link from "next/link";
import {Brand} from "./Brand";
export function Footer(){
  return <footer className="site-footer">
    <div className="shell footer-main">
      <div className="footer-brand"><Brand inverse/><p>Practical tools, thoughtful software and better business decisions. A digital product studio by Collinalitics Ltd.</p></div>
      <div className="footer-col"><h4>Explore</h4><Link href="/platform">Our platform</Link><Link href="/tools/data-explorer">Data Explorer</Link><Link href="/tools/pricing-calculator">Pricing calculator</Link><Link href="/products">Digital products</Link></div>
      <div className="footer-col"><h4>Company</h4><Link href="/about">About BlueHatch</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link><a href="https://www.collinalitics.co.uk/" target="_blank" rel="noopener noreferrer">Collinalitics ↗</a></div>
      <div className="footer-col"><h4>Information</h4><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms of use</Link><Link href="/contact">Business enquiries</Link></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Collinalitics Ltd. BlueHatch Digital is a developing product brand.</span><span>Built for clarity. Designed for progress. <Link href="/legal/terms">Preview terms</Link></span></div>
  </footer>;
}
