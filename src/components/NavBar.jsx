import React, { useState } from 'react';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const style = {
    link: `px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200`,
    burger: `flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-gray-400`,
    burgerLinks: `px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200`
}

const NavBar = () => {

    ///// useState for hamburger state \\\\\
    const [nav, setNav] = useState(false);

    ///// Array to map over for NavBar links \\\\\
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        ///// Main container \\\\\
        <div className='flex justify-between items-center w-full h-20 px-4 bg-slate-900 text-white fixed'>

            {/* Corner Signature */}
            <div>
                <h1 className='font-signature text-5xl ml-2 text-red-700'>CT</h1>
            </div>

            {/* Links */}
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className={style.link}
                    >

                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>

                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden hover:scale-110 duration-200'>
                {nav ? <FaTimes size={30} /> : <FaHamburger size={30} />}
            </div>

            {nav && (
                <ul className={style.burger}>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className={style.burgerLinks}
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default NavBar