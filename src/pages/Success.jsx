import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
    return (
        <div className=' mx-auto container py-56 items-center text-center ' >
            <Link to='/' >
            <h1 className='   font-semibold text-4xl border-2 py-5 ' >
                Ваша заказ ободрено
            </h1>
            </Link>
        </div>
    )
}

export default Success