import React from 'react'
import Button from '../components/Button'
import MainLayout from '../layouts/MainLayout'


function Mybutton() {
    // area Javascript

    return (
        // area JSX
        <button style={{ marginTop: "20px" }}>Ini tombol</button>
    )
}

export default function S1Component() {
    return (
        <MainLayout>
            <h1>Halaman React - 1. Component</h1>

            {/* dengan beda file */}
            <Mybutton />

            {/* dengan satu file */}
            <Button />

            <div>
                {/* 
                    // ==========digunakan apabila Mybutton beda file==========
                    - lokasi file : {src/components(dibuat foldernya)/Mybutton.jsx(dibuat filenya)}, isinya yaitu :   
                        import React from 'react'
                        import ... -> ini kalau ada yang mau ditambahkan

                        export default function Mybutton(){
                            // area Javascript 

                            return(
                                // area JSX
                                <div>
                                    <button>Coba di klik</button>
                                </div>
                            )
                        }

                    - lokasi pages : {src/pages(dibuat foldernya)/Component.jsx(dibuat filenya)}, isinya yaitu : 
                        import React from 'react'
                        import Mybutton from "../src/components/Mybutton.jsx"
                        import ... -> ini kalau ada yang mau ditambahkan

                        export default funtion Home(){
                            // area Javascript

                            return(
                                // area JSX
                                <div>
                                    <h1>Halaman Home</h1>
                                    <Mybutton/>
                                </div>

                                atau 

                                <> -> merupakan fragment
                                    <h1>Halaman Home</h1>
                                    <Mybutton/>
                                </>
                            )
                        }
                    // ==========akhir Mybutton beda file==========

----------------------------------------------------------------------------------------------------------------------------------------

                    // ==========digunakan apabila Mybutton satu file==========
                    - lokasi Pages : {src/pages/Component.jsx}, isinya yaitu : 
                        import React from 'react'
                        import ... -> ini kalau ada yang mau ditambahkan

                        function Mybutton(){
                            // area Javascript

                            return(
                                // area JSX
                                <button>Ini tombol</button>
                            )
                        }
                    
                        export default function Home(){
                            // area Javascript
                            
                            return(
                                // area JSX
                                <div>
                                    <h1> Halaman Component </h1> 
                                    <button/>
                                </div>

                                atau 

                                <> -> merupakan fragment
                                    <h1> Halaman Component </h1> 
                                    <button/>
                                </>
                            )
                        }
                    // ==========akhir Mybutton satu file==========
                */}
            </div>
        </MainLayout>
    )
}
