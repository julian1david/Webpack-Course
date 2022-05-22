import React from 'react'

import github from "@images/github.png";
import twitter from "@images/twitter.png";
import instagram from "@images/instagram.png";

export default function Icon(props) {
    const { icon, url } = props
    
    const icons = { github, twitter, instagram };

    return (
        <a href={url}>
            <img src={icons[icon]} alt="social media"/>
        </a>
    )
}
