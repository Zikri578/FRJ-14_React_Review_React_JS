import React from 'react'
import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

export default function S4CondRendering() {

    // state
    const [show, setShow] = useState(true)
    const [loading, setLoading] = useState(true)

    // function toggle
    const toggleShow = () => {
        setShow(!show)
    }

    // kondisi jika tidak muncul
    if (!loading) {
        return <div>Loading Please Wait...</div>
    }

    return (
        <MainLayout>
            <h1>Halaman React - 4. Cond Rendering</h1>
            <div>
                {/* menampilkan atau menghilangkan */}
                {show ? <h1>Show / Hide Me</h1> : null}

                <button onClick={toggleShow}>Toggle</button>
            </div>

            {/* 
            // lokasi Page : {src/pages(dibuat foldernya)/CondRendering.jsx(dibuat filenya), dll, isinya yaitu :
            import React from 'react'
            ... -> ini kalau ada yang mau ditambahkan

            export default function CondRendering(){

                // membuat state
                const[show, setShow] = useState(true)
                const[loading, setLoading] = useState(true)

                // membuat function toggle
                const toggleShow = () => {
                    setShow(!show)
                }

                // kondisi jika tidak muncul
                if(!loading){
                    return <div>Loading Please Wait...</div>
                }

                return(
                    <div>
                        // menampilkan atau menghilangkan
                        {show ? <h1>Show / Hide Me</h1 : null}

                        <button onClick={toggleShow}>Toggle</button>
                    </div>
                )
            }

            }
            */}
        </MainLayout>
    )
}
