'use client'
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImageData } from "next/image"
import Image from "next/image"
import { useState } from "react"
import './carrousel.css'

export default function Carrousel({ images }: { images: StaticImageData[] }) {

    const [active, setActive] = useState(0);

    const increment = () => {
        console.log(active)
        if (images.length - 1 == active) {
            setActive(0);
        } else {
            setActive(active + 1)
        }
    }

    const decrement = () => {
        console.log(active)
        if (active <= 0) {
            setActive(images.length - 1);
        } else {
            setActive(active - 1)
        }
    }

    return (
        < div className=' h-full relative w-full md:w-1/2 items-center ' >
            <div className=' h-full relative'>
                {
                    images?.map((img, i) => {
                        return (<Image key={i} className={`${active == i ? " block " : " hidden "} h-full object-fit enterAnimation object-left-top mb-4 md:mb-0 `} src={img} alt="Plano de fundo" />)
                    })


                }

                {
                    images.length > 1 &&

                    <div className=" bg-red-400 h-full w-full absolute top-0 flex items-center justify-between">
                        <div onClick={() => decrement()} className=' z-100 shadow rounded-full bg-slate-800 border border-slate-800 cursor-pointer select-none hover:scale-105 transition-all text-slate-200'>  <FontAwesomeIcon className="text-2xl" icon={faArrowCircleLeft} /></div>
                        <div onClick={() => increment()} className=' z-100 shadow rounded-full bg-slate-800 border border-slate-800 cursor-pointer select-none hover:scale-105 transition-all  text-slate-200'><FontAwesomeIcon className="text-2xl" icon={faArrowCircleRight} /></div>
                    </div>
                }

            </div>

        </div >
    )
}