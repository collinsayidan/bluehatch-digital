import Link from "next/link";
export function Brand({inverse=false}:{inverse?:boolean}){
  return <Link className="brand" href="/" aria-label="BlueHatch Digital home">
    <span className="brand-mark" aria-hidden="true"><span className="mark-a"/><span className="mark-b"/></span>
    <span><span className="brand-word" style={inverse?{color:"#fff"}:undefined}>Blue<span style={{color:inverse?"#b7f27e":"#39749b"}}>Hatch</span></span>
    <span className="brand-caption">DIGITAL · BY COLLINALITICS</span></span>
  </Link>;
}
