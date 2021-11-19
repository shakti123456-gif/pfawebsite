import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            {/* Header Top Section */}
            <section style={{ background: "#C03228", padding: "50px 0" }}>
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-md-8 col-sm-12 col-xl-6 col-lg-6"><h5 className="leftTxt">Start your career as a Pilot now</h5></div>
                        <div class="col-12 col-md-4 col-sm-12 col-xl-6 col-lg-6"><div class="actionFooter"><a href="https://forms.zohopublic.com/chimesaviationacademy/form/ApplyNowForms/formperma/-wvRjsOmYZYWJW0hu1e99Lz84MfT2Joe5BTn3ejYUUc" target="_blank" class="btn btn-white">Apply Now
                            <img src="https://caaindia.com/wp-content/themes/caaindia/images/plane-icon.png" /></a></div></div>
                    </div>
                </div>
            </section>

            {/* Header Middle Section */}
            <section className="mt-5 mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-4 col-sm-12 col-xl-4 col-lg-4">
                            <h6 className="text-left">About CAA</h6>
                            <ul className="ulList">
                                <li><a href="https://caaindia.com/about-caa/">About Us</a></li>
                                <li><a href="https://caaindia.com/about-caa/">Vision &amp; Mission</a></li>
                                <li><a href="https://caaindia.com/why-caa/certifications/">Certifications</a></li>
                                <li><a href="https://caaindia.com/about-us/management/">Management</a></li>
                                <li><a href="https://caaindia.com/about-us/about-chimes-group/">About Chimes Group</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-4 col-sm-12 col-xl-4 col-lg-4"><h6 className="text-left">Quick Links</h6>
                            <ul className="ulList">
                                <li><a href="https://caaindia.com/faq/">FAQs</a></li>
                                <li><a href="https://caaindia.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="https://caaindia.com/terms-of-use/">Terms of Use</a></li>
                                <li><a href="https://caaindia.com/csr-policy/">CSR Policy</a></li>
                            </ul>
                        </div>

                        <div class="col-12 col-md-4 col-sm-12 col-xl-4 col-lg-4">
                            <div class="newsLetter">
                                <h6 className="text-left">Subcscribe</h6><p>Subcscribe for updates from CAA</p>
                                <div role="form" class="wpcf7" id="wpcf7-f794-o1" lang="en-US" dir="ltr">
                                    <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                                    <form action="/#wpcf7-f794-o1" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
                                        <p>
                                            <span class="wpcf7-form-control-wrap fullname">
                                                <input type="text" name="fullname" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Full Name" />
                                            </span>
                                            <span class="wpcf7-form-control-wrap emailid">
                                                <input type="text" name="emailid" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Email" />
                                            </span>
                                        </p>
                                        <div class="action">
                                            <input type="submit" value="Subscribe" class="wpcf7-form-control has-spinner wpcf7-submit" />
                                            <span class="wpcf7-spinner"></span>
                                            <img src="https://caaindia.com/wp-content/themes/caaindia/images/mail-icon.png" />
                                        </div>
                                        <div class="wpcf7-response-output" aria-hidden="true">
                                        </div>
                                        <input type="hidden" name="XGVgUWApk" value="e9*[VblMjnqA" />
                                        <input type="hidden" name="ZQGwMXRHFlz-" value="jmxiz7Bg" />
                                        <input type="hidden" name="kGRFbuZVKpDj" value="59_t7gfvBphxX" /><input type="hidden" name="QrSkeKvws" value="s3ue*SbyoT]fBjgd" />
                                    </form>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Header Bottom Section */}
            <section className="footerBottomSec">
                <div class="container">
                    <div class="row">
                        <div class="copyright">© 2020 Chimes Group. All Rights Reserved.</div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;