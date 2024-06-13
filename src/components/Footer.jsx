import React from 'react'
import logo from '../images/logo.svg'

function Footer() {
  return (
      <footer className="bg-white   border-t  m-4 dark:bg-gray-800  ">
          <div className="w-full   p-4 md:flex md:items-center md:justify-between container mx-auto">
              <span className="text-md text-gray-800 sm:text-center dark:text-gray-400"> <p>
                ООО "Кумир Таъминот" филиал Республики Каракалпакистан  </p> </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline">Contact</a>
                  </li>
              </ul>
          </div>
      </footer>
  )
}

export default Footer