import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function S6Route() {
    return (
        <MainLayout>
            <h1>Halaman React - 6. Routes</h1>


            <div>
                {/*
                // lokasi Pages : {src/pages(dibuat foldernya)/Router.jsx(dibuat filenya), dll}, isinya yaitu : 
                import React from 'react'
                ... -> ini kalau ada yang mau ditambahkan
                
                export default function Home(){
                    return(
                        <div>
                            <h1> Halaman Home </h1> 
                        </div>
                    )
                }
                // End Lokasi Pages

                
                // Lokasi di App.jsx dibawah ini : 
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                </Routes>
                // End Lokasi 

                */}

            </div>
        </MainLayout>
    )
}
