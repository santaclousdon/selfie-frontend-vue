<template>
  <div class="position-relative overview-block-ptb">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div
            class="owl-carousel client-logo client-bg-shadow"
            data-dots="false"
            data-nav="false"
            data-items="5"
            data-items-laptop="4"
            data-items-tab="3"
            data-items-mobile="1"
            data-items-mobile-sm="1"
            data-autoplay="true"
            data-loop="true"
            data-margin="30"
          >
            <div v-for="(award,index) in awards" :key="index" class="item ">
              <div class="clients-box hover-effct">
                <img :src="award.src" class="img-fluid" alt="awards">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Awards',
  data () {
    return {
      awards: [
        {
          src: require('../../assets/images/awards/1.png')
        },
        {
          src: require('../../assets/images/awards/2.png')
        },
        {
          src: require('../../assets/images/awards/3.png')
        },
        {
          src: require('../../assets/images/awards/4.png')
        },
        {
          src: require('../../assets/images/awards/5.png')
        },
        {
          src: require('../../assets/images/awards/3.png')
        }
      ]
    }
  }
}
</script>>
