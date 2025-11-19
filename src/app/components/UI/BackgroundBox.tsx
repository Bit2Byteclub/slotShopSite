import { cn } from "@/utils";
import { ReactNode } from "react";

export default function BackgroundBox({height,width,content}:{height:number;width:number;content:ReactNode})
{

    return <div className={cn("h-[400px] w-[400px] rounded-2xl drop-shadow-lg bg-white p-8", `h-[${height}px]`,`w-[${width}px]`)}> {content} </div>
}  
