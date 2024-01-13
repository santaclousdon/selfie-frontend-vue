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
            <div class="col-sm-12 col-lg-6 col-md-6">
              <div class="no-margin services-finance-img text-center">
                <img width="400" height="400" :src="require('../../assets/images/about-us/04.png')" class="attachment-full" alt="">
              </div>
            </div>
            <div class="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6">
              <h3>Our Services</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
              <div class="text-left">
                <ul class="iq-list">
                  <li><i class="fa fa-check-square-o" /><span>Efficiently manage and govern ongoing operations of analytics processes</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Access on-demand data scientists to quickly scale your analytics team</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Rapid time to insight</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Lower operating cost and business risk</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="(item,index) in items1" :key="index" class="col-md-6">
              <div class="service-box my-3 wow fadeInUp text-left">
                <i aria-hidden="true" :class="item.class" />
                <div class="service-detail align-self-center">
                  <h4 class="mb-2">
                    {{ item.title }}
                  </h4>
                  <p>{{ item.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row iq-pb-30">
            <div v-for="(item,index) in items2" :key="index" class="col-md-6">
              <div class="service-box my-3 wow fadeInUp text-left">
                <i aria-hidden="true" :class="item.class" />
                <div class="service-detail align-self-center">
                  <h4 class="mb-2">
                    {{ item.title }}
                  </h4>
                  <p>{{ item.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row iq-pb-45">
            <div class="col-sm-12">
              <div>
                <canvas id="canvas" class="data-visualization-chart" />
              </div>
              <ul id="js-legend" class="chart-legend" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-left mb-4">
                Service development Specialist
              </h3>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="owl-carousel owl-loaded owl-drag"
                    data-dots="false"
                    data-nav="false"
                    data-items="3"
                    data-items-laptop="3"
                    data-items-tab="2"
                    data-items-mobile="2"
                    data-items-mobile-sm="1"
                    data-autoplay="true"
                    data-loop="true"
                    data-margin="30"
                  >
                    <div v-for="(item, index) in team" :key="index" class="item text-left">
                      <div class="iq-team">
                        <div class="iq-team-img">
                          <img :src="item.media" class="img-fluid" alt="#1">
                        </div>
                        <div class="iq-share">
                          <div class="slideouticons">
                            <label class="mainlabel"><i class="fa fa-share-alt" /></label>
                            <div class="iconswrapper">
                              <ul>
                                <li><a href="#"><i class="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i class="fab fa-twitter" /></a></li>
                                <li><a href="#"><i class="fab fa-instagram" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="iq-team-info text-center">
                          <a>
                            <h5>{{ item.title }}</h5>
                          </a>
                          <span>{{ item.subtitle }}</span>
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
          class: 'nav-link current-menu-item',
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
      ],
      items1: [
        {
          class: 'flaticon flaticon-growth',
          title: 'Big Data Consulting',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {
          class: 'flaticon flaticon-grouping',
          title: 'Apache Hadoop',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        }
      ],
      items2: [
        {
          class: 'flaticon flaticon-cloud-1',
          title: 'Apache Spark',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {
          class: 'flaticon flaticon-box',
          title: 'Apache Cassandra',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        }
      ],
      team: [
        {
          title: 'Anna Mull',
          subtitle: 'COO',
          media: require('../../assets/images/team/1.jpg')
        },
        {
          title: 'Petey Cruiser',
          subtitle: 'Project Manager',
          media: require('../../assets/images/team/2.jpg')
        },
        {
          title: 'Greta Life',
          subtitle: 'CFO',
          media: require('../../assets/images/team/3.jpg')
        },
        {
          title: 'Marcash Dane',
          subtitle: 'Project Manager',
          media: require('../../assets/images/team/4.jpg')
        },
        {
          title: 'Handry White',
          subtitle: 'Project Manager',
          media: require('../../assets/images/team/5.jpg')
        }
      ]
    }
  }
}
</script>
