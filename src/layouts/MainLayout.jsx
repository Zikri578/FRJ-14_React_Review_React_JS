import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MainLayout(props) {
    return (
        <main>

            <Navbar />

            <div className='w-full min-h-full my-0 mx-0'>
                <h1 className='text-black text-center'>Selamat Datang Di {props.children} </h1>
            </div>

            <Footer />

        </main>
    )
}
