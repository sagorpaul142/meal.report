import Meal from "@/app/components/Services/Meal";
import Hostel from "@/app/components/Services/Hostel";
import Catering from "@/app/components/Services/Catering";

const Services = () => {
    return (<section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <span>My Services</span>
                    <h2>My Services</h2>
                    <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4 className="title"><a href={void 0}>Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4 className="title"><a href={void 0}>Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4 className="title"><a href={void 0}>Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia</p>
                        </div>
                    </div>

                </div>

                <div className="mt-5 mb-5">
                    <hr className={'line'}/>
                </div>

                <Meal/>
                <div className="mt-5 mb-5">
                    <hr className={'line'}/>
                </div>
                <Hostel/>
                <div className="mt-5 mb-5">
                    <hr className={'line'}/>
                </div>
                <Catering/>

            </div>
        </section>);
};

export default Services;