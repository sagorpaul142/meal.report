"use client"
import {useEffect, useState} from 'react';
import Link from "next/link";

const Header = ({mobileView, setMobileView}) => {
    const [scrollClass, setScrollClass] = useState('');

    const getScroll = () => {
        if (window.scrollY > 100) {
            setScrollClass('sticked')
        } else {
            setScrollClass('')
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", (e) => getScroll());
    }, [])

    const closeMobileNav = () => {
        setMobileView(false)
    }

    return (
        <header id="header" className={`header fixed-top ${scrollClass}`} data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <Link href={'/'} className="logo d-flex align-items-center scrollto me-auto me-lg-0">
                    <h1>Meal<span>.</span></h1>
                </Link>

                <nav id="navbar" className="navbar">
                    <ul>

                        <li>
                            <Link href={'/'}
                                  onClick={() => closeMobileNav()}
                                  className="nav-link scrollto"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <a
                                href={'#about'}
                                onClick={() => closeMobileNav()}
                                className="nav-link scrollto"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href={'#services'}
                                onClick={() => closeMobileNav()}
                                className="nav-link scrollto"
                            >
                                Services
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a*/}
                        {/*        href={'#clients'}*/}
                        {/*        onClick={() => {*/}
                        {/*            closeMobileNav()*/}
                        {/*        }}*/}
                        {/*        className="nav-link scrollto"*/}
                        {/*    >*/}
                        {/*        Clients*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li>
                            <a
                                href={'#team'}
                                onClick={() => {
                                    closeMobileNav()
                                }}
                                className="nav-link scrollto"
                            >
                                Team
                            </a>
                        </li>

                        <li>
                            <a
                                href={'#contact'}
                                onClick={() => {
                                    closeMobileNav()
                                }}
                                className="nav-link scrollto"
                            >
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href={void 0}
                                onClick={() => {
                                    closeMobileNav()
                                }}
                                className="nav-link scrollto"
                            >
                                Login
                            </a>
                        </li>

                        <li>
                            <a
                                href={void 0}
                                onClick={() => {
                                    closeMobileNav()
                                }}
                                className="nav-link scrollto"
                            >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                    <i
                        className={mobileView ? `bi bi-x mobile-nav-toggle d_none` : `bi bi-list mobile-nav-toggle d_none`}
                        onClick={() => {
                            setMobileView(!mobileView)
                        }}
                    />
                </nav>

                <Link href={"/"} className="btn-getstarted scrollto">
                    Get Started
                </Link>

            </div>
        </header>
    );
};

export default Header;