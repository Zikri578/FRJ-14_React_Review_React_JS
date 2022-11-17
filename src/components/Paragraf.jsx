import React from 'react'

export default function Paragraf(props) {
    return (
        // area JSX
        <div>
            <button style={{ marginTop: "20px" }}>
                {props.canda}
            </button>

            <button {...props}>
                {props.janda}
            </button>

        </div >

    )
}
