import React from 'react'
import { BsTruck } from "react-icons/bs";
import { GiStockpiles } from "react-icons/gi";
import { GiHumanPyramid } from "react-icons/gi";

function Statistic() {
    return (
        <div className=" bg-black  py-10 ">
            <div className="mx-auto  px-6 lg:px-8 text-white">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-start lg:grid-cols-3 ">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-300">Число сотрудников по всего Республики</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">13</dd>
                        <BsTruck className='  text-5xl' />

                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-300">Число складов по всего Республики</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">6</dd>
                        <GiStockpiles  className='  text-5xl' />

                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-300">Число сотрудников по всего Республики</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">74</dd>
                        <GiHumanPyramid className='  text-5xl'  />

                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Statistic