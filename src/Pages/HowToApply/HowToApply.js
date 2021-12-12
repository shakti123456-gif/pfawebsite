
import  { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HowToApply.css";
import { scrollToTop } from "../../Utils/Common";

export default function HowToApply() {
    useEffect(() => {
    scrollToTop();
  }, []);  
  return (
  <>
  
<div class="bg-text">

<ol>
<li> Complete PFA Admission Forms </li>

<li>Obtain a Consent Letter from Parents </li>

<li> Fill up Indemnity Bond </li>

<li> Proof of your residence </li>

<li>Proof of your nationality </li>

<li> Proof of your educational qualifications (Attested copies each of certificate/degree and mark sheets) </li>

<li>12 passport-size photographs </li>

<li> Admission fee in the form of a demand draft  </li>


<br/>
<br/>
<br/>
<div class="container"> 
<p>The candidate must apply on a prescribed form attached in the prospectus, available at:

Pioneer Flying Academy

126, Yashwant Place

Chanakyapuri

New Delhi

110021

INDIA</p>
<br/>
<p>The Pioneer prospectus will cost Rs. 1000/-. <br/>The prospectus can be purchased from the Institute by cash or a bank draft of Rs. 1000/- in favour of Pioneer Flying Academy payable at New Delhi.</p>

</div>
</ol>
</div>


</>
        
    );
}


