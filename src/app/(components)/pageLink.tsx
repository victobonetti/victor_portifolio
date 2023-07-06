'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageLink({to, content}:{to:string, content:string}) {

    let pathname = usePathname();
    return (
        <Link href={to}><button className={` ${pathname == to ? " font-semibold text-slate-900 dark:text-slate-100 " : " dark:text-slate-300 text-slate-700 "} hover:underline self-start lg:mt-3 mt-1 lg:ml-1`}>{content}</button></Link>
    )
}