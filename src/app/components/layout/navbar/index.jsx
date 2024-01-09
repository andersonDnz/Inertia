'use client'

import React, {
  useState,
  useLayoutEffect
} from 'react'

import Image from 'next/image';
import Astro from '@/../../inertia/public/Astro.png';
import Link from 'next/link';
import { ActiveLink } from '../active-link';

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
    <div className={header ? "fixed w-[100%] bg-[red]" : "bg-[blue]"}>
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
        <div className='flex gap-[20px] text-slate-50'>
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
      </nav>
    </div>
  )
}

export default Navbar;