import React from 'react'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'

const tools = [
    {
        id: 1,
        img: react,
        title: 'REACT',
        style: 'shadow-cyan-400'
    },
    {
        id: 2,
        img: html,
        title: 'HTML',
        style: 'shadow-orange-700'
    },
    {
        id: 3,
        img: css,
        title: 'CSS',
        style: 'shadow-blue-700'
    },
    {
        id: 4,
        img: tailwind,
        title: 'Tailwind',
        style: 'shadow-teal-400'
    },
    {
        id: 5,
        img: firebase,
        title: 'Firebase',
        style: 'shadow-orange-400'
    },
    {
        id: 6,
        img: github,
        title: 'Github',
        style: 'shadow-gray-500'
    },
]

const Experience = () => {
    return (
        <div name='experience' className='p-10 bg-gradient-to-b from-slate-800 to-slate-900 w-full h-screen text-white'>
            <div className='max-w-screen-lg py-4 px-8 mx-auto flex flex-col justify-center w-full h-full'>

                {/* header */}
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                    <p className='py-6'>// These are the technologies that I'm currently working with</p>
                </div>

                {/* define grid */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {tools.map(({ id, img, title, style }) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={img} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Experience