import Image from 'next/image' //imports the lazy loading image class different from the <img/> tag
import Link from 'next/link';
import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
  return (
    //fixed and z[100] will make it be always on top
    <div className='fixed w-full h-20 shadow-2xl z-[100]' >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/../public/assets/mylogo.jpg " alt="" width="100" height="50" />

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

          <div className='md:hidden'>
            <HiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* creating the overlay */}
      {/* <div className='fixed letf-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>

        </div>
        <div>
          <Image src="/../public/assets/mylogo.jpg" alt="" width="100" height="50" />
          <Image src="/../public/assets/mylogo.jpg " alt="" width="100" height="50" />

        </div>
        <div>
          <AiOutlineClose />
        </div>

      </div> */}

    </div>
  )
}

export default Navbar;