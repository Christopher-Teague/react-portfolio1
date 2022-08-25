import React from 'react'

const About = () => {
    return (
        <div name='about' className='p-10 w-full h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white'>
            {/* container */}
            <div className='max-w-screen-lg py-4 px-8 mx-auto flex flex-col justify-center w-full h-full'>

                {/* content */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-700'>About</p>
                </div>

                <p className='text-xl'>
                    I come from a well established career in the culinary industry. During my tenure, I was able to develop and bolster both my professionalism and technical skillsets. Shifting my focus to software engineering enables me to leverage the discipline and creativity I expressed as a cook, and apply them to a different medium.

                    {/* <hr className='my-2' />
                    
                    My diverse background and skill sets have prepared me to be a successful contributing team member to any organization.
                     */}

                </p>
                <br />
                <p className='text-xl'>
                    When we consume something, whether it be a meal or a website, our first impressions generally come from what we see. I strive to deliver experiences that are not only visually appealing, but also engaging, functional, and make the consumer excited to return.
                </p>
            </div>
        </div>
    )
}

export default About