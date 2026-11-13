import {PageHero} from "@/components/PageHero";
import {ArrowUpRight,Calculator,FileSpreadsheet,BrainCircuit,LayoutDashboard} from "lucide-react";
import Link from "next/link";
export const metadata={title:"Free Tools"};
const items=[
{icon:FileSpreadsheet,title:"CSV Data Explorer",desc:"Upload a CSV, view summary metrics, compare groups and download an analysis. Runs in your browser.",href:"/tools/data-explorer",active:true},
{icon:Calculator,title:"Pricing & Profit Calculator",desc:"Build a starting selling price around your costs and desired profit margin.",href:"/tools/pricing-calculator",active:true},
{icon:BrainCircuit,title:"AI Business Analyst",desc:"Planned: ask questions about your data and receive contextual explanations.",href:"#",active:false},
{icon:LayoutDashboard,title:"Dashboard Builder",desc:"Planned: create and save reusable reporting dashboards.",href:"#",active:false}
];
export default function Tools(){return <main><PageHero eyebrow="FREE BUSINESS TOOLS" title={<>Less spreadsheet friction.<br/>More useful answers.</>} description="Start exploring with free, practical tools. No account required. We show you exactly what each tool can do today."/>
<section className="section tinted"><div className="shell"><div className="tiles-grid">{items.map(({icon:Icon,title,desc,href,active})=><article className="tool-tile" key={title}><div className="tile-top"><span className="feature-icon" style={{margin:0}}><Icon size={23}/></span><span className={"status-label"+(active?" live":"")}>{active?"AVAILABLE NOW":"PLANNED"}</span></div><h3>{title}</h3><p>{desc}</p>{active?<Link href={href} className="text-link">Launch tool <ArrowUpRight size={15}/></Link>:<span className="muted" style={{fontSize:12}}>Under development</span>}</article>)}</div></div></section></main>}