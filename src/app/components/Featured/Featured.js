import Image from "next/image";
import featuredOne from "../../images/featured/featured-1.png"
import featuredTwo from "../../images/featured/featured-2.png"
import featuredThree from "../../images/featured/featured-3.png"
import featuredFour from "../../images/featured/featured-4.png"

const Featured = () => {
    return (
        <section id="featured" className="featured">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <figure>
                                    <Image src={featuredOne} alt="" className="img-fluid"/>
                                </figure>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <figure>
                                    <Image src={featuredTwo} alt="" className="img-fluid"/>
                                </figure>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <figure>
                                    <Image src={featuredThree} alt="" className="img-fluid"/>
                                </figure>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <figure>
                                    <Image src={featuredFour} alt="" className="img-fluid"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                                    <h4>Modi sit est</h4>
                                    <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                    <h4>Unde praesentium sed</h4>
                                    <p>Voluptas vel esse repudiandae quo excepturi.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                    <h4>Pariatur explicabo vel</h4>
                                    <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                                    <h4>Nostrum qui quasi</h4>
                                    <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Featured;