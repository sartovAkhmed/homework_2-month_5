import React from 'react'
import stylles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    const activeNav = ({isActive}) => isActive ? 'active-link ' : ''
    return (
        <header>
            <div className="container">
                <div className={stylles.header__inner}>
                    <div className={stylles.logo}>
                        <span>Logo TYPE</span>
                    </div>
                    <nav className={stylles.nav}>
                        <ul>
                            <li><NavLink className={activeNav} to='/'>Home</NavLink></li>
                            <li><NavLink className={activeNav} to='/posts'>Posts</NavLink></li>
                            <li><NavLink className={activeNav} to='/create-post'>Create post</NavLink></li>
                        </ul>
                    </nav>
                    <div className="sign-up">
                        <button>register</button>
                        <button>sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
