import React from "react";
// import placeholder from "../assets/skull-master-chef.png";
import weather from '../assets/projectImages/Weather.png'
import hotsauce from '../assets/projectImages/hotsauce.png'
import chores from '../assets/projectImages/chores.png'
import chat from '../assets/projectImages/chat.png'
import { FaGithub } from 'react-icons/fa'

const style = {
    button: `text-white w-fit px-6 py-3 my-2 mx-4 flex items-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 hover:scale-110 duration-200`,
}


const projects = [
    {
        id: 1,
        src: chores,
        desc: 'Chore Chart',
        demo: 'http://54.193.89.130/',
        code: 'https://github.com/Christopher-Teague/ChoreChart'
    },
    {
        id: 2,
        src: hotsauce,
        desc: 'Hotsauce Fermentation Tracker',
        demo: 'http://50.18.2.155/dashboard',
        code: 'https://github.com/Christopher-Teague/hotsauce_tracker'
    },
    {
        id: 3,
        src: weather,
        desc: 'Weather',
        demo: '',
        code: 'https://github.com/Christopher-Teague/Weather-App'
    },
    {
        id: 4,
        src: chat,
        desc: 'Firebase Chat',
        demo: '',
        code: 'https://github.com/Christopher-Teague/ReactFirebaseChat'
    },
    // {
    //     id: 5,
    //     src: placeholder,
    // },
];

const Portfolio2 = () => {
    return (
        <div
            name="portfolio"
            className="p-10 w-full h-full md:h-screen bg-gradient-to-b from-slate-900 to-slate-800  text-white"
        >

            {/* container */}
            <div className="max-w-screen-lg py-4 px-8 my-10 mx-auto flex flex-col justify-center w-full h-full">

                {/* Heading */}
                <div className="pb-1 ">
                    <p className="text-4xl font-bold inline border-b-4 border-red-700">
                        Portfolio
                    </p>
                    <p className="py-8">Check out some of my work</p>
                </div>

                {/* content */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-2 sm:px-0">

                    {/* map over projects array to display individually */}

                    {projects.map(({ id, src, desc, demo, code }) => (
                        <div style={{ backgroundImage: `url(${src})` }} key={id} className="object-scale-down shadow-md shadow-blue-600 rounded-lg h-[300px] bg-cover bg-center">
                            {/* <img
                                src={src}
                                alt="placeholder"
                                className="rounded-md duration-200 hover:scale-110 w-full"
                            /> */}
                            <div className="flex flex-col bg-slate-900/[.90] opacity-0 hover:opacity-100 items-center justify-around rounded-lg h-[300px] ">


                                <p className="text-3xl text-center font-semibold p-4 mt-6">{desc}</p>

                                <div className="flex items-center">

                                    {demo ?
                                        <a
                                            href={demo}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <button className={style.button}>
                                                Demo
                                            </button>
                                        </a>
                                        : null}
                                    <a
                                        href={code}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <button className={style.button}>
                                            <FaGithub size={20} />&nbsp;Code
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Portfolio2;