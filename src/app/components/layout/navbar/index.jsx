'use client'

import React, {
  useState,
  useLayoutEffect
} from 'react'

import Image from 'next/image';
import Astro from '@/../../inertia/public/Astro.png';
import Link from 'next/link';

import DarkModeToggle from '../../dark-mode-button';
import { LinksComponents } from '../../common/linksComponents';

const Navbar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }


  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.addEventListener('scroll', scrollHeader)
    }

  }, [])


  return (
    <div className={header ? "fixed top-0 left-0 w-full  m-auto bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 " : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "}>
      <nav className='header flex  justify-between m-auto py-[15px] h-24'>
        <div className='flex ml-10'>
          <Link className='flex ' href="/">
            <Image
              src={Astro}
              alt="Icone do site"
              style={{ maxWidth: '50px', height: '65px' }}
            />
            <h1 className='p-4  text-slate-50'>Inertia</h1>
          </Link>
        </div>
        <div className='flex bottom-0 '>
          <LinksComponents />
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;