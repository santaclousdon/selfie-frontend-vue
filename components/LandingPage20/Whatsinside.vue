<template>
  <section class="position-relative overview-block-ptb iq-pb-70 iq-overbook">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 wow fadeInUp">
          <div class="iq-get-data-left">
            <img src="../../assets/images/visual/03.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="title-box wow fadeInUp  text-left">
                <span class="title-design" /><h2>What's Inside Our E-book</h2><p>More then 50+ Chapters in a ebooks a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="(item,index) in items" :key="index" class="col-lg-6 col-md-6 ">
              <div class="fancybox-visualization-service wow fadeInUp  text-left">
                <div class="icon-bg">
                  <i aria-hidden="true" class="fa fa-check" style="color:#ffffff; background-color:#000000" />
                </div>
                <div class="service-detail align-self-center">
                  <h5 class="mb-2" style="color: #000000;">
                    {{ item.title }}
                  </h5><p class="m-0">
                    {{ item.desc }}
                  </p>
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
  name: 'Whatsinside',
  data () {
    return {
      items: [
        {
          title: 'Machine Learning',
          desc: ' It is a long established fact that a'
        },
        {
          title: 'Important notes',
          desc: ' It is a long established fact that a'
        },
        {
          title: ' Additional Resources',
          desc: ' It is a long established fact that a'
        },
        {
          title: ' Udemy Reviews',
          desc: ' It is a long established fact that a'
        }
      ]
    }
  }
}
</script>
