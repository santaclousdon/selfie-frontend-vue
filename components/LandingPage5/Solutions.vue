<template>
  <section >
    <div class="container">
      <div class="row ">
        <div class="col-md-6">
          <div class="title-box wow fadeInUp  text-left">
            <span class="title-design">Solutions</span>
            <h2>Secure and governed. A single source of truth for all.</h2>
          </div>
          <div class="custom-tab text-left">
            <ul class="nav nav-pills mb-5" id="pills-tab" role="tablist">
              <li v-for="(tab,index) in tabs" :key="index" class="nav-item">
                <a
                  class="nav-link"
                  :class="tab.active ? ' active ' : ''"
                  data-toggle="pill"
                  :href="'#' + tab.href"
                  role="tab"
                  :aria-selected="tab.active"
                >
                  <h6 class="tab-title">{{ tab.title }}</h6>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div id="tab-one-platform" class="tab-pane fade active show">
              <div class="row">
                <div class="col-sm-12">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .</p>
                  <div class=" text-left"><a class="button button-icon" href="/landing-page-5"><span class="btn-effect"> Read More</span></a></div>
                </div>
              </div>
            </div>
            <div id="tab-time-value" class="tab-pane fade">
              <div class="row">
                <div class="col-sm-12">
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .</p>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
                  <div class=" text-left"><a class="button button-icon" href="/landing-page-5"><span class="btn-effect"> Read More</span></a></div>
                </div>
              </div>
            </div>
            <div id="tab-smart-work" class="tab-pane fade ">
              <div class="row">
                <div class="col-sm-12">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .</p>
                  <p>The point of using Lorem Ipsum is that it has a more-or-less.</p>
                  <div class=" text-left"><a class="button button-icon" href="/landing-page-5"><span class="btn-effect"> Read More</span></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img :src="require('../../assets/images/about-us/18.png')" alt="fancybox">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Solutions',
  data () {
    return {
      tabs: [
        {
          href: 'tab-one-platform',
          title: 'One Platform',
          active: true
        },
        {
          href: 'tab-time-value',
          title: 'Time value',
          active: false
        },
        {
          href: 'tab-smart-work',
          title: 'Smart work',
          active: false
        }
      ]
    }
  }
}
</script>
