import Image from "next/image";
import RanaDepto from '../../images/team/profile-rana-depto.png'
import SuchitaSultana from '../../images/team/profile-suchita-sultana.png'
import Shakhaeat from '../../images/team/shakhaeat.jpg'
import PersonThree from '../../images/team/team-3.jpg'
import ShuvroRoy from '../../images/team/ShuvroRoy.jpg'

const Team = () => {
    return (
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <span>Team</span>
                    <h2>Team</h2>
                    <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam
                        voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
                </div>

                <div className="row gy-5">

                    <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
                        <div className="team-member">
                            <div className="member-img">
                                <Image src={RanaDepto} className="img-fluid" alt=""/>
                            </div>
                            <div className="member-info">
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Rana Depto</h4>
                                <span>Backend Engineer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="400">
                        <div className="team-member">
                            <div className="member-img">
                                <Image src={SuchitaSultana} className="img-fluid" alt=""/>
                            </div>
                            <div className="member-info">
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Suchita Sultana</h4>
                                <span>R&D ● Software Quality Assurance</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="600">
                        <div className="team-member">
                            <div className="member-img">
                                <Image src={Shakhaeat} style={{height: '416px', objectFit: 'cover'}} className="img-fluid" alt=""/>
                            </div>
                            <div className="member-info">
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Shakhaeat Hossain</h4>
                                <span>Mobile Application Lead</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="600">
                        <div className="team-member">
                            <div className="member-img">
                                <Image src={PersonThree} className="img-fluid" alt=""/>
                            </div>
                            <div className="member-info">
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Sagor Chandra Paul</h4>
                                <span>Frontend Developer </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="600">
                        <div className="team-member">
                            <div className="member-img">
                                <Image src={ShuvroRoy} style={{height: '416px', objectFit: 'cover'}}
                                       className="img-fluid" alt=""/>
                            </div>
                            <div className="member-info">
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Shuvro Roy</h4>
                                <span>Digital Marketing Lead</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Team;