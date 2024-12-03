import React from 'react';
import { Helmet } from 'react-helmet'
import Landing from '../../components/container/landing'
import Footer from '../../components/core-ui/footer/footer'
import ResumeUI from '../../components/core-ui/resume/resume';


function Resume() {

    return (
        <div className='resumeContainer'>
            <Helmet>
                <title>Andrés Torres - Resume</title>
            </Helmet>
            <Landing />
            <ResumeUI />
            <Footer home={"Home"} contact={"Contact"} />
        </div>
    )
}

export default Resume;