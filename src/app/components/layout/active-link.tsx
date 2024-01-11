

import React from 'react'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation';


type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    pathname === rest.as ||
    (rest.as && pathname.startsWith(String(rest.as)));





  return (
    <div>
      <Link
        {...rest}
        href={href}
        style={{
          padding: '8px 13px',
          border: '1px solid #fff',
          borderRadius: '8rem',
          marginRight: '16px',
          fontSize: '1.1rem',
          color: `${isActive ? 'white' : 'white'
            }`,
          backgroundColor: `${isActive ? '#4b7bf6' : ''}`
        }}
      >
        {children}
      </Link>
    </div >
  )
}
