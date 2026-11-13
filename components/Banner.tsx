import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
export function Banner({title="Your next clear decision starts here.",description="Open the free Data Explorer and see what's hiding in your spreadsheet.",href="/tools/data-explorer",cta="Try Data Explorer"}:{title?:string,description?:string,href?:string,cta?:string}){
 return <section className="section compact"><div className="shell"><div className="banner"><div><h2>{title}</h2><p>{description}</p></div><Link className="button primary" href={href}>{cta}<ArrowUpRight size={16}/></Link></div></div></section>;
}
