import './footer.css'
import { Link } from 'react-router-dom';

function Footer({contact, home, resume}) {
    return (
        <div className='footerContainer'>
            <hr></hr>
            <div className='textContainer'>
                <p>© 2024  -  Andres Torres</p>
                <div className='link-container'>
                <Link to="/contact" className='contactCTA'>
                    {contact}
                </Link>
                <Link to="/" className='contactCTA'>
                    {home}
                </Link>
                <Link to="/resume" className='contactCTA'>
                    {resume}
                </Link>
                </div>
            </div>
        </div>

    )
}

export default Footer;