const Adminnav=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-secondary mt-2">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}}>Add courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#" style={{fontFamily:"sans-serif"}}>Add topics</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-disabled="true" href="#" style={{fontFamily:"sans-serif"}}>View Reports</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{fontFamily:"sans-serif"}} />
                                        <button className="btn btn-outline-primary" type="submit" style={{fontFamily:"sans-serif"}}>Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
        </>
    )
}
export default Adminnav;