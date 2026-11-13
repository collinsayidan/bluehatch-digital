import Link from "next/link";
import {ArrowUpRight,CheckCircle2,BarChart3,FileSpreadsheet,Workflow,ChartNoAxesCombined,ShieldCheck,Blocks,ArrowRight} from "lucide-react";
import {DashboardMock} from "@/components/DashboardMock";
import {Banner} from "@/components/Banner";
const features=[
{icon:BarChart3,title:"Understand your business data",body:"Turn a spreadsheet into a clearer view of the numbers that matter. Explore patterns, summaries and simple visualisations.",href:"/tools/data-explorer",status:"TRY IT FREE"},
{icon:Workflow,title:"Make everyday work easier",body:"Practical business tools built around real tasks, from checking prices to understanding performance.",href:"/tools",status:"FREE TOOLS"},
{icon:Blocks,title:"Work smarter, right out of the box",body:"Thoughtfully designed templates and digital systems for teams that want a head start—without the complexity.",href:"/products",status:"COMING SOON"}
];
export default function Home(){
return <main>
  <section className="hero"><div className="shell hero-grid">
    <div className="hero-copy">
      <span className="pill">✦ The new digital product studio by Collinalitics</span>
      <h1>Your business has the data.<br/><span className="highlight">Now make it useful.</span></h1>
      <p>Beautifully simple tools that turn everyday business data into clearer decisions. Less complexity, more confidence—and room to grow.</p>
      <div className="hero-ctas"><Link className="button primary" href="/tools/data-explorer">Explore your data <ArrowUpRight size={17}/></Link><Link className="button outline" href="/platform">Discover the platform <ArrowRight size={16}/></Link></div>
      <div className="hero-proof"><span><CheckCircle2 size={14}/> Free browser-based tools</span><span><CheckCircle2 size={14}/> No account required</span><span><CheckCircle2 size={14}/> Built with business in mind</span></div>
    </div><DashboardMock/>
  </div></section>
  <section className="trust-row"><div className="shell trust-inner"><span className="trust-label">A focus on what matters</span>
    <span className="trust-item"><ShieldCheck size={18}/> Privacy-aware design</span>
    <span className="trust-item"><FileSpreadsheet size={18}/> Spreadsheet friendly</span>
    <span className="trust-item"><ChartNoAxesCombined size={18}/> Decisions, not dashboards for show</span>
    <span className="trust-item"><Blocks size={18}/> By Collinalitics</span>
  </div></section>
  <section className="section tinted" id="what-we-build"><div className="shell">
    <div className="section-head"><div className="heading-wrap"><span className="eyebrow">THE BLUEHATCH APPROACH</span><h2 className="h2">Big-business thinking.<br/>Small-business simplicity.</h2></div><p>Everything we build is designed to help you get to the useful part faster—without unnecessary software, jargon or setup.</p></div>
    <div className="feature-grid">{features.map(({icon:Icon,title,body,href,status})=><article className="feature-card" key={title}><span className={"feature-status"+(status==="TRY IT FREE"?" ready":"")}>{status}</span><div className="feature-icon"><Icon size={25} strokeWidth={1.7}/></div><h3>{title}</h3><p>{body}</p><Link href={href} className="text-link">Explore <ArrowUpRight size={15}/></Link></article>)}</div>
  </div></section>
  <section className="section"><div className="shell split-grid">
    <div className="dark-panel"><span className="eyebrow">A BETTER WAY TO START</span><h2>Clarity should not be complicated.</h2><p>Your next business insight could already be sitting in a CSV file. Our free Data Explorer helps you preview, summarise and visualise it in your browser.</p><Link href="/tools/data-explorer" className="button accent">Try Data Explorer <ArrowUpRight size={16}/></Link></div>
    <div className="dark-stats">
      <div className="stat-tile"><FileSpreadsheet size={25}/><strong>Upload a file</strong><p>Start with your own CSV—or explore our sample dataset.</p></div>
      <div className="stat-tile"><BarChart3 size={25}/><strong>See the patterns</strong><p>Summarise rows, inspect columns and chart your numbers.</p></div>
      <div className="stat-tile"><ShieldCheck size={25}/><strong>Stay in control</strong><p>In this preview, analysis runs locally in your browser.</p></div>
      <div className="stat-tile"><Workflow size={25}/><strong>Take it with you</strong><p>Export a useful summary of what you've explored.</p></div>
    </div>
  </div></section>
  <section className="section tinted"><div className="shell"><div className="section-head"><div className="heading-wrap"><span className="eyebrow">HOW IT WORKS</span><h2 className="h2">From raw data to a clearer picture.</h2></div><p>We believe good technology should guide you through the work, not give you more work to do.</p></div>
  <div className="steps"><div className="step"><span className="step-number">01 / BRING YOUR DATA</span><h3>Start where you are</h3><p>Upload a CSV or try our example data. There's nothing to install and no lengthy setup.</p></div>
  <div className="step"><span className="step-number">02 / EXPLORE WHAT MATTERS</span><h3>Discover the signal</h3><p>See helpful summaries, a visual comparison and a first pass at the numbers.</p></div>
  <div className="step"><span className="step-number">03 / TAKE THE NEXT STEP</span><h3>Make a better decision</h3><p>Download your analysis and use it to decide what deserves your attention next.</p></div></div></div></section>
  <Banner title="Ready to see your data differently?" description="Bring a simple CSV, or use sample data to explore the workspace. No sign-up and no payment needed."/>
</main>;
}