import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'

const style = {
    button: `group text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 hover:scale-110 duration-200`,
}

const Home2 = () => {
    return (
        <div name='home' className='p-10 w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-gray-400'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                {/* content */}
                <p className='text-xl sm:text-3xl text-red-700 font-semibold'>
                    Hi, my name is
                </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>
                    Christopher Teague.
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
                    I am a software Developer.
                </h2>
                <p className='text-gray-300 sm:text-xl py-4 max-w-[700px]'>
                    I can also cook up amazing meals. I love being able to express my creativity while constantly learning and building up new skills.
                    {/* I am currently focused  on ( and really enjoying ) front-end development using <span className='italic'>React</span> and <span className='italic'>Tailwind</span>. */}
                </p>

                {/* 'Portfolio button */}
                <div>
                    <Link
                        to='portfolio'
                        smooth
                        duration={500}
                        className={style.button}
                    >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} />
                        </span>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Home2