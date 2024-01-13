<template>
  <section>
    <div class="container">
      <div class="row row-fluid">
        <div class="fadeInUp col-sm-12 animated">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">OUR PROJECTS</span>
            <h2>Recent Portfolio</h2>
          </div>
        </div>
        <div class="col-md-12">
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
            <div v-for="(list,index) in lists" :key="index" class="iq-masonry-item item html ">
              <div class="iq-portfolio">
                <a href="/portfolio-detail" class="iq-portfolio-img"><img width="1260" height="954" :src="list.image" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt=""></a>
                <div class="iq-portfolio-content  text-center">
                  <div class="details-box clearfix">
                    <div class="consult-details">
                      <a href="/portfolio-detail">
                        <h5 class="text-hover"> {{ list.title }}</h5>
                      </a>
                      <p class="mb-0">
                        {{ list.subtitle }}
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
  </section>
</template>
<script>
export default {
  name: 'Projects',
  data () {
    return {
      lists: [
        {
          title: 'Business Growth',
          subtitle: 'HTML',
          image: require('../../assets/images/about-us/01.png')
        },
        {
          title: 'Business Growth',
          subtitle: 'HTML',
          image: require('../../assets/images/about-us/02.png')
        },
        {
          title: 'Business Growth',
          subtitle: 'HTML',
          image: require('../../assets/images/about-us/01.png')
        }
      ]
    }
  }
}
</script>
