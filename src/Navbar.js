const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between">
                                            <div className="justify-content-end">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#"><img src="https://static.wixstatic.com/media/2fb119_19ff2376b94e4fd09b975b2b63853ec8~mv2.png/v1/crop/x_0,y_39,w_1751,h_418/fill/w_306,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANARGHYA%20Logo%20.png" className="img-fluid" /></a>
                                            </li>
                                            <li class="nav-item pt-4">
                                                <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}}>Admin Dashboard</a>
                                            </li>
                                            <li class="nav-item pt-4">
                                                <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}} >Employee name</a>
                                            </li>
                                        </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
        </>
    )
}
export default Navbar;