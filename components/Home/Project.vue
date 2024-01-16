<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 fadeInUp  animated">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">OUR PROJECTS</span>
            <h2>Projects in Different Domain of Industry</h2>
          </div>
        </div>
        <div class="col-md-12">
          <div id="features" class="iq-amazing-tab wow fadeInUp" data-wow-delay="1s">
            <div class="row">
              <div class="col-lg-12">
                <ul id="myTab" class="nav  justify-content-center" role="tablist">
                  <li v-for="(tab,index) in tabs" :key="index" class="nav-item">
                    <a
                      :id="tab.id"
                      class="nav-link"
                      :class="tab.active ? ' active ' : ''"
                      data-toggle="pill"
                      :href="'#' + tab.href"
                      role="tab"
                      :aria-controls="tab.href"
                    >{{ tab.title }}
                      <span class="post_no">{{ tab.post_no }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content">
              <div id="all" class="tab-pane active show">
                <div class="row flex-row-reverse">
                  <div class="col-lg-12 text-left align-self-center">
                    <div
                      class="owl-carousel owl-loaded owl-drag"
                      data-dots="false"
                      data-nav="false"
                      data-items="3"
                      data-items-laptop="3"
                      data-items-tab="2"
                      data-items-mobile="1"
                      data-items-mobile-sm="1"
                      data-autoplay="false"
                      data-loop="true"
                      data-margin="30"
                    >
                      <div class="iq-masonry-item item video">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/01.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Video
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item html">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/03.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  HTML
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item html">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/04.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  HTML
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item design">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/05.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Design
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/04.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/03.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item design photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/02.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item design">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/01.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Design
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="design" class="tab-pane">
                <div class="row flex-row-reverse">
                  <div class="col-lg-12 text-left align-self-center">
                    <div
                      class="owl-carousel owl-loaded owl-drag"
                      data-dots="false"
                      data-nav="false"
                      data-items="3"
                      data-items-laptop="3"
                      data-items-tab="2"
                      data-items-mobile="1"
                      data-items-mobile-sm="1"
                      data-autoplay="false"
                      data-loop="true"
                      data-margin="30"
                    >
                      <div class="iq-masonry-item item design">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/05.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Design
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item design photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/02.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item design">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/01.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Design
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="html" class="tab-pane">
                <div class="row flex-row-reverse">
                  <div class="col-lg-12 text-left align-self-center">
                    <div
                      class="owl-carousel owl-loaded owl-drag"
                      data-dots="false"
                      data-nav="false"
                      data-items="3"
                      data-items-laptop="3"
                      data-items-tab="2"
                      data-items-mobile="1"
                      data-items-mobile-sm="1"
                      data-autoplay="false"
                      data-loop="true"
                      data-margin="30"
                    >
                      <div class="iq-masonry-item item html">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/03.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  HTML
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item html">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/04.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  HTML
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="photography" class="tab-pane">
                <div class="row flex-row-reverse">
                  <div class="col-lg-12 text-left align-self-center">
                    <div
                      class="owl-carousel owl-loaded owl-drag"
                      data-dots="false"
                      data-nav="false"
                      data-items="3"
                      data-items-laptop="3"
                      data-items-tab="2"
                      data-items-mobile="1"
                      data-items-mobile-sm="1"
                      data-autoplay="false"
                      data-loop="true"
                      data-margin="30"
                    >
                      <div class="iq-masonry-item item photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/04.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/03.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="iq-masonry-item item design photography">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/02.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Photography
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="video" class="tab-pane">
                <div class="row flex-row-reverse">
                  <div class="col-lg-12 text-left align-self-center">
                    <div
                      class="owl-carousel owl-loaded owl-drag"
                      data-dots="false"
                      data-nav="false"
                      data-items="3"
                      data-items-laptop="3"
                      data-items-tab="2"
                      data-items-mobile="1"
                      data-items-mobile-sm="1"
                      data-autoplay="false"
                      data-loop="true"
                      data-margin="30"
                    >
                      <div class="iq-masonry-item item video">
                        <div class="iq-portfolio">
                          <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="require('../../assets/images/about-us/01.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                          <div class="iq-portfolio-content  text-center">
                            <div class="details-box clearfix">
                              <div class="consult-details">
                                <a href="#">
                                  <h5 class="text-hover"> Business Growth</h5>
                                </a>
                                <p class="mb-0">
                                  Video
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Services',
  data () {
    return {
      tabs: [
        {
          id: 'all-tab',
          href: 'all',
          title: 'All',
          active: true,
          post_no: 8
        },
        {
          id: 'design-tab',
          href: 'design',
          title: 'Design',
          active: false,
          post_no: 3
        },
        {
          id: 'html-tab',
          href: 'html',
          title: 'HTML',
          active: false,
          post_no: 2
        },
        {
          id: 'photography-tab',
          href: 'photography',
          title: 'Photography',
          active: false,
          post_no: 3
        },
        {
          id: 'video-tab',
          href: 'video',
          title: 'video',
          active: false,
          post_no: 1
        }
      ]
    }
  }
}
</script>
