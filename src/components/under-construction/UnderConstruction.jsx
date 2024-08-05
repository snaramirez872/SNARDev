import React from 'react';
import UC_gif from '../../assets/under-construction.gif';
import TimeSince from './TimeSince';
import '../styles/UC.css';

export default function UnderConstruction() {
    return (
        <div className="UnderConstruction">
            <h1>HALT</h1>
            <img src={UC_gif} alt='under-construction.gif' />
            <h2>SNARDev is currently under development</h2>
            <h2>Time Since Start of Development</h2>
            <TimeSince targDate="2024-07-31T01:29:00Z" />
        </div>
    );
}
