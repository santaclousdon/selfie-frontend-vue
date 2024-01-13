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
        <div class="col-lg-8 col-sm-12 pt-5 pt-lg-0">
          <div class="row iq-pb-45">
            <div class="col-sm-12">
              <div class="row ">
                <div class="col-sm-12">
                  <CardStyle4 :card-image="images" card-class="owl-carousel" />
                </div>
              </div>
              <div class="mb-0">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.</p>
                <p>embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
              </div>
            </div>
          </div>
          <div class="row iq-pb-45">
            <div class="col-sm-12 col-md-6">
              <h4 class="mb-4">
                Advanced Analytics Strategies
              </h4>
              <div class="service-chart">
                <canvas id="canvas" class="data-analytics-chart" />
              </div>
              <ul id="js-legend" class="chart-legend" />
            </div>
            <div class="col-sm-12 col-md-6 mt-5 mt-lg-0 mt-md-0 ">
              <h4 class="mb-4">
                Advanced Analytics Strategies
              </h4>
              <div class="text-left">
                <ul class="iq-list">
                  <li><i class="fa fa-check-square-o" /><span>Advance Advisory Team</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Professional Consulting Services</span></li>
                  <li><i class="fa fa-check-square-o" /><span> 24/7 Support Help Center</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations</span></li>
                  <li><i class="fa fa-check-square-o" /><span>There are many variations of passages.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="mb-3">
                Advanced Analytics Strategies
              </h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .</p>
              <h3 class="mb-3">
                Software Product Development
              </h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .</p>
              <div class="row">
                <div class="col-sm-6">
                  <div class="text-left mb-2 mb-lg-0 mb-md-0 ">
                    <ul class="iq-list">
                      <li> <i class="fa fa-check-square-o" /><span>Advance Advisory Team</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span>Professional Consulting Services</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span> 24/7 Support Help Center</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span>There are many variations of passages.</span> </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="text-left">
                    <ul class="iq-list">
                      <li> <i class="fa fa-check-square-o" /><span>Advance Advisory Team</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span>Professional Consulting Services</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span> 24/7 Support Help Center</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations</span> </li>
                      <li> <i class="fa fa-check-square-o" /><span>There are many variations of passages.</span> </li>
                    </ul>
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
  name: 'Analytics',
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
          src: require('../../assets/images/about-us/04.png')
        },
        {
          src: require('../../assets/images/about-us/03.png')
        },
        {
          src: require('../../assets/images/about-us/04.png')
        },
        {
          src: require('../../assets/images/about-us/03.png')
        },
        {
          src: require('../../assets/images/about-us/04.png')
        },
        {
          src: require('../../assets/images/about-us/03.png')
        }
      ],
      menu_item: [
        {
          title: 'Data Analytics',
          class: 'nav-link current-menu-item',
          href: 'data-analytics'
        },
        {
          title: 'Managed Analytics',
          class: 'nav-link',
          href: 'managed-analytics'
        },
        {
          title: 'Big Data Services',
          class: 'nav-link',
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
