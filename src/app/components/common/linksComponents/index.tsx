import React from 'react'

import { ActiveLink } from '../../layout/active-link'

export const LinksComponents = () => {
  return (
    <div className='flex  text-slate-50 mr-5 p-4'>
      <ActiveLink href="/templates/animes">
        Animes
      </ActiveLink>
      <ActiveLink href="/templates/series">
        Series
      </ActiveLink>
    </div>
  )

}
