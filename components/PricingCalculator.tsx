"use client";
import {useState} from "react";
import {Calculator,Info} from "lucide-react";
function gbp(n:number){return new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",maximumFractionDigits:2}).format(n);}
function num(v:string){const n=Number(v);return Number.isFinite(n)&&n>=0?Math.min(n,1000000):0;}
export default function PricingCalculator(){
const [materials,setMaterials]=useState("15"),[hours,setHours]=useState("2"),[hourly,setHourly]=useState("20"),[overheads,setOverheads]=useState("8"),[margin,setMargin]=useState(35);
const cost=num(materials)+num(hours)*num(hourly)+num(overheads),price=cost/(1-margin/100),profit=price-cost,markup=cost?profit/cost*100:0;
return <div className="calc-grid">
<div className="calc-panel"><span className="eyebrow">YOUR INPUTS</span><h2 style={{marginTop:16}}>Work out a smarter starting price.</h2>
<div className="field"><label htmlFor="materials">Direct materials or costs (£)</label><input id="materials" type="number" min="0" max="1000000" step=".01" value={materials} onChange={e=>setMaterials(e.target.value)}/></div>
<div className="field"><label htmlFor="hours">Hours spent per sale</label><input id="hours" type="number" min="0" max="1000000" step=".25" value={hours} onChange={e=>setHours(e.target.value)}/></div>
<div className="field"><label htmlFor="hourly">Hourly labour value (£)</label><input id="hourly" type="number" min="0" max="1000000" step=".5" value={hourly} onChange={e=>setHourly(e.target.value)}/></div>
<div className="field"><label htmlFor="overheads">Allocated overheads per sale (£)</label><input id="overheads" type="number" min="0" max="1000000" step=".5" value={overheads} onChange={e=>setOverheads(e.target.value)}/></div>
<div className="field"><label htmlFor="margin">Target profit margin <strong style={{float:"right"}}>{margin}%</strong></label><input className="input-range" id="margin" type="range" min="5" max="80" step="1" value={margin} onChange={e=>setMargin(Number(e.target.value))}/></div>
</div>
<div className="calc-result"><span className="eyebrow">YOUR ESTIMATE</span><div style={{marginTop:34}}><small>Suggested selling price per sale</small><strong>{gbp(price)}</strong><span className="pill dark"><Calculator size={13}/> Based on a {margin}% target margin</span></div>
<div className="calc-stat-grid"><div className="calc-stat"><small>Estimated total cost</small><strong>{gbp(cost)}</strong></div><div className="calc-stat"><small>Profit per sale</small><strong>{gbp(profit)}</strong></div><div className="calc-stat"><small>Target margin</small><strong>{margin}%</strong></div><div className="calc-stat"><small>Markup on cost</small><strong>{markup.toFixed(1)}%</strong></div></div>
<p style={{fontSize:12,color:"#b1c2d6",lineHeight:1.85,marginTop:32}}><Info size={14} style={{verticalAlign:"middle",marginRight:7}}/>The tool divides total unit cost by (1 − target margin). VAT, tax, payment fees and market demand are not included unless you've added them to your costs.</p></div>
</div>;
}
