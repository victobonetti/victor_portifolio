import Link from "next/link"

export default function Logo() {
    return (
        <Link href={'/'}>
            <div className="text-center lg:text-start">
                <h1 className="font-bold text-2xl dark:text-slate-100 text-slate-900">Portifólio</h1>
                <p className="text-xs dark:text-slate-300 text-slate-700">By Víctor Bonetti Pegoraro</p>
            </div>
        </Link>
    )
}