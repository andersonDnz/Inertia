

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
          padding: '8px 12px',
          borderRadius: '8px',
          marginRight: '16px',
          fontSize: '1.6rem',
          color: `${isActive ? 'black' : 'white'
            }`,
          backgroundColor: `${isActive ? '#539daa' : 'transparent'}`
        }}
      >
        {children}</Link>
    </div>
  )
}
