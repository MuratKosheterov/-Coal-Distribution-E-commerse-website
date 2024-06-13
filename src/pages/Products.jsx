import React from 'react'
import { products } from '../data/data'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';

function Products() {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UZS',
    })


    const dispatch = useDispatch();

    return (
        <div className=' container mx-auto py-44   '>
            <h1 className=' font-semibold text-4xl' >
                Наши продукты
            </h1>
            <div className=' py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ' >
                {
                    products.map((product) => {
                        return (
                            <Link key={product.id} to={`productsDetails/${product.id}`} >
                                <div key={product.id} className='gap-10 hover:scale-110 duration-500 ease-out mx-auto relative    ' >
                                    <div  className=' absolute top-0 left-0 w-full h-[70%] opacity-0 hover:opacity-100 duration-500 ease-out text-center flex items-center justify-center  ' >
                                        <FiShoppingCart className=' text-5xl text-white ' />
                                    </div>
                                    <img className=' h-[180px] w-full hover:border-l-blue-900 rounded-xl ' src={product.image} alt='ecommerse' />
                                    <div className=' flex flex-col  items-start justify-between mt-10  ' >
                                        <h1 className='  text-lg' > Марка: {product.mark}</h1>
                                        <p className=' text-gray-500' > Цена: {formatter.format(product.price)} </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products