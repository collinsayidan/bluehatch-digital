import type {ReactNode} from "react";
export function PageHero({eyebrow,title,description,dark=false,children}:{eyebrow:string,title:ReactNode,description:string,dark?:boolean,children?:ReactNode}){
 return <section className={"page-hero"+(dark?" dark":"")}><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</div></section>;
}
