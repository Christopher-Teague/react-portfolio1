import React from "react";
// import placeholder from "../assets/skull-master-chef.png";
import weather from '../assets/projectImages/Weather.png'
import hotsauce from '../assets/projectImages/hotsauce.png'
import chores from '../assets/projectImages/chores.png'
import chat from '../assets/projectImages/chat.png'


const projects = [
    {
        id: 1,
        src: chores,
        demo: 'http://54.193.89.130/',
        code: 'https://github.com/Christopher-Teague/ChoreChart'
    },
    {
        id: 2,
        src: hotsauce,
        demo: 'http://50.18.2.155/dashboard',
        code: 'https://github.com/Christopher-Teague/hotsauce_tracker'
    },
    {
        id: 3,
        src: weather,
        demo: '',
        code: 'https://github.com/Christopher-Teague/Weather-App'
    },
    {
        id: 4,
        src: chat,
        demo: '',
        code: 'https://github.com/Christopher-Teague/ReactFirebaseChat'
    },
    // {
    //     id: 5,
    //     src: placeholder,
    // },
];

const Portfolio = () => {
    return (
        <div
            name="portfolio"
            className="p-10 w-full h-full bg-gradient-to-b from-slate-900 to-slate-800  text-white"
        >
            <div className="max-w-screen-lg py-4 px-8 my-10 mx-auto flex flex-col justify-center w-full h-full">
                {/* Heading */}

                <div className="pb-1 ">
                    <p className="text-4xl font-bold inline border-b-4 border-red-700">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                {/* content */}
                <div className="grid md:grid-cols-2  gap-8 px-12 sm:px-0">

                    {/* map over projects array to display individually */}

                    {projects.map(({ id, src, demo, code }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="placeholder"
                                className="rounded-md duration-200 hover:scale-110 w-full "
                            />
                            <div className="flex items-center justify-center">
                                {demo ?
                                    <a
                                        href={demo}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <button className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-110">
                                            Demo
                                        </button>
                                    </a>
                                    : null}
                                <a
                                    href={code}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <button className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-110">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;