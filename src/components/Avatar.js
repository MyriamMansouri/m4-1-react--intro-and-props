import React from 'react';
import './Avatar.css'

const Avatar = ({avatar, name, size}) => {
    return <img className="avatar" src={avatar} alt={name} style={{height: `${size}px`, width: `${size}px`}}/>
}

export default Avatar