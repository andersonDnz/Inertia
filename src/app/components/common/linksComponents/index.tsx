import React from 'react'

import { ActiveLink } from '../../layout/active-link'

export const LinksComponents = () => {
  return (
    <div className='flex  text-slate-50 mr-5 p-4'>
      <ActiveLink href="/pages/animes">
        Animes
      </ActiveLink>
      <ActiveLink href="/pages/series/tvShow">
        Series
      </ActiveLink>
    </div>
  )

}
