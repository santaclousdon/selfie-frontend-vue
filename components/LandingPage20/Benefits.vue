<template>
  <section class="position-relative overview-block-ptb iq-pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="row">
            <div v-for="(item,index) in items" :key="index" class="col-lg-6 col-md-6 ">
              <div class="consult-services wow fadeInUp default none large  text-left" data-wow-delay="0.3s">
                <div class="circle-effect">
                  <img :src="item.src" class="img-fluid" alt="fancybox">
                </div><h3 class="mb-2">
                  {{ item.title }}
                </h3><p class="mb-0">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4  wow fadeInUp">
          <div class="title-box wow fadeInUp  text-left">
            <span class="title-design">Benefits</span><h2>What you'll learn with our ebook</h2><p>We Books and distilled the knowledge of several experienced design professionals, and made it free for personal use in the form of a live ebook.</p>
          </div>
          <div id="object_2115121124" class="layer_wrap iq-objects  style-one left">
            <span class="iq-objects-01">
              <img src="../../assets/images/others/20.png" alt="drive02">
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Benefits',
  data () {
    return {
      items: [
        {
          src: require('../../assets/images/security/03.png'),
          title: 'Make predictions',
          desc: ' Learn about tried and true strategies our team has been implementing and improving over years of cooperation'
        },
        {
          src: require('../../assets/images/security/04.png'),
          title: 'Robust Machine',
          desc: ' Learn about tried and true strategies our team has been implementing and improving over years of cooperation'
        },
        {
          src: require('../../assets/images/security/01.png'),
          title: ' Powerful Analysis',
          desc: ' Learn about tried and true strategies our team has been implementing and improving over years of cooperation'
        },
        {
          src: require('../../assets/images/security/06.png'),
          title: 'Handle techniques',
          desc: ' Learn about tried and true strategies our team has been implementing and improving over years of cooperation'
        }
      ]
    }
  }
}
</script>
