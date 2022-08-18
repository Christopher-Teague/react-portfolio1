import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/christopherteague/',
            style: 'rounded-tr-md bg-blue-600'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Christopher-Teague',
            style: 'bg-gray-800'
        },
        {
            ///// opens users mail client to send email to designated address \\\\\
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:cmteague77@gmail.com',
            style: 'bg-yellow-700'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsPersonLinesFill size={30} />
                </>
            ),
            style: 'rounded-br-md bg-green-700',
            ///// allow user to download pdf file from public folder \\\\\ 
            /* href: '/resume.pdf',
            download: true */
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[33%] left-0 fixed'>
            <ul>

                {links.map(({ id, child, href, style, download }) => (

                    ///// next line will disable warning from eslint for concatenation \\\\\ 
                    // eslint-disable-next-line
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300' + " " + style}>
                        <a
                            href={href}
                            download={download}
                            target='_blank'
                            rel="noreferrer"
                            className='flex justify-between items-center w-full text-white'
                        >
                            {child}
                        </a>
                    </li>

                ))}

            </ul>
        </div>
    )
}

export default SocialLinks