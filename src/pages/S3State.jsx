import React from 'react'
import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

export default function S3State() {
    const [username, setUsername] = useState("Panggilan");

    const handlePencet = () => {
        setUsername("Gimana Kabarnya...");
    }

    const handleInput = (e) => {
        setUsername(e.target.value);
    }
    return (
        <MainLayout>
            <h1>Halaman React - 3. State</h1>

            <input type="text" placeholder='Balasan..' onChange={handleInput} />

            <p style={{ marginTop: "20px", marginBottom: "20px" }}>{username}</p>

            <button onClick={() => {
                setUsername("Hallo sayang...")
            }}>Dipanggil</button>


            <button onClick={handlePencet} style={{ padding: "20px" }}> Jawaban </button>
            {/* 
                // ==========digunakan apabila Mybutton satu file==========
                    - lokasi Pages : {src/pages(dibuat foldernya)/State.jsx(dibuat filenya), dll}, isinya yaitu : 
                        import React from 'react'
                        import ... -> ini kalau ada yang mau ditambahkan

                        export default function State(){
                            // area Javascript

                            return(
                                // area JSX
                                
                            )
                        }
            
            */}
        </MainLayout>
    )
}
