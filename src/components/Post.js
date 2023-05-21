import React from 'react'
import "./css/style.css"
import "./css/bootstrap.min.css"
import blog1 from "../components/img/blog-1.jpg"
import blog2 from "../components/img/blog-2.jpg"
import blog3 from "../components/img/blog-3.jpg"
function Post() {
  return (
    <div>
         <div class="container-fluid py-5">
        <div class="container">
            <div class="mx-auto text-center mb-5" style={{maxWidth:"500px"}}>
                <h6 class="text-primary text-uppercase">Our Blog</h6>
                <h1 class="display-5">Latest Articles From Our Blog Post</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-4">
                    <div class="blog-item position-relative overflow-hidden">
                        <img class="img-fluid" src={blog1} alt=""/>
                        <a class="blog-overlay" href="">
                            <h4 class="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span class="text-white fw-bold">Jan 01, 2050</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-item position-relative overflow-hidden">
                        <img class="img-fluid" src={blog2}alt=""/>
                        <a class="blog-overlay" href="">
                            <h4 class="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span class="text-white fw-bold">Jan 01, 2050</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-item position-relative overflow-hidden">
                        <img class="img-fluid" src={blog3} alt=""/>
                        <a class="blog-overlay" href="">
                            <h4 class="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                            <span class="text-white fw-bold">Jan 01, 2050</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Post