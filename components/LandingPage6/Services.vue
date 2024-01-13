<template>
  <section class="pt-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="title-box wow fadeInUp text-center">
                  <span class="title-design">OUR SERVICES</span>
                  <h2>We Provide Useful Services</h2>
                </div>
            </div>
          </div>
          <div class="row custom-tab verticaltab3">
            <div class="col-md-6">
                <div class="col-lg-12 col-md-12 ">
                    <ul class="nav nav-pills nav-pills-style-3 mb-5" id="pills-tab" role="tablist" aria-orientation="vertical">
                        <li class="nav-item">
                          <a class="nav-link show active" data-toggle="pill" href="#tab-software-development" role="tab" aria-selected="true">
                              <div class="media">
                                <img :src="require('../../assets/images/services/6-1.png')" alt="tab-image" class="img-fluid">
                                <div class="media-body">
                                    <h5 class="mb-2 active-title">Software Development</h5>
                                    <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                              </div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#tab-application-services" role="tab" aria-selected="false">
                              <div class="media">
                                <img :src="require('../../assets/images/services/6-2.png')" alt="tab-image" class="img-fluid">
                                <div class="media-body">
                                    <h5 class="mb-2 active-title">Application Services</h5>
                                    <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                              </div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#tab-data-analytics" role="tab" aria-selected="false">
                              <div class="media">
                                <img :src="require('../../assets/images/services/6-3.png')" alt="tab-image" class="img-fluid">
                                <div class="media-body">
                                    <h5 class="mb-2 active-title">Data Analytics</h5>
                                    <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                              </div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#tab-help-desk-services" role="tab" aria-selected="false">
                              <div class="media">
                                <img :src="require('../../assets/images/services/6-4.png')" alt="tab-image" class="img-fluid">
                                <div class="media-body">
                                    <h5 class="mb-2 active-title">Help Desk Services</h5>
                                    <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                              </div>
                          </a>
                        </li>
                    </ul>
                  </div>
            </div>
            <div class="col-md-6 tab-content">
                <div id="tab-software-development" class="tab-pane fade active show">
                    <div class="xamin-right-img-wm">
                          <img width="863" height="528" :src="require('../../assets/images/services/13.png')" class="attachment-full"  sizes="100vw">
                    </div>
                </div>
                <div id="tab-application-services" class="tab-pane fade">
                    <div class=" xamin-right-img-wm">
                          <img width="863" height="528" :src="require('../../assets/images/services/14.png')" class="attachment-full"  sizes="100vw">
                    </div>
                </div>
                <div id="tab-data-analytics" class="tab-pane fade">
                    <div class=" xamin-right-img-wm">
                          <img width="863" height="528" :src="require('../../assets/images/services/13.png')" class="attachment-full"  sizes="100vw">
                    </div>
                </div>
                <div id="tab-help-desk-services" class="tab-pane fade">
                    <div class=" xamin-right-img-wm">
                          <img width="863" height="528" :src="require('../../assets/images/services/14.png')" class="attachment-full"  sizes="100vw">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
<script>
export default {
    name:'Services'
}
</script>