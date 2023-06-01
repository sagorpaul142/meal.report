import React from 'react';
import Link from "next/link";
import logo from '../../images/logo.png'
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-5 col-md-12 footer-info">
                                <Link href="#" className="logo d-flex align-items-center">
                                    <Image src={logo} alt="" className={'img-fluid'}/>
                                    <span>Meal</span>
                                </Link>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa
                                    magna
                                    derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div className="social-links mt-3">
                                    <Link href="" className="twitter"><i className="bi bi-twitter"></i></Link>
                                    <Link href="" className="facebook"><i className="bi bi-facebook"></i></Link>
                                    <Link href="" className="instagram"><i className="bi bi-instagram"></i></Link>
                                    <Link href="" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Home</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">About us</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Services</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Terms of service</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Web Design</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Web Development</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Product Management</Link>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Marketing</Link></li>
                                    <li><i className="bi bi-chevron-right"></i> <Link href="#">Graphic Design</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br/>
                                    New York, NY 535022<br/>
                                    United States <br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com <br/>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Meal.Reports</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                </div>
            </footer>
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
            {/*<div id="preloader"></div>*/}
        </>
    );
};

export default Footer;