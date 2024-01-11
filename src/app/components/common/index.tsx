import React from 'react'

import { ActiveLink } from '../layout/active-link'

export const LinksComponents = () => {
  return (
    <div className='flex gap-[20px]  text-slate-50 '>
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
  )

}
