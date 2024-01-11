'use client'

import React, {
  useState,
  useLayoutEffect
} from 'react'

import Image from 'next/image';
import Astro from '@/../../inertia/public/Astro.png';
import Link from 'next/link';
import { ActiveLink } from '../active-link';

import DarkModeToggle from '../../dark-mode-button';

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
    <div className={header ? "fixed w-[100%] bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 " : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "}>
      <nav className='header flex  justify-between m-auto py-[15px] p-4'>
        <div className='flex ml-10'>
          <Link className='flex' href="/">
            <Image
              src={Astro}
              alt="Icone do site"
              style={{ maxWidth: '50px', height: 'auto' }}
            />
            <h1 className='w-1/2 p-4  text-slate-50'>Inertia</h1>
          </Link>
        </div>
        <div className='flex gap-[20px] p-4 text-slate-50'>
          <div>
            <ActiveLink href="/templates/about">
              About
            </ActiveLink>
          </div>
          <div>
            <ActiveLink href="/templates/contact">
              Contact
            </ActiveLink>
          </div>
        </div>
        <div className='p-4'>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;