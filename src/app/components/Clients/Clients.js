import Image from "next/image";
import ClientOne from "../../images/clients/client-1.png"
import ClientTwo from "../../images/clients/client-2.png"
import ClientThree from "../../images/clients/client-3.png"
import ClientFour from "../../images/clients/client-4.png"
import ClientFive from "../../images/clients/client-5.png"
import ClientSix from "../../images/clients/client-6.png"
import ClientSeven from "../../images/clients/client-7.png"
import ClientEight from "../../images/clients/client-8.png"

const Clients = () => {
    return (
        <section id="clients" className="section-bg">

            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <span>Our CLients</span>
                    <h2>Our CLients</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere
                        santome nida.</p>
                </div>

                <div className="row g-0 clients-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientOne} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientTwo} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientThree} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientFour} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientFive} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientSix} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientSeven} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <Image src={ClientEight} className="img-fluid" alt=""/>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Clients;