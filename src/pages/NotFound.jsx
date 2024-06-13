import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className=' pt-44  h-screen' >
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Страница не найдено</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">К сожалению, мы не смогли найти страницу, которую вы ищете.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to='/' className="rounded-sm  px-3.5 py-2.5 text-sm font-semibold  shadow-sm   border">На главный странице</Link>
          </div>
        </div>
      </main>

    </div>
  )
}

export default NotFound