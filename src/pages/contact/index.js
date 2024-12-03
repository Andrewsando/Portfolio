import React from 'react';
import { Helmet } from 'react-helmet'
import Landing from '../../components/container/landing'
import Footer from '../../components/core-ui/footer/footer'
import ContactUI from '../../components/core-ui/contact/contact';


function Contact() {

    return (
        <div className='contactContainer'>
            <Helmet>
                <title>Andrés Torres - Contact</title>
            </Helmet>
            <Landing />
            <ContactUI />
            <Footer home={"Home"} resume={"Resume"}/>
        </div>
    )
}

export default Contact;