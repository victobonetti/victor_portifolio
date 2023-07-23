import Link from "next/link";

export default function PageLink({to, content}:{to:string, content:string}) {

    return (
        <Link target="_self" href={to}><button className={` ${false ? " font-semibold text-slate-900 dark:text-slate-100 " : " dark:text-slate-300 text-slate-700 "} hover:underline self-start lg:mt-3 mt-1 lg:ml-1`}>{content}</button></Link>
    )
}