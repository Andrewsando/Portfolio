
import React from 'react';
import { headerData } from '../../../data/headerData';
import { Link } from 'react-router-dom';

import './landing.css';

function LandingUI({ theme }) {


    return (
        <div className='landing' style={{ backgroundColor: theme.secondary }}>
            <div className='landing--container'>
                <div>
                    <div
                        className='lcr--content'
                        style={{ color: theme.quinary }}
                    >
                        <Link to="/">
                            <h1>{headerData.name}<span className='lastname'> {headerData.lastname}</span></h1>
                        </Link>
                        <p>{headerData.description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LandingUI;