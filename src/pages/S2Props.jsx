import React from 'react'
import Paragraf from '../components/Paragraf'
import MainLayout from '../layouts/MainLayout'


function MyCustomButton(props) {

    return (
        // area JSX
        <div>
            {/* untuk satu file */}
            <button style={{ marginTop: "10px" }}>
                {props.bebas}
            </button>

            {/* atau  */}

            <button {...props}>
                {props.aja}
            </button>
        </div>
    )
}
export default function S2Props() {

    return (
        <MainLayout>
            <h1>Halaman React - 2. Properti</h1>

            {/* dengan satu file */}
            <MyCustomButton bebas="gimana" />
            <MyCustomButton aja="hallo" style={{ backgroundColor: 'yellow' }} onClick={(e) => { alert("apa") }} />

            {/* dengan beda file */}
            <Paragraf canda="good morning" />
            <Paragraf janda="selamat pagi" style={{ backgroundColor: 'yellow' }} onClick={(e) => { alert("Hallo") }} />



            <pre>
                {/*
                // ==========digunakan apabila dalam satu file==========
                    - lokasi Pages : {src/pages(dibuat foldernya)/Props.jsx(dibuat filenya), dll}, isinya yaitu : 

                    import React from 'react'
                    import ... -> ini kalau ada yang mau ditambahkan

                    function MyCustomButton(props){
                        // area Javascript

                        return(
                            // area JSX
                            <button>
                                {props.bebas}
                            </button>

                            atau 

                            <button {...props}>
                                {props.jadi}
                            </button>
                        )
                    }

                    // children
                    function MyDiv(props){
                        // area javascript

                        return(
                            // area JSX
                            <div>
                                {props.children}
                            </div>

                            atau

                            <div style={padding: 20, margin: "20px 0", backgroundColor: "blue", borderRadius: 12, color: "red"}>
                                {props.children}
                            </div>
                        )
                    }
                    
                    export default function Home(){
                        // area Javascript

                        return(
                            // area JSX
                            <div>
                                <h1>Halaman Component</h1>
                                <MyCustomButton bebas="hallo" style={{backgroundColor : 'yellow'}} onClick={(e)=>{alert("Hallo")}}/>
                                <MyCustomButton bebas="apa"/>
                                <MyCustomButton bebas="kabar"/>

                                <MyDiv style={{padding: 20, margin: "20px 0", backgroundColor: "vanilla", borderRadius: 12, color: "blue" }}>
                                    <h1> Div </h1>
                                </MyDiv>
                            </div>

                            atau 
                            <> -> merupakan fragment
                                <h1>Halaman Component</h1>
                                <MyCustomButton bebas="hallo" style={{backgroundColor : 'yellow'}} onClick={(e)=>{alert("Hallo")}}/>
                                <MyCustomButton bebas="apa"/>
                                <MyCustomButton bebas="kabar"/>

                                <MyDiv>
                                    <h1> Coba </h1>
                                </MyDiv>
                            </>
                        )
                    }
                    // ==========akhir apabila dalam satu file==========

----------------------------------------------------------------------------------------------------------------------------------------

                    // ==========digunakan apabila Mybutton beda file==========
                    - lokasi file : {src/components(dibuat foldernya)/Mybutton.jsx(dibuat filenya)}, isinya yaitu :   
                        import React from 'react'
                        import ... -> ini kalau ada yang mau ditambahkan

                        export default function Mybutton(props){
                            // area Javascript 

                            return(
                                // area JSX
                                <div>
                                    <button>
                                        {props.hasil}
                                    </button> 

                                    atau 

                                    <button {...props}>
                                        {props.hasil}
                                    </button>
                                </div>
                            )
                        }

                        // children
                        function Div(){
                            // area javascript

                            return(
                                // area JSX
                                <div>
                                    {props.children}
                                </div>

                                atau 

                                <div style={padding: 20, margin: "20px 0", backgroundColor: "blue", borderRadius: 12, color: "red"}>
                                    {props.children}
                                </div>
                            )
                        }

                    - lokasi pages : {src/pages(dibuat foldernya)/State.jsx(dibuat filenya)}, isinya yaitu : 
                        import React from 'react'
                        import Mybutton from "../src/components/Mybutton.jsx"
                        import ... -> ini kalau ada yang mau ditambahkan

                        export default funtion Home(){
                            // area Javascript
                            
                            return(
                                // area JSX
                                <div>
                                    <h1>Halaman Home</h1>
                                    <Mybutton hasil="baik" style={{backgroundColor : 'yellow'}} onClick={(e)=>{alert("Hallo")}}/>

                                    <Div style={{padding: 20, margin: "20px 0", backgroundColor: "vanilla", borderRadius: 12, color: "blue" }}>
                                        <h1> Div </h1>
                                    </Div>

                                </div>

                                atau 

                                <> -> merupakan fragment
                                    <h1>Halaman Home</h1>
                                    <Mybutton hasil="kamunya" style={{backgroundColor : 'yellow'}} onClick={(e)=>{alert("Hallo")}}/>

                                    <Div>
                                        <h1> Mencoba </h1>
                                    </Div>
                                </>
                            )
                        }

                    // ==========akhir apabila Mybutton beda file==========
                */}
            </pre>
        </MainLayout>
    )
}
