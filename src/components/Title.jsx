import React from 'react'

export default function Title(props) {
    const { name, lastname} = props;

    return (
        <div>
            <p className="card_title">Hi, my name is</p>
            <p className="card_value">{name} {lastname}</p>
        </div>
    );

}