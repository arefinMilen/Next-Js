import React from 'react'
import Link from 'next/link'

export default function layout({children}) {
  return (
    <div>
      <nav className="mb-6 mt-6">
        <ul className='flex gap-4'>
            <li><Link href='/about/mission'>Mission</Link> </li>
            <li><Link href='/about/vission'>Vission</Link></li>
        </ul>
      </nav>
      <hr />
      {children}
    </div>
  )
}
