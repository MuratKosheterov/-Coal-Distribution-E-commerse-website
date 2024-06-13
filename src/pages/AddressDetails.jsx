import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { adresses } from '../data/data';

function AddressDetails() {

    const navigate = useNavigate()
    const { id } = useParams()
    const address = adresses.find((item) => {
        return item.id === parseInt(id);
    });

    return (
        <div className=' container mx-auto py-44' >
            <h1 className=' font-semibold text-4xl' >
                Информация о склада
            </h1>
            <div className=' flex flex-wrap  items-center  gap-32 py-16 ' >
                <div className=' mx-auto md:mx-0' >
                    <img className=' rounded-full  size-96' src={address.image} alt="" />
                </div>
                <div className='mx-auto md:mx-0  ' >
                    <p>  <span className=' text-xl text-gray-400 font-medium' >Начальник склада</span>:     {address.boss}</p>
                    <p className=' py-10' >  <span className=' text-xl text-gray-400 font-medium' >Телефон</span>:     {address.phone}</p>
                    <p>  <span className=' text-xl text-gray-400 font-medium' >Адресс</span>:     {address.adress}</p>
                    <button onClick={() => navigate(-1)} className=' border  mt-16 px-6 py-2 rounded-md hover:scale-105  duration-300 ease-out ' >Назад</button>
                </div>
            </div>
            <div></div>

        </div>
    )
}

export default AddressDetails