import React from 'react'
import { adresses } from '../data/data'
import { ImLocation2 } from "react-icons/im";
import { Link } from 'react-router-dom';

function Adress() {
  return (
    <div className=' container mx-auto py-44' >
      <h1 className=' font-semibold text-4xl' >
      Адреса складов
      </h1>
      <div className=' py-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-32 pt-44  ' >
        {
          adresses.map((item) => {
            return (
              <Link key={item.id} to={`addressDetails/${item.id}`} >
                <div key={item.id} className=' flex flex-col gap-y-10 items-center  mx-auto shadow-md p-10 rounded-lg bg-gray-300 hover:bg-green-200  cursor-pointer ' >
                  <ImLocation2 className=' text-5xl' />
                  <p>{item.adress}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Adress