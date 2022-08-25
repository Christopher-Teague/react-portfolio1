import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'
import placeholder from '../assets/skull-master-chef.png'


const style = {
    button: `group text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 hover:scale-110 duration-200`,
}

const Home = () => {
    return (
        <div name='home' className='p-10 h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-gray-400'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row'>

                {/* Main Body Text */}
                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I am a Software Developer
                    </h2>
                    <p className='py-4 max-w-md'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam adipisci est inventore iusto repudiandae, assumenda tenetur fugiat officia nostrum fugit illum blanditiis vel in. Ab eius autem provident necessitatibus!
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

                {/* Image */}
                <div>
                    <img src={placeholder} alt="My beautiful face" className='rounded-2xl mx-auto w-3/4 md:w-full' /> */}
                </div>

            </div>
        </div>
    )
}

export default Home