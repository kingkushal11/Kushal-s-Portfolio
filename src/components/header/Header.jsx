import React from 'react'
import "./header.css"
import CTA from './CTA'
import Kushal from '../../assets/kushal.jpg'
import Socials from './Socials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Kushal Khattri</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <Socials />

                <div className='me'>
                    <img src={Kushal} alt="Photo of me" />
                </div>

                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header