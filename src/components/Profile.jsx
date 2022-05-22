import React from 'react'


export default function Profile(props) {
    const { src, name } = props

    return (
        <div className="card_photo center circle">
            <img src={src} alt={name} />
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" space="preserve">
                <circle cx="50" cy="50" r="40" />
            </svg>
        </div>
    )
}