import Image from 'next/image' //imports the lazy loading image class different from the <img/> tag
import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'

// import { log } from 'console';
// import { log } from 'console';



const Navbar = () => {

  const [open, setOpen] = useState(false);
  // const closeMenu = (e) => {
  //   console.log(e.target);
  // }

  const handleOpen = () =>{
    setOpen(!open)
  }


  return (
    //fixed and z[100] will make it be always on top
    <div className='fixed w-full h-20 shadow-2xl z-[100]' >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/../public/assets/mylogo.jpg " alt="" width="100" height="10" />

        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 uppercase text-sm hover:border-b-2'>Home</li>
            </Link>

            <Link href='/'>
              <li className='ml-10 uppercase text-sm hover:border-b-2'>About</li>
            </Link>

            <Link href='/'>
              <li className='ml-10 uppercase text-sm hover:border-b-2'>Projects</li>
            </Link>

            <Link href='/'>
              <li className='ml-10 uppercase text-sm hover:border-b-2'>Contact</li>
            </Link>

            <Link href='/'>
            </Link>

          </ul>

          {/* <div className='md:hidden' onClick={() => setOpen(true)}> */}
          <div onClick={handleOpen} className='md:hidden'>

            <HiOutlineMenu size={25} />
          </div>
        </div>
      </div>



      {/* creating the overlay */}

      <div className={open  ?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ' '}>
        <div className ={open? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src="/../public/assets/mylogo.jpg" alt="" width="87" height="35" />
              <div onClick={handleOpen} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
              <p>Building is one of the greates art in life!</p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase '>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-3 text-sm'>Projects</li>
              </Link><Link href='/'>
                <li className='py-3 text-sm'>Skill</li>
              </Link><Link href='/'>
                <li className='py-3 text-sm'>About</li>
              </Link><Link href='/'>
                <li className='py-3 text-sm'>Contact</li>
              </Link>
            </ul>

            <div>
              <p className='pt-40 text-[#5651e5]'>Lets Connect</p>
            </div>
            <div className='flex  items-center justify-between'>
            <div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
              <FaLinkedinIn />
            </div>
            <div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
              <FaGithub />
            </div><div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
              <AiOutlineMail />
            </div><div className=' px-4 rounded-full shadow-lg shadow-gray-500 py-3 cursor-pointer hover:scale-105'>
              <BsFillPersonFill />
            </div>

            </div>
            
          </div>
        </div>

      </div>
      {/* <div className={open ? 'lg:hidden md:hidden sm:flex  fixed letf-0 top-0 w-full h-screen bg-black/5' : 'lg:hidden md:hidden hidden  fixed letf-0 top-0 w-full h-screen bg-black/90'}>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#356081] p-10 ease-in duration-500 opacity-20 '>
          <div className=' sr-only flex w-full items-center justify-between'>
            <Image src="/../public/assets/mylogo.jpg" alt="" width="100" height="50" />
            <div onClick={closeMenu} className='z-60'>
              <AiOutlineClose size={25} />
            </div>
          </div>

        </div>


      </div> */}

    </div>
  )
}

export default Navbar;