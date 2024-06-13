import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/data'
import { addToCart } from '../redux/slices/productSlice'


function ProductDetaills() {

  const navigate = useNavigate()
  const { id } = useParams()
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  const dispatch = useDispatch()

  return (
    <div className=' container mx-auto py-44  '  >
      <h1 className=' font-semibold text-4xl' >
        Наши продукты
      </h1>
      <div className='py-16' >

        <section className="text-gray-700 body-font  bg-white">
          <div className=" py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 rounded-xl " src={product.image} alt="ecommerce" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Марка: {product.mark}</h1>
                <div className="flex mb-4">

                </div>
                <p className="text-gray-900 text-3xl title-font font-medium mb-1" >
                  Кило-каллория: {product.kcal}
                </p>
                <p className="text-gray-900 text-3xl title-font font-medium mb-1 py-6 " >
                  Цена: {product.price}
                </p>
                <p className="text-gray-900 text-3xl title-font font-medium mb-1" >
                  Золъност: {product.ash} %
                </p>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full' >
                  <button onClick={() => dispatch(addToCart(product))} className=' px-5 py-2 border-2 mt-10  w-full   hover:bg-green-400 hover:text-white duration-300 ease-out  ' >Покупать</button>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className=' border mt-10 w-full  py-3 hover:bg-yellow-400 hover:text-white duration-300 ease-out' >Назад</button>
        </section>

      </div>
    </div>
  )
}

export default ProductDetaills