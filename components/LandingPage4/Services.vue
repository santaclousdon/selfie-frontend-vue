<template>
  <section class="pt-0">
    <div class="container">
      <div class="row iq-how-it-works">
        <div class="col-sm-12 wow fadeInUp">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">Our Services</span>
            <h2>Explore Our Data Services</h2>
          </div>
          <div class="custom-tab">
            <ul id="pills-tab" class="nav nav-pills mb-5 text-center" role="tablist">
              <li v-for="(tab,index) in tabs" :key="index" class="nav-item">
                <a
                  class="nav-link"
                  :class="tab.active ? ' active ' : ''"
                  data-toggle="pill"
                  :href="'#' + tab.href"
                  role="tab"
                  :aria-controls="tab.href"
                >
                  <img :src="tab.image" alt="tab-image" class="img-fluid">
                  <h5 class="tab-title">{{ tab.title }}</h5>
                </a>
              </li>
            </ul>
            <!-- Tab Pan -->
            <div class="show_content">
              <div id="tab-big-data" class="tab-pane fade active show">
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-12">
                    <h4 class="custom_heading mb-2">
                      Choose Your Software Development Service by Category
                    </h4>
                    <div class="text-left mb-3">
                      <p>Tame your big data through robust solutions that empower data collection, storage, processing and analysis.</p>
                    </div>
                  </div>
                </div>
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-4">
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span> Advance Advisory Team</span></li>
                        <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the</span></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span>Professional Consulting Services </span> </li>
                        <li><i class="fa fa-check-square-o" /><span>It is a long established fact.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span>24/7 Support Help Center</span> </li>
                        <li><i class="fa fa-check-square-o" /><span>will be distracted by the of readable</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-12">
                    <div class=" text-left mt-4 ">
                      <a class="button button-icon" href="/services"><span
                        class="btn-effect"
                      > View all Services</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-machine-learning" class="tab-pane fade">
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-6">
                    <h4 class="custom_heading mb-2">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    </h4>
                    <div class="text-left no-margin">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. </p>
                    </div>
                    <div class="text-left mt-4 mb-lg-0 mb-md-0 mb-4">
                      <a class="button button-icon" href="/services"><span class="btn-effect"> Read More</span></a>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <h4 class="custom_heading mb-3">
                      Dignissimos ducimus qui blanditiis
                    </h4>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span> Advance Advisory Team </span></li>
                        <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the </span> </li>
                        <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the </span> </li>
                        <li><i class="fa fa-check-square-o" /><span> Advance Advisory Team </span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-analytical-ai" class="tab-pane fade">
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-12">
                    <h4 class="custom_heading mb-2">
                      Choose Your Software Development Service by Category
                    </h4>
                    <div class="text-left mb-3">
                      <p>Tame your big data through robust solutions that empower data collection, storage, processing and analysis.</p>
                    </div>
                  </div>
                </div>
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-4">
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span> Advance Advisory Team </span></li>
                        <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the </span> </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span>Professional Consulting Services </span> </li>
                        <li><i class="fa fa-check-square-o" /><span>It is a long established fact.</span></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span>24/7 Support Help Center</span> </li>
                        <li><i class="fa fa-check-square-o" /><span>will be distracted by the of readable</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-12">
                    <div class=" text-left mt-4 ">
                      <a class="button button-icon" href="/services"><span
                        class="btn-effect"
                      > View all Services</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-computer-vision" class="tab-pane fade">
                <div class="row pl-lg-5 pr-lg-5">
                  <div class="col-sm-6">
                    <h4 class="custom_heading mb-2">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    </h4>
                    <div class="text-left no-margin">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                    </div>
                    <div class=" text-left mt-4 mb-lg-0 mb-md-0 mb-4 ">
                      <a class="button button-icon" href="/services"><span class="btn-effect"> Read More</span></a>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <h4 class="custom_heading mb-3">
                      Dignissimos ducimus qui blanditiis
                    </h4>
                    <div class="text-left">
                      <ul class="iq-list">
                        <li><i class="fa fa-check-square-o" /><span> Advance Advisory Team </span></li>
                        <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the </span> </li>
                        <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the </span> </li>
                        <li><i class="fa fa-check-square-o" /><span> Advance Advisory Team </span></li>
                      </ul>
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
          href: 'tab-big-data',
          title: 'Big Data',
          active: true,
          image: require('../../assets/images/services/03.png')
        },
        {
          href: 'tab-machine-learning',
          title: 'Machine Learning',
          active: false,
          image: require('../../assets/images/services/02.png')
        },
        {
          href: 'tab-analytical-ai',
          title: 'Analytical AI',
          active: false,
          image: require('../../assets/images/services/01.png')
        },
        {
          href: 'tab-computer-vision',
          title: 'Computer Vision',
          active: false,
          image: require('../../assets/images/services/04.png')
        }
      ]
    }
  }
}
</script>
