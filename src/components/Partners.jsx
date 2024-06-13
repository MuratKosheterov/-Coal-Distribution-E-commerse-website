import React from 'react'
import { partner } from '../data/data'


function Partners() {
    return (
        <section className="bg-white dark:bg-gray-900 pt-20 container mx-auto ">
            <div className="pt-8 lg:p-16 mx-auto  px-4">
                <h2 className="my-8 lg:mb-16 text-3xl  font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl uppercase ">Наши потребители</h2>
                <div className="grid grid-cols-1   text-gray-500 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-gray-400">
                    {
                        partner.map((item)=> {
                            return (
                                <div key={item.id} className="flex md:mt-10 flex-col items-center py-10 md:py-0 ">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full" />
                                    <p className="mt-4 text-lg font-semibold  uppercase text-center   line-clamp-2  ">{item.title}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>

    )
}

export default Partners