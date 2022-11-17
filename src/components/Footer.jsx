import React from 'react'

export default function Footer() {
    return (
        <footer className='w-full h-24 color-white bg-neutral-600 items-center pt-9 my-0 mx-auto fixed'>
            <h1 className='text-center text-white'>&copy; {new Date().getFullYear()} Copyright: Muhammad Zikri</h1>
        </footer>
    )
}
