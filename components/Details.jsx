// import React from 'react'
import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';




const Details = () => {
    return (
        <div className=' w-screen h-screen text-center mt-32 text-black z-[100]'>
            <div className='max-w-[1240px] mx-auto h-full p-2 justify-center items-center'>
                <div className='items-center justify-between max-w-[330px] '> 
                    <p>Welcome to My World of Web Development</p>
                    <h1 className='py-2'>HI, I am <span className='text-red'>Isah</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nisi est tempore enim veritatis dolorum officiis
                        voluptas hic totam aspernatur aliquam.
                    </p>
                    <div className='flex items-center justify-between py-4'>
                        <div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
                            <FaLinkedinIn />
                        </div>
                        <div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
                            <FaGithub />
                        </div>
                        <div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
                            <AiOutlineMail />
                        </div>
                        <div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
                            <BsFillPersonFill />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details  