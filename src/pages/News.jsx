import React from 'react'
import { PiSmileySadFill } from "react-icons/pi";

function News() {
    return (
        <div className=' py-44 container mx-auto' >
            <h1 className=' font-semibold text-4xl' >
                Новости
            </h1>
            <div className=' py-16'  >
                <h1>
                    Пока нету новости ... <PiSmileySadFill />
                </h1>
            </div>
        </div>
    )
}

export default News