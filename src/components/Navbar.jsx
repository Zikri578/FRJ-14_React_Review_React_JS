import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='w-full h-[70px] bg-neutral-500 color-white '>
            <div className='w-full h-full max-w-[1500px] flex items-center gap-[70px] my-0 mx-auto'>

                <menu className='flex gap-[100px] text-white'>
                    <Link to="/">Component</Link>
                    <Link to="/props">Properti</Link>
                    <Link to="/state">State</Link>
                    <Link to="/cond-rendering">Cond Rendering</Link>
                    <Link to="/lifecycle">Life Cycle</Link>
                    {/* <Link to="/route/:id">Routes Detail</Link> */}
                    <Link to="/route">Routes</Link>
                    <Link to="/outlet">Outlet</Link>
                    <Link to="/protected-routes">Protected Routes</Link>
                </menu>

            </div>
        </nav>
    )
}
