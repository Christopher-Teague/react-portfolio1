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

                <p className='text-xl mt-10'>
                    I come from a well established career in the culinary industry. During my tenure, I was able to develop and bolster both my professionalism and technical skillset. Shifting my focus to software engineering enables me to leverage both the discipline and creativity I had as a cook in the cuilinary industry, and apply them to a different medium.
                    {/* <hr className='my-2' />
                    <hr className='my-2' />
                    <hr className='my-2' />
                    *** my time in the industry has bolstered my soft skills.***
                    <hr className='my-2' />
                    My diverse background and skill sets have prepared me to be a successful contributing team member to any organization.
                    <hr className='my-2' />
                    my success in software development will be enhanced by my experience, while giving me an outlet for creative expression. */}

                </p>

                <br />

                <p className='text-xl'>
                    I am currently focused  on ( and really enjoying ) front-end development using React and Tailwind.

                </p>

            </div>
        </div>
    )
}

export default About