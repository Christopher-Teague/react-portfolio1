import React from "react";
import placeholder from "../assets/skull-master-chef.png";

const projects = [
    {
        id: 1,
        src: placeholder,
    },
    {
        id: 2,
        src: placeholder,
    },
    {
        id: 3,
        src: placeholder,
    },
    {
        id: 4,
        src: placeholder,
    },
    {
        id: 5,
        src: placeholder,
    },
];

const Portfolio = () => {
    return (
        <div
            name="portfolio"
            className="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-full md:h-screen text-white"
        >
            <div className="max-w-screen-lg py-4 px-8 mx-auto flex flex-col justify-center w-full h-full">
                {/* Heading */}

                <div className="pb-8 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                {/* content */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px0">
                    {/* map over projects array to display individually */}

                    {projects.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt="placeholder"
                                className="rounded-md duration-200 hover:scale-105 w-full "
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110">
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
