import React from 'react'
import slide1 from "../Image/slide1.jpg"
import slide2 from "../Image/slide2.jpg";
import slide3 from "../Image/slide3.jpg";
function Couresel() {
  return (
    <>
 <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src={slide2} alt="Image"/>
                    <div class="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                        <div class="text-start p-5" style={{maxWidth: "900px"}}>

                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src={slide3} alt="Image"/>
                    <div class="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src={slide1} alt="Image"/>
                    <div class="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </>
  )
}

export default Couresel