<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-12 sidebar-service-left">
          <CardStyle5 :card-menu="menu_item" />
          <div class="testimonial-widget-menu widget">
            <CardStyle3 :card-content="list" card-class="owl-carousel owl-loaded owl-drag" />
          </div>
          <div class="widget get-file">
            <h2 class="widget-title">
              Downloads
            </h2>
            <a href="#">
              <ul class="list-inline download-item">
                <li class="list-inline-item"> <i class="fa fa-file-pdf-o" /><span class="ml-3">PDF download</span> </li>
              </ul>
            </a>
          </div>
          <div class="widget get-file mb-5">
            <a href="#">
              <ul class="list-inline download-item">
                <li class="list-inline-item"><i class="fa fa-file-pdf-o" /><span class="ml-3">Company White Paper</span></li>
              </ul>
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <h3 class="text-left mb-2">
            Big Data Consulting
          </h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. It uses a dictionary of over 200 Latin words.</p>
          <p class="mb-5">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
          </p>
          <div class="row iq-pb-45">
            <div class="col-md-12">
              <div
                class="owl-carousel owl-services owl-loaded owl-drag"
                data-dots="false"
                data-nav="false"
                data-items="2"
                data-items-laptop="1"
                data-items-tab="1"
                data-items-mobile="1"
                data-items-mobile-sm="1"
                data-autoplay="true"
                data-loop="true"
                data-margin="15"
              >
                <div v-for="(item,index) in images" :key="index" class="Consulting-box service-slider  text-left">
                  <img :src="item.src" alt="slider">
                  <div class="details-box clearfix">
                    <div class="consult-details">
                      <h5>{{ item.title }}</h5>
                      <p class="mb-0">
                        {{ item.subtitle }}
                      </p>
                    </div>
                    <a href="#"><i aria-hidden="true" class="ion ion-plus" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-left mb-2">
                Big Data Implementation
              </h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .</p>
              <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
          </div>
          <div class="row iq-pb-45">
            <div class="col-md-6">
              <h4 class="text-left mb-4">
                Big data support
              </h4>
              <div class="text-left">
                <ul class="iq-list">
                  <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the Lorem Ipsum.</span></li>
                  <li><i class="fa fa-check-square-o" /><span>There are many variations of passages.</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Contrary to popular belief, Lorem </span></li>
                  <li><i class="fa fa-check-square-o" /><span>It is a long established fact that a reader.</span></li>
                  <li><i class="fa fa-check-square-o" /><span>All the Lorem Ipsum generators.</span></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 iq-sm-mt-30">
              <h4 class="text-left mb-4">
                Big data managed
              </h4>
              <div class="wrapper">
                <div class="service-chart">
                  <canvas id="canvas" class="big-data-services-chart" width="216" height="216" />
                </div>
                <ul id="js-legend" class="chart-legend" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="text-left mb-2">
                Data Implementation
              </h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
              <p class="mb-0">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Service',
  data () {
    return {
      list: [
        {
          title: 'Jack White',
          subtitle: 'CEO',
          description: 'Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur.',
          src: require('../../assets/images/testimonials/1.jpg')
        },
        {
          title: 'Walhan Bobe',
          subtitle: 'Business Adviser',
          description: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste.”',
          src: require('../../assets/images/testimonials/2.jpg')
        },
        {
          title: 'Mark McManus',
          subtitle: 'COO',
          description: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”',
          src: require('../../assets/images/testimonials/3.jpg')
        }
      ],
      images: [
        {
          title: 'Apache Hadoop',
          subtitle: 'It is a long established.',
          src: require('../../assets/images/about-us/03.png')
        },
        {
          title: 'Apache Spark',
          subtitle: 'It is a long established.',
          src: require('../../assets/images/about-us/04.png')
        },
        {
          title: 'Apache Cassandra',
          subtitle: 'It is a long established.',
          src: require('../../assets/images/about-us/05.png')
        },
        {
          title: 'Big Data Consulting',
          subtitle: 'It is a long established.',
          src: require('../../assets/images/about-us/04.png')
        }
      ],
      menu_item: [
        {
          title: 'Data Analytics',
          class: 'nav-link',
          href: 'data-analytics'
        },
        {
          title: 'Managed Analytics',
          class: 'nav-link',
          href: 'managed-analytics'
        },
        {
          title: 'Big Data Services',
          class: 'nav-link current-menu-item',
          href: 'big-data-services'
        },
        {
          title: 'Data Science Consulting',
          class: 'nav-link',
          href: 'data-science-consulting'
        },
        {
          title: 'Business Intelligence',
          class: 'nav-link',
          href: 'business-intelligence'
        },
        {
          title: 'Data Visualization',
          class: 'nav-link',
          href: 'data-visualization'
        },
        {
          title: 'Data Management',
          class: 'nav-link',
          href: 'data-management'
        },
        {
          title: 'Artificial Intelligence',
          class: 'nav-link',
          href: 'artificial-intelligence'
        }
      ]
    }
  }
}
</script>
