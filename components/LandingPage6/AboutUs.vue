<template>
  <section class="pt-0">
    <div class="container">
        <div class="row">
          <div class="col-lg-6 wow fadeInUp align-items-center">
              <div class="row">
                <div class="col-md-12">
                    <div class="title-box wow fadeInUp text-center">
                      <span class="title-design">ABOUT US OUR COMPANY</span>
                      <h2>What is Predictive Analytics?</h2>
                    </div>
                </div>
              </div>
              <div class="row custom-tab verticaltab2 text-left  ">
                <div class="col-lg-4 col-md-12 ">
                    <ul class="nav nav-pills mb-5" id="pills-tab" role="tablist" aria-orientation="vertical">
                      <li class="nav-item">
                          <a class="nav-link show active" data-toggle="pill" href="#tab-about-us" role="tab" aria-selected="true">
                            <h6 class="tab-title">About Us</h6>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#tab-our-vision" role="tab" aria-selected="false">
                            <h6 class="tab-title">Our Vision</h6>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#tab-our-mission" role="tab" aria-selected="false">
                            <h6 class="tab-title">Our Mission</h6>
                          </a>
                      </li>
                    </ul>
                </div>
                <div class="col-lg-8 col-md-12 tab-content">
                    <div id="tab-about-us" class="tab-pane fade active show">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.</p>
                      <div class=" text-left  "><a class="button button-icon" href="/landing-page-6"><span class="btn-effect"> View Details</span></a></div>
                    </div>
                    <div id="tab-our-vision" class="tab-pane fade">
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.</p>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. rem ipsum’ will uncover many web sites still in their infancy. </p>
                      <div class=" text-left  "><a class="button button-icon" href="/landing-page-6"><span class="btn-effect"> View Details</span></a></div>
                    </div>
                    <div id="tab-our-mission" class="tab-pane fade">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use.</p>
                      <p>Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. </p>
                      <div class=" text-left  "><a class="button button-icon" href="/landing-page-6"><span class="btn-effect"> View Details</span></a></div>
                    </div>
                </div>
              </div>
          </div>
          <div class="col-lg-6  wow fadeInUp xamin-right-img">
              <img :src="require('../../assets/images/about-us/16.png')" alt="about">
          </div>
        </div>
    </div>
  </section>
</template>
<script>
export default {
    name:'AboutUs'
}
</script>