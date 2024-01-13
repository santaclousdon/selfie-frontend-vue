<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">WHERE TO USE</span>
            <h2>Chosen Usage Examples</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="custom-tab-userbehavior text-left mt-md-5">
            <ul id="pills-tab" class="nav nav-pills mb-5" role="tablist">
              <li v-for="(tab,index) in tabs" :key="index" class="nav-item">
                <span class="line" />
                <a
                  class="nav-link"
                  :class="tab.active ? ' active ' : ''"
                  data-toggle="pill"
                  :href="'#' + tab.href"
                  role="tab"
                  aria-selected="true"
                >
                  <img :src="tab.image" alt="tab-image" class="img-fluid">
                  <h6 class="tab-title">{{ tab.title }}</h6>
                  <span class="dot" />
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="tab-collect-data" class="tab-pane fade active show">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box wow fadeInUp  text-left">
                      <span class="title-design">01</span>
                      <h2>Collect Accurate Data</h2>
                      <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                    </div>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check" /><span>Boost Seo ranking</span></li>
                        <li><i class="fa fa-check" /><span>Marketing</span></li>
                        <li><i class="fa fa-check" /><span>Social Sharing</span></li>
                      </ul>
                    </div>
                    <div class=" text-left mt-5 ">
                      <a class="button button-icon" href="/landing-page-8"><span class="btn-effect"> View Details</span></a>
                    </div>
                  </div>
                  <div class="col-md-6 mt-5 mt-md-0">
                    <img width="562" height="532" :src="require('../../assets/images/about-us/13.png')" class="attachment-full" alt="">
                  </div>
                </div>
              </div>
              <div id="tab-identifytrends" class="tab-pane fade">
                <div class="row">
                  <div class="col-md-6">
                    <img width="1260" height="954" :src="require('../../assets/images/usage/01-01.png')" alt="">
                  </div>
                  <div class="col-md-6">
                    <div class="title-box wow fadeInUp  text-left ">
                      <span class="title-design">02</span>
                      <h2>Collect Accurate Data</h2>
                      <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                    </div>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check" /><span>Boost Seo ranking</span></li>
                        <li><i class="fa fa-check" /><span>Marketing</span></li>
                        <li><i class="fa fa-check" /><span>Social Sharing</span></li>
                      </ul>
                    </div>
                    <div class=" text-left mt-5 ">
                      <a class="button button-icon" href="/landing-page-8"><span class="btn-effect"> View Details</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-understand" class="tab-pane fade">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box wow fadeInUp  text-left">
                      <span class="title-design">03</span>
                      <h2>Collect Accurate Data</h2>
                      <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                    </div>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check" /><span>Boost Seo ranking</span></li>
                        <li><i class="fa fa-check" /><span>Marketing</span></li>
                        <li><i class="fa fa-check" /><span>Social Sharing</span></li>
                      </ul>
                    </div>
                    <div class=" text-left mt-5 ">
                      <a class="button button-icon" href="/landing-page-8"><span class="btn-effect"> View Details</span></a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img width="562" height="532" :src="require('../../assets/images/about-us/13.png')" class="attachment-full" alt="">
                  </div>
                </div>
              </div>
              <div id="tab-goals-hypotheses" class="tab-pane fade">
                <div class="row">
                  <div class="col-md-6">
                    <img width="1260" height="954" :src="require('../../assets/images/usage/01-01.png')" alt="">
                  </div>
                  <div class="col-md-6 mt-5 mt-md-0">
                    <div class="title-box wow fadeInUp  text-left ">
                      <span class="title-design">04</span>
                      <h2>Collect Accurate Data</h2>
                      <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                    </div>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check" /><span>Boost Seo ranking</span></li>
                        <li><i class="fa fa-check" /><span>Marketing</span></li>
                        <li><i class="fa fa-check" /><span>Social Sharing</span></li>
                      </ul>
                    </div>
                    <div class=" text-left mt-5 ">
                      <a class="button button-icon" href="/landing-page-8"><span class="btn-effect"> View Details</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-take-action" class="tab-pane fade">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box wow fadeInUp text-left">
                      <span class="title-design">04</span>
                      <h2>Collect Accurate Data</h2>
                      <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                    </div>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check" /><span>Boost Seo ranking</span></li>
                        <li><i class="fa fa-check" /><span>Marketing</span></li>
                        <li><i class="fa fa-check" /><span>Social Sharing</span></li>
                        <li><i class="fa fa-check" /><span>Retention</span></li>
                        <li><i class="fa fa-check" /><span>Reviews Generatib</span></li>
                      </ul>
                    </div>
                    <div class=" text-left mt-5 ">
                      <a class="button button-icon" href="/landing-page-8"><span class="btn-effect"> View Details</span></a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img width="1260" height="954" :src="require('../../assets/images/usage/01-01.png')" alt="">
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
  name: 'Usage',
  data () {
    return {
      tabs: [
        {
          href: 'tab-collect-data',
          title: 'Collect Data',
          active: true,
          image: require('../../assets/images/usage/5.png')
        },
        {
          href: 'tab-identifytrends',
          title: 'IdentifyTrends',
          active: false,
          image: require('../../assets/images/usage/4.png')
        },
        {
          href: 'tab-understand',
          title: 'Understand',
          active: false,
          image: require('../../assets/images/usage/3.png')
        },
        {
          href: 'tab-goals-hypotheses',
          title: 'Goals & Hypotheses',
          active: false,
          image: require('../../assets/images/usage/2.png')
        },
        {
          href: 'tab-take-action',
          title: 'Take Action',
          active: false,
          image: require('../../assets/images/usage/1.png')
        }
      ]
    }
  }
}
</script>
