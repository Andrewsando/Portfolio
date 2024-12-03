import React from 'react';
import './contact.css'



export default function ContactUI() {

    return (
        <div>
            <h1 className='contactTitle'>Contact</h1>
            <div className='container'>
                <p className='inTouchText'>If you'd like to get in touch, you can reach me using the following methods.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                <div>
                    <a href="mailto:andres.torressandoval@hotmail.com">
                    <h2>Email</h2>
                        <p>hey@andres.com</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Andrewsando">
                    <h2>GitHub</h2>
                        <p>git/andres</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/andrewsando">
                    <h2>LinkedIn</h2>
                        <p>in/andres</p>
                    </a>
                </div>
                <div>
                    <a href="https://gitlab.com/Andrew.sando">
                    <h2>GitLab</h2>
                        <p>gitlab/andres</p>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

