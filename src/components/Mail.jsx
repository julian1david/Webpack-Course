import React from "react";


export default function Mail(props) {
    const { email, location } = props
    return (
        <ul>
            <li>{email}@rickandmorty.com</li>
            <li>{location}</li>
        </ul>
    )
}