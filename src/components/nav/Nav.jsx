import React from 'react'
import "./nav.css"
import { BiHome } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import { GiSkills } from 'react-icons/gi'
import { RiContactsBookFill } from 'react-icons/ri'

const Nav = () => {
    return (
        <nav>
            <a href="#" className='active'><BiHome /></a>
            <a href="#about"><BiUserCircle /></a>
            <a href="#skills"><GiSkills /></a>
            <a href="#contact"><RiContactsBookFill /></a>
        </nav>
    )
}

export default Nav