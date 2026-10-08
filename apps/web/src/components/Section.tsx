import {ReactNode} from "react";
import {motion} from "framer-motion";
export function Section({id,title,children}:{id:string;title:string;children:ReactNode}){return <motion.section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.45,ease:"easeOut"}}><p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">{title}</p>{children}</motion.section>}
