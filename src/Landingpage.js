import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const Landing = () => {
    return (
        <>
            <div className="container-fluid p-5" style={{backgroundImage:'url("https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2021/09/26/mario-gogh-vblhicvh-li-unsplash-1-1034515-1632672024.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true")'}}>
                <div className="row">
                    <div className="col-12 ps-5">
                        <img src="https://static.wixstatic.com/media/2fb119_19ff2376b94e4fd09b975b2b63853ec8~mv2.png/v1/crop/x_0,y_39,w_1751,h_418/fill/w_306,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANARGHYA%20Logo%20.png" alt="Logo" style={{backgroundColor:"white"}}/>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-6">
                        <p className="text-white">
                            At Anarghya Communications Pvt. Ltd., our mission is to be at the forefront of technological innovation, driving progress, and transforming industries through cutting-edge software solutions. As a dynamic software company with a dedicated arm for technology innovations and incubations, our mission is two folds:

                            Leading the Digital Transformation:
                            Our primary mission is to empower businesses and organizations to thrive in the digital age. We aim to be a trusted partner on their journey towards digital transformation.

                            By leveraging our expertise in software development, we assist our clients in adopting technology solutions that enhance efficiency, competitiveness, and customer satisfaction.

                            Nurturing Innovation and Shaping the Future:
                            As an integral part of our identity, our mission extends to our role as a technology innovations and incubations company.

                            We are committed to nurturing innovation, incubating startups, and contributing to the broader tech ecosystem.

                            We seek to shape the future by exploring emerging technologies, conducting groundbreaking research, and fostering a culture of creativity within our organization.
                        </p>
                    </div>
                    <div className="col-6 pt-1">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://media.istockphoto.com/id/1222730065/photo/group-of-computer-programmers-talking-while-working-in-the-office.jpg?s=612x612&w=is&k=20&c=UXWVodiojHR5Vm98tN-DDhg6SYUl7SWnRn9vVqsmIx8=" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://media.istockphoto.com/id/1179749396/photo/almost-finished-editing-this-image.jpg?s=612x612&w=is&k=20&c=pbpLEhBE8ptv5q7AJRhqqw0jLm86BsvYkZ_CIuCpXXU=" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://media.istockphoto.com/id/1151114492/photo/improvised-business-meeting-in-the-office-colleagues-talking-and-discussing-future-strategies.jpg?s=612x612&w=is&k=20&c=K4McZ22Jrdq0hjFcVqFn4KHm1si43_zIxQ7wgw2-tPA=" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                    <Link type="button" to="/Login" class="btn btn-light">Explore Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landing;