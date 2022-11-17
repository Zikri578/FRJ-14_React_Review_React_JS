import { data } from 'autoprefixer'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

export default function S5Lifecycle() {

    // membuat state
    const [post, setPost] = useState([])
    const [page, setPage] = useState(1)

    // menjalankan function
    const handleShow = () => {
        setShow(!show)
    }
    const getPost = async () => {
        try {
            // mengambil api dengan batasan 5
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`, {
                method: "GET",

                // mengubah kedalam bentuk json
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // mengembalikan kedalam bentuk json
            const data = await result.json()
            return data

        } catch (error) {
            console.error(error)
        }
    }

    // pindah halaman atau sebelumnya
    // const nextPage = () => {
    //     setPage(data)
    // }
    // const prevPage = () => {
    //     if (page <= 1) {
    //         return //code berhenti 
    //     }
    //     setPage(page - 1)
    // }

    // component life cycle
    useEffect(() => {
        getPost()
            .then((res) => {
                console.info(res)
                setPost(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [page])

    return (
        <MainLayout>

            <h1>Halaman React - 5. Life Cycle</h1>

            {post.map((e) => (
                <div key={e.id}>
                    <h3>{e.id} . {e.title}</h3>
                    <p>{e.body}</p>
                    {/* <Link to={`/routedetail/${e.id}`} >lihat</Link> */}
                </div>
            ))}

            {/* <div>
                <button onClick={prevPage}>prev</button>
                {page}
                <button onClick={nextPage}>next</button>
            </div> */}

        </MainLayout>
    )
}
