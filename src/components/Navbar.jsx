import React from 'react'
import logo from '../images/logo.svg'
import { links } from '../data/data'
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleMenu } from '../redux/slices/navbarSlice';
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {

    const { amount } = useSelector((state) => state.productReducer)
    const { isMenuOpen } = useSelector((state) => state.navbarReducer)

    const dispatch = useDispatch()

    return (
        <div className='py-2 border fixed mx-auto w-full bg-white shadow-lg z-50'>
            <div className='container mx-auto  flex  items-center justify-between' >
                <div className=' flex items-center justify-between gap-x-10' >
                    <div onClick={() => dispatch(toggleMenu())} className=' block md:hidden'  >
                        {
                            isMenuOpen ?
                                <AiOutlineClose className=' cursor-pointer' />
                                :
                                <GiHamburgerMenu className=' cursor-pointer' />
                        }
                    </div>

                    <Link to='/' >
                        <img src={logo} alt="logo" className=' size-16 cursor-pointer' />
                    </Link>
                </div>

                <ul className={`absolute md:static bg-white w-full py-5 md:py-0 shadow-md md:shadow-none md:w-auto  left-0  flex flex-col md:flex-row  items-center justify-between gap-10 duration-300 ease-out  ${ isMenuOpen ? ' top-20 ' : ' top-[-490px] ' } `} >
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className=' hover:scale-110 duration-100 ease-in cursor-pointer hover:font-semibold' >
                                    <Link to={link.url}>{link.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=' flex items-center justify-between space-x-8' >
                    <Link to='/cart' className=' relative'  >
                        <FaShoppingCart className=' size-6 cursor-pointer' />
                        <sup className=' absolute -top-1 left-5 text-md' >
                            {amount > 0 ? amount : ''}
                        </sup>
                    </Link>
                    <Link to='login' >
                        <IoPersonSharp className=' size-6 cursor-pointer' />
                    </Link>
                    <GiExitDoor className=' size-6 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar