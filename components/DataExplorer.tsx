"use client";
import {useMemo,useRef,useState} from "react";
import {ArrowDownToLine,ArrowUpRight,Check,ChevronDown,FileSpreadsheet,FileUp,Info,RotateCcw,ShieldCheck,Table2,TrendingUp} from "lucide-react";

type Dataset={headers:string[];rows:string[][];name:string;truncated:boolean};
const SAMPLE=`Month,Category,Revenue,Orders
Jan,Consulting,12400,35
Jan,Products,7300,113
Jan,Services,8400,78
Feb,Consulting,13700,41
Feb,Products,8900,137
Feb,Services,9100,86
Mar,Consulting,14800,44
Mar,Products,10100,156
Mar,Services,8600,82
Apr,Consulting,16900,49
Apr,Products,11600,171
Apr,Services,10200,96
May,Consulting,18100,54
May,Products,12900,188
May,Services,11200,102
Jun,Consulting,19400,57
Jun,Products,14500,201
Jun,Services,12600,114`;
function parseCSV(text:string):{headers:string[];rows:string[][];truncated:boolean}{
 const input=text.replace(/^\uFEFF/,"");const records:string[][]=[];let row:string[]=[],field="",quoted=false;
 for(let i=0;i<input.length;i++){
  const c=input[i];
  if(c==='"'){if(quoted&&input[i+1]==='"'){field+='"';i++;}else{quoted=!quoted;}}
  else if(c===","&&!quoted){row.push(field);field="";}
  else if((c==="\n"||c==="\r")&&!quoted){row.push(field);field="";if(row.some(v=>v.trim()!==""))records.push(row);row=[];if(c==="\r"&&input[i+1]==="\n")i++;if(records.length>10001)break;}
  else field+=c;
 }
 if(quoted)throw Error("The CSV has an unclosed quoted value.");
 if(field.length||row.length){row.push(field);if(row.some(v=>v.trim()!==""))records.push(row);}
 if(records.length<2)throw Error("Your CSV needs a header row and at least one data row.");
 const headers=records[0].map((h,i)=>h.trim()||"Column "+(i+1));
 if(headers.length>50)throw Error("Please use a file with 50 columns or fewer.");
 if(new Set(headers).size!==headers.length)throw Error("Please give every column a unique name.");
 const raw=records.slice(1);const rows=raw.slice(0,10000).map(r=>headers.map((_,i)=>(r[i]||"").trim()));
 return {headers,rows,truncated:raw.length>10000};
}
function numeric(v:string){const s=v.trim().replace(/[£$€,%\s]/g,"").replace(/,/g,"");if(!s)return null;const n=Number(s);return Number.isFinite(n)?n:null;}
function currency(value:number){return new Intl.NumberFormat("en-GB",{maximumFractionDigits:2}).format(value);}
function signed(value:number){return value<0?"−"+currency(Math.abs(value)):currency(value);}
function escapeCSV(v:string){return '"'+v.replace(/"/g,'""')+'"';}
function downloadCSV(name:string,rows:string[][]){const str="\uFEFF"+rows.map(r=>r.map(escapeCSV).join(",")).join("\r\n");const blob=new Blob([str],{type:"text/csv;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
export default function DataExplorer(){
 const [data,setData]=useState<Dataset|null>(null),[error,setError]=useState(""),[group,setGroup]=useState(""),[metric,setMetric]=useState("");
 const [dragging,setDragging]=useState(false);const input=useRef<HTMLInputElement>(null);
 const numericHeaders=useMemo(()=>data?.headers.filter((h,i)=>{const n=data.rows.map(r=>numeric(r[i])).filter((v):v is number=>v!==null);return n.length>0&&n.length>=data.rows.length*.6;})||[],[data]);
 const categories=useMemo(()=>data?.headers.filter(h=>!numericHeaders.includes(h))||[],[data,numericHeaders]);
 const measure=metric||numericHeaders[0]||"",dimension=group||categories[0]||data?.headers[0]||"";
 const analysis=useMemo(()=>{
  if(!data)return null;
  const mi=data.headers.indexOf(measure),gi=data.headers.indexOf(dimension),nums=mi>=0?data.rows.map(r=>numeric(r[mi])).filter((v):v is number=>v!==null):[];
  const sum=nums.reduce((a,b)=>a+b,0),avg=nums.length?sum/nums.length:0;
  const grouped=new Map<string,number>();
  if(mi>=0&&gi>=0){for(const row of data.rows){const n=numeric(row[mi]);if(n===null)continue;const k=row[gi]||"(blank)";grouped.set(k,(grouped.get(k)||0)+n);}}
  const groups=[...grouped].sort((a,b)=>b[1]-a[1]).slice(0,8);
  return {sum,avg,valid:nums.length,groups,top:groups[0]};
 },[data,measure,dimension]);
 function loadText(text:string,name:string){try{const parsed=parseCSV(text);const next={...parsed,name};setData(next);setGroup("");setMetric("");setError("");}catch(e){setError(e instanceof Error?e.message:"Could not read this CSV.");}}
 async function readFile(file?:File){if(!file)return;if(file.size>5*1024*1024){setError("Use a CSV smaller than 5 MB.");return;}if(!file.name.toLowerCase().endsWith(".csv")){setError("Please choose a .csv file.");return;}try{loadText(await file.text(),file.name);}catch{setError("Unable to open that file.");}}
 function reset(){setData(null);setError("");setMetric("");setGroup("");if(input.current)input.current.value="";}
 function exportSummary(){if(!data||!analysis)return;const lines=[["BlueHatch Data Explorer","Summary"],["Dataset",data.name],["Rows analysed",String(data.rows.length)],["Selected metric",measure],["Selected category",dimension],["Valid numeric values",String(analysis.valid)],["Total",String(analysis.sum)],["Average",String(analysis.avg)],[],["Group","Total"],...analysis.groups.map(([k,v])=>[k,String(v)])];downloadCSV("bluehatch-analysis-summary.csv",lines);}
 return <div className="workspace">
  <aside className="workspace-sidebar"><div className="workspace-header"><h2>Data source</h2><span className="status-label live">LOCAL PREVIEW</span></div>
   <div className={"upload-box"+(dragging?" drag":"")} onDragOver={e=>{e.preventDefault();setDragging(true);}} onDragLeave={()=>setDragging(false)} onDrop={e=>{e.preventDefault();setDragging(false);void readFile(e.dataTransfer.files[0]);}}>
    <FileUp size={29}/><p><strong>Drop your CSV here</strong><br/>or select a file to start exploring</p><label htmlFor="upload-csv">Choose CSV file</label><input id="upload-csv" ref={input} type="file" accept=".csv,text/csv" onChange={e=>void readFile(e.target.files?.[0])}/><div className="mini-text" style={{marginTop:13}}>Up to 5 MB · 10,000 rows analysed</div>
   </div>
   <button className="button ghost wide" type="button" style={{marginTop:12}} onClick={()=>loadText(SAMPLE,"sample-business-sales.csv")}>Try sample dataset <ArrowUpRight size={15}/></button>
   {error&&<p role="alert" style={{color:"#a93640",fontSize:12,lineHeight:1.6}}>{error}</p>}
   {data&&<div className="side-list">
     <div className="field"><label htmlFor="metric-col">Metric to analyse</label><select id="metric-col" value={measure} onChange={e=>setMetric(e.target.value)}>{numericHeaders.length?numericHeaders.map(h=><option key={h}>{h}</option>):<option value="">No numeric column detected</option>}</select></div>
     <div className="field"><label htmlFor="group-col">Group results by</label><select id="group-col" value={dimension} onChange={e=>setGroup(e.target.value)}>{(categories.length?categories:data.headers).map(h=><option key={h}>{h}</option>)}</select></div>
     <div className="mini-text"><strong>{data.name}</strong><br/>{data.rows.length.toLocaleString("en-GB")} rows · {data.headers.length} columns{data.truncated?" · file truncated to 10,000 rows":""}</div>
     <button type="button" className="button outline wide" onClick={reset}><RotateCcw size={15}/> Clear dataset</button>
   </div>}
   <div className="side-note" style={{marginTop:19}}><ShieldCheck size={16} style={{verticalAlign:"middle",marginRight:5}}/><strong>Privacy first</strong><p style={{margin:"8px 0 0"}}>This prototype analyses the selected file in your browser. CSV contents are not uploaded to a server or AI provider. Avoid using sensitive personal information in demo tools.</p></div>
  </aside>
  <section className="workspace-main" aria-live="polite">
   {!data?<div className="data-empty"><FileSpreadsheet size={47} strokeWidth={1.25}/><h3>Your numbers, made clearer.</h3><p>Choose a CSV file on the left or try our sample dataset to see the workspace in action.</p><span className="pill gray"><Info size={13}/> No sign-in or paid plan needed</span></div>:
    <><div className="analyzer-header"><div><span className="eyebrow">DATA WORKSPACE</span><h3>Dataset overview</h3><p>{data.name}{data.truncated?" · first 10,000 rows only":""}</p></div><div className="analyzer-actions"><button type="button" className="button outline small" onClick={exportSummary}><ArrowDownToLine size={14}/> Download summary</button></div></div>
     <div className="kpi-grid"><div className="kpi-box"><span>Rows analysed</span><strong>{currency(data.rows.length)}</strong><small>{data.headers.length} columns found</small></div><div className="kpi-box"><span>{measure||"Metric"} · total</span><strong>{analysis&&measure?signed(analysis.sum):"—"}</strong><small>{analysis?.valid||0} valid numeric values</small></div><div className="kpi-box"><span>{measure||"Metric"} · average</span><strong>{analysis&&measure?signed(analysis.avg):"—"}</strong><small>Mean of valid values</small></div></div>
     {analysis&&measure&&analysis.groups.length>0?<div className="chart-card"><h4>{measure} by {dimension}</h4>{analysis.groups.map(([label,value])=>{const max=Math.max(1,...analysis.groups.map(x=>Math.abs(x[1])));return <div className="bar-row" key={label}><label title={label}>{label}</label><div className="bar-track"><div className="bar-fill" style={{width:(Math.abs(value)/max*100)+"%"}}/></div><span className="bar-value">{signed(value)}</span></div>;})}<p className="mini-text">Top eight groups by total. Values are not assumed to be currency.</p></div>:<div className="side-note"><Info size={16}/> No numeric columns suitable for aggregation were detected. You can still preview the dataset below.</div>}
     {analysis&&analysis.top&&measure&&<div className="insight-box"><h4><TrendingUp size={16}/> A useful first observation</h4><p><strong>{analysis.top[0]}</strong> is the largest displayed group for <strong>{measure}</strong>, with a total of <strong>{signed(analysis.top[1])}</strong>. This is a simple calculated summary, not AI-generated advice.</p></div>}
     <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginTop:23}}><h4 style={{margin:0,fontSize:14}}>Preview your data</h4><span className="mini-text"><Table2 size={13} style={{verticalAlign:"middle"}}/> First 12 rows</span></div>
     <div className="table-scroll"><table className="data-table"><thead><tr>{data.headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{data.rows.slice(0,12).map((row,i)=><tr key={i}>{row.map((value,j)=><td key={j}>{value||"—"}</td>)}</tr>)}</tbody></table></div>
     <p className="fineprint" style={{margin:"16px 0 0"}}>Check column definitions, missing data and units before acting on this summary. Large files are limited to the first 10,000 rows.</p>
    </>}
  </section>
 </div>;
}
