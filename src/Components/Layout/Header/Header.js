import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    const gotoPage = (page) => {
        navigate(page)
    }
    return (
        <header>
            <nav className="headerSec">
                <div class="container">
                    <div class="row">
                        <div className="col col-md-2 txt text-start">
                            <img src="/assets/pnglogo.png" className="logo" onClick={() => gotoPage("/")} />
                        </div>
                        <div className="col col-md-1 txt pt-4 s1" onClick={() => gotoPage("/")}>Home</div>
                        <div className="col col-md-1 txt pt-4 s1" onClick={() => gotoPage("/about")}>About</div>
                        <div className="col col-md-1 txt pt-4 dropdown-toggle s1" type="button" onClick={() => gotoPage("/courses")}>Courses</div>
                        <div className="col col-md-1 txt pt-4 padd s1" onClick={() => gotoPage("/facilities")}>Facilities</div>
                        <div className="col col-md-2 txt pt-4 padd2 s1" onClick={() => gotoPage("/how-to-apply")}>How To Apply</div>
                        <div className="col col-md-2 txt pt-4 s1" onClick={() => gotoPage("/infrastructure")}>Infrastructure</div>
                        <div className="col col-md-1 txt pt-4 s1" onClick={() => gotoPage("/galary")}>Gallary</div>
                        <div className="col col-md-1 txt pt-4 s1" onClick={() => gotoPage("/contact")}>Contact</div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;