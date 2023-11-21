const Slider=()=>{
    return(
        <>
        <nav class="navbar">
                            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button> */}
                            <div class="bg-body-tertiary" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#"><img src="https://media.istockphoto.com/id/1464764064/photo/business-black-man-and-portrait-with-arms-crossed-for-leadership-management-and-trust-smile.webp?b=1&s=170667a&w=0&k=20&c=Sak8IJFnBgUP9mT0f96rMlmWvB6nE2GzigVlGigNNwg=" className="img-fluid" style={{ borderRadius: "100%" }} /></a>
                                    </li>
                                    <li>
                                        <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}}>Employee Id</a>
                                    </li>
                                    <hr />
                                    <li>
                                        <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}}>Profile</a>
                                    </li>
                                    <hr />
                                    <li>
                                        <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}}>View Employees</a>
                                    </li>
                                    <hr />
                                    <li>
                                        <a class="nav-link active" aria-current="page" href="#" style={{fontFamily:"sans-serif"}}>SignOff</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
        </>
    )
}
export default Slider;