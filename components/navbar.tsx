import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className='flex items-center justify-between px-9 z-10'>
        <h1>Logo</h1>
        <ul className='flex gap-6'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/'>Gallery</Link>
            </li>
            <li>
                <Link href='/'>Planets</Link>
            </li>
            <li>
                <Link href='/'>Contacts</Link>
            </li>
            
        </ul>
    </nav>
  )
}

export default navbar