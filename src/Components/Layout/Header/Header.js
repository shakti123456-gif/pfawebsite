import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div class="top_bar">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-6"><div class="social_top">
                            <ul>
                                <li><a href="https://www.instagram.com/chimesaviationacademy/" class="fab fa-instagram" target="_blank"></a></li>
                                <li><a href="https://www.facebook.com/Chimesaviationacademy/" class="fab fa-facebook-f" target="_blank"></a></li>
                                <li><a href="https://www.youtube.com/caaindia" class="fab fa-youtube" target="_blank"></a></li>
                                <li><a href="https://twitter.com/chimesaviation?lang=en" class="fab fa-twitter" target="_blank"></a></li>
                                <li><a href="https://in.linkedin.com/company/chimes-aviation-academy-caa-" class="fab fa-linkedin-in" target="_blank"></a></li>
                            </ul></div></div>

                        <div class="col-12 col-sm-6 col-md-9 col-lg-8 col-xl-6">
                            <span>TRAINING INDIA'S<span class="topYear"> FUTURE </span></span>
                            <a href="https://zfrmz.com/D53RWfaBoRosoXWUBrLE" target="_blank" class="hiringBtn">Work With Us</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3"><div class="logo"><a href="https://caaindia.com">
                        <img src="https://caaindia.com/wp-content/themes/caaindia/images/caaindia-logo.png" alt="caaindia" class="img-fluid" /></a></div></div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                        {/* <!--<div class="year_logo"><img src="https://caaindia.com/wp-content/themes/caaindia/images/left-logo-1-1.png" class="img-fluid"></div>--> */}
                        <div class="top_applbtn"><a href="https://forms.zohopublic.com/chimesaviationacademy/form/ApplyNowForms/formperma/-wvRjsOmYZYWJW0hu1e99Lz84MfT2Joe5BTn3ejYUUc" target="_blank">Apply Now</a></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;