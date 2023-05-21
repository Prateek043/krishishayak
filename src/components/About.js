import React from 'react'
import aboutImg from "../components/Image/aboutImage2.jpg"
function About() {
  return (
    <div class="container-fluid about pt-5 mt-3">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="d-flex h-100 border border-5 border-primary border-bottom-1">
                        <img class="img-fluid mx-auto" style={{maxHeight:"600px"}} src={aboutImg}/>
                    </div>
                </div>
                <div class="col-lg-6 pb-5">
                    <div class="mb-3 pb-2">
                        <h6 class="text-primary text-uppercase">About Us</h6>
                        <h3 class="display-5">If the farmer is rich, then so is the nation</h3>
                    </div>
                    <h4 class="mb-4">“Cultivators are the most valuable citizens… they are tied to their country.”</h4>
                    <div class="row gx-5 gy-4">
                        <div class="col-sm-6">
                            <i class="fa fa-seedling display-1 text-secondary"></i>
                            <h4>Kisan Suvidha</h4>
                            <p class="mb-0">Better farming refers to the adoption of sustainable and efficient agricultural practices that aim to increase productivity while minimizing negative impacts on the environment. </p>
                        </div>
                        <div class="col-sm-6">
                            <i class="fa fa-award display-1 text-secondary"></i>
                            <h4>Crop Insurance</h4>
                            <p class="mb-0">This  helps to the farmers to calculate insurance premium for notified crops and provides them with information on cut-off dates and company contacts for their crop and location. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About