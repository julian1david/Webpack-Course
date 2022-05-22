import React from 'react'

import Profile from "@components/Profile.jsx";
import Social from "@components/Social.jsx";
import Title from "@components/Title.jsx";
import Mail from "@components/Mail.jsx";

export default function Card(props) {


    

    return (
        <div className="card">
            <div className="card_details">
                <Profile src={props.image} alt={props.name}/>
                <Title name={props.name}/>
            </div>
            <div className="card_userdata">
                <Mail email={props.name} location={location.name}></Mail>
            </div>
            <div className="card_social">
                <Social icon="instagram" url="https://www.instagram.com/franklinpimentel/"/>
                <Social icon="twitter" url="https://twitter.com/franklin_gp"/>
                <Social icon="github" url="https://github.com/Franklingp"/>
            </div>
        </div>
    )
}
