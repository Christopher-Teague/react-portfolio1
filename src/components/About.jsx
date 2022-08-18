import React from 'react'

const About = () => {
    return (
        <div name='about' className='p-10 w-full h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white'>

            <div className='max-w-screen-lg py-4 px-8 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-10'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolorem? Magni error architecto ab ullam natus! Sed quia nesciunt unde vel ratione quisquam cupiditate veniam quo ad, ducimus molestiae aliquid voluptatum tempore facilis quidem. Repellat, excepturi non. Saepe esse et, ipsam vitae repellendus placeat soluta quidem repellat, similique deserunt nobis.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus amet, et laboriosam hic incidunt, accusamus tempore non unde consequatur laborum, id rem repudiandae nulla quas obcaecati illo suscipit sed adipisci veritatis ipsa debitis est nihil doloribus! Tempora et inventore, sapiente distinctio facere dolore repellat magni odio eius aliquid veritatis!
                </p>

            </div>
        </div>
    )
}

export default About