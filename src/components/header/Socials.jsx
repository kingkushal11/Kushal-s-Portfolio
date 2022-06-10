import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { VscGithub } from 'react-icons/vsc'

const Socials = () => {
    return (
        <div className='socials'>
            <a href="https://www.linkedin.com/in/kushal-khattri-540627224/" target="_blank"><FiLinkedin /></a>
            <a href="https://github.com/kingkushal11" target="_blank"><VscGithub /></a>
        </div >
    )
}

export default Socials