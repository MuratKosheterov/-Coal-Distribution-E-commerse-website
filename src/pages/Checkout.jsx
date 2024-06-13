import React from 'react'

import uzcard from '../images/checkout/uzcard.jpg'
import humo from '../images/checkout/HUMO.png'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <div className=" mt-44 lg:mt-0  font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-6 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
                <div className="grid lg:grid-cols-3 gap-6 mt-12">
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold text-gray-800">Выберите метод оплаты</h3>
                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                            <div className="flex items-center">
                                <input type="radio" className="w-5 h-5 cursor-pointer" id="card" defaultChecked />
                                <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                    <img src={uzcard} className="w-20" alt="card1" />
                                    <img src={humo} className="w-20" alt="card1" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                                <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                                    <p>
                                        Наличный
                                    </p>
                                </label>
                            </div>
                        </div>
                        <form className="mt-8">
                            <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Имя" className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                                <input type="number" placeholder="Номер  ПК" className="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                                <input type="number" placeholder="EXP." className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                                <input type="number" placeholder="CVV" className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-6 rounded-md">
                        <h3 className="text-lg font-bold text-gray-800">Summary</h3>
                        <ul className="text-gray-800 mt-4 space-y-2">
                            <li className="flex flex-wrap gap-4 text-sm">Discount (20%) <span className="ml-auto font-bold">$4.00</span></li>
                            <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">$4.00</span></li>
                            <hr />
                            <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">$52.00</span></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8 w-full">
                    <Link to='/success' >
                        <button type="button" className="px-6 py-3.5 text-sm bg-white   hover:text-white rounded-md   hover:bg-green-500   ">Платить</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout