import phone from "../../images/iphone.png"
import Image from "next/image";

const Feature = () => {
    return (
        <section id="features" className="features">

            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                        <h3>Powerful Features for <br/>Your Business</h3>

                        <div className="row gy-4">

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                                    <span>Easy Cart Features</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
                                    <span>Sit amet consectetur adipisicing</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
                                    <span>Ipsum Rerum Explicabo</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
                                    <span>Easy Cart Features</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-database-2-line" style={{color: '#47aeff'}}></i>
                                    <span>Easy Cart Features</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
                                    <span>Sit amet consectetur adipisicing</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
                                    <span>Ipsum Rerum Explicabo</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-list d-flex">
                                    <i className="ri-base-station-line" style={{color: '#ff5828'}}></i>
                                    <span>Easy Cart Features</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                        <div className="phone-wrap">
                            <Image src={phone} alt="Image" className="img-fluid"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="details">
                <div className="container" data-aos="fade-up" data-aos-delay="300">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Labore Sdio Lidui<br/>Bonde Naruto</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum molestias
                                doloremque quae delectus odit minima corrupti blanditiis quo animi!</p>
                            <a href="#about" className="btn-get-started">Get Started</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Feature;