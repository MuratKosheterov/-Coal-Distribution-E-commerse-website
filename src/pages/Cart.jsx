import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreament } from '../redux/slices/productSlice'
import { Link } from 'react-router-dom'


function Cart() {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UZS',
    })

    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.productReducer)
    const { total } = useSelector((state) => state.productReducer)


    return (
        <div className=' container mx-auto  py-44'>
            <h1 className=' font-semibold text-4xl' >
                Ваша корзинка
            </h1>
            <div className='py-16' >
                <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    <div className="mx-auto  px-4 2xl:px-0">
                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6">
                                    {
                                        data.map((item) => {
                                            return (
                                                <div key={item.id} >
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img className="w-28 h-28 rounded-md" src={item.image} alt="" />
                                                            <div className=" pl-5">
                                                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.mark}</p>
                                                            </div>
                                                        </div>
                                                        <div className=' flex items-center justify-between gap-x-10' >
                                                            <button onClick={() => dispatch(decreament(item))} className=' bg-gray-400 px-5 rounded-md' >-</button>
                                                            <p>{item.count}</p>
                                                            <button onClick={() => dispatch(increament(item))} className=' bg-gray-400 px-5 rounded-md' >+</button>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <p className="text-md font-medium text-gray-900 dark:text-white">{formatter.format(item.price * item.count)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">Чек заказа</p>
                                    <div className="space-y-4">
                                        <div className="space-y-2 ">
                                            <dl className="flex items-center justify-between gap-4  ">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Сумма товарь</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{formatter.format(total)}</dd>
                                            </dl>
                                            <dl className="flex items-center justify-between gap-4 mb-5">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Вид оплата</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">Перевод через ПК</dd>
                                            </dl>
                                        </div>
                                        <Link  to='/checkout' >
                                        <button   className=' w-full py-2 border mt-10  hover:bg-green-500 hover:text-white ' >Подвердить</button>
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Cart