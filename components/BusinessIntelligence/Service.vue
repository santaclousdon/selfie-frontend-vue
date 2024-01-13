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
                <li class="list-inline-item"> <i class="far fa-file-pdf" /><span class="ml-3">PDF download</span> </li>
              </ul>
            </a>
          </div>
          <div class="widget get-file mb-5">
            <a href="#">
              <ul class="list-inline download-item">
                <li class="list-inline-item"><i class="far fa-file-pdf" /><span class="ml-3">Company White Paper</span></li>
              </ul>
            </a>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12">
          <h3 class="text-left mb-2">
            Our Services
          </h3>
          <div class="row">
            <div class="col-md-6">
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything hidden in the middle of text.</p>
            </div>
            <div class="col-md-6">
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
            </div>
          </div>
          <div class="row iq-pb-45">
            <div class="col-md-12">
              <div
                class="owl-carousel owl-loaded owl-drag"
                data-dots="true"
                data-nav="false"
                data-items="2"
                data-items-laptop="1"
                data-items-tab="1"
                data-items-mobile="1"
                data-items-mobile-sm="1"
                data-autoplay="true"
                data-loop="true"
                data-margin="30"
              >
                <div v-for="(image,index) in images" :key="index" class="consulting-img text-left">
                  <img :src="image.src" alt="slider">
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-left mb-2">
                Improved production efficiency
              </h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden .</p>
            </div>
          </div>
          <div class="row">
            <div v-for="(item,index) in items" :key="index" class="col-md-6">
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
          <div class="row">
            <div class="col-sm-12">
              <h3 class="text-left mb-2">
                Challenges We Solve
              </h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
              <div class="text-left">
                <ul class="iq-list">
                  <li><i class="fa fa-check-square-o" /><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span></li>
                  <li><i class="fa fa-check-square-o" /><span>There are many variations of passages of Lorem Ipsum available,</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</span></li>
                  <li><i class="fa fa-check-square-o" /><span> All the Lorem Ipsum generators on the Internet tend to repeat.</span></li>
                  <li><i class="fa fa-check-square-o" /><span>Simply dummy text of the Lorem Ipsum is printing and type setting industry.</span></li>
                </ul>
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
          src: require('../../assets/images/about-us/03.png')
        },
        {
          src: require('../../assets/images/about-us/04.png')
        },
        {
          src: require('../../assets/images/about-us/05.png')
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
          class: 'nav-link current-menu-item',
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
      ],
      items: [
        {
          class: 'flaticon flaticon-worker',
          title: 'BI Consulting',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {
          class: 'flaticon flaticon-document',
          title: 'BI Implementation',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {
          class: 'flaticon flaticon-business',
          title: 'Data Warehouse',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        },
        {
          class: 'flaticon flaticon-project-management',
          title: 'BI Solutions',
          subtitle: 'It is a long established fact that a reader will be distracted.'
        }
      ]
    }
  }
}
</script>
