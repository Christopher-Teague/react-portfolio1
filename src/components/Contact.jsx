import React from "react";

const style = {
    input: `p-2 bg-transparent border-2 rounded-md text-white focus:outline-none`,
    button: `group text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 hover:scale-110 duration-200`,
};

const Contact = () => {
    return (
        <div
            name="contact"
            className="p-10 w-full h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white"
        >
            <div className="flex flex-col py-4 px-8 justify-center max-w-screen-lg mx-auto h-full">
                {/* header */}
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact Me
                    </p>
                    <p className="py-6">Submit form to get in touch with me</p>
                </div>

                {/* form */}
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/b6becccd-c943-4501-94c3-7d996e8645b3"
                        className="flex flex-col w-full md:w-3/4"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className={style.input}
                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your Email"
                            // eslint-disable-next-line
                            className={"my-4" + " " + style.input}
                        />

                        <textarea
                            name="message"
                            rows="10"
                            className={style.input}
                            placeholder="Enter your message"
                        />

                        <button className={style.button}>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
