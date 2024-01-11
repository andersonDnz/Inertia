import React from 'react'

import { ActiveLink } from '../../layout/active-link'

export const LinksComponents = () => {
  return (
    <div className='flex  text-slate-50 mr-5 p-4'>
      <ActiveLink href="/templates/about">
        About
      </ActiveLink>
      <ActiveLink href="/templates/contact">
        Contact
      </ActiveLink>
    </div>
  )

}
