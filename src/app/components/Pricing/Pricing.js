import Image from "next/image";
import pricingFree from "../../images/pricing-free.png"
import pricingStarter from "../../images/pricing-starter.png"
import pricingBusiness from "../../images/pricing-business.png"
import pricingUltimate from "../../images/pricing-ultimate.png"

const Pricing = () => {

    return (
        <section id="pricing" className="pricing">

            <div className="container" data-aos="fade-up">

                <header className=" section-title">
                    <span>Pricing</span>
                    <h2>Pricing</h2>
                    <p>Check our Pricing</p>
                </header>

                <div className="row gy-4" data-aos="fade-left">

                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                        <div className="box">
                            <h3 style={{color: '#07d5c0'}}>Free Plan</h3>
                            <div className="price"><sup>$</sup>0<span> / mo</span></div>
                            <Image src={pricingFree} className="img-fluid" alt=""/>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li className="na">Pharetra massa</li>
                                <li className="na">Massa ultricies mi</li>
                            </ul>
                            <a href="#" className="btn-buy">Buy Now</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="box">
                            <span className="featured">Recommended</span>
                            <h3 style={{color: '#65c600'}}>Starter Plan</h3>
                            <div className="price"><sup>$</sup>19<span> / mo</span></div>
                            <Image src={pricingStarter} className="img-fluid" alt=""/>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li className="na">Massa ultricies mi</li>
                            </ul>
                            <a href="#" className="btn-buy">Buy Now</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div className="box">
                            <h3 style={{color: '#ff901c'}}>Business Plan</h3>
                            <div className="price"><sup>$</sup>29<span> / mo</span></div>
                            <Image src={pricingBusiness} className="img-fluid" alt=""/>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <a href="#" className="btn-buy">Buy Now</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div className="box">
                            <h3 style={{color: '#ff0071'}}>Ultimate Plan</h3>
                            <div className="price"><sup>$</sup>49<span> / mo</span></div>
                            <Image src={pricingUltimate} className="img-fluid" alt=""/>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <a href="#" className="btn-buy">Buy Now</a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Pricing;