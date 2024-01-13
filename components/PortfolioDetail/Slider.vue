<template>
  <div class="container">
    <div class="row ">
      <div class="col-sm-12">
        <div
          class="owl-carousel owl-loaded owl-drag"
          data-dots="false"
          data-nav="true"
          data-items="1"
          data-items-laptop="1"
          data-items-tab="1"
          data-items-mobile="1"
          data-items-mobile-sm="1"
          data-autoplay="true"
          data-loop="true"
          data-margin="30"
        >
          <div v-for="(item, index) in list" :key="index" class="Consulting-img  text-left">
            <img :src="item.image" alt="slider">
          </div>
        </div>
      </div>
      <div class="col-sm-12 mt-5">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
      </div>
      <div class="col-sm-12 no-margin">
        <p class="mb-0">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slider',
  data () {
    return {
      list: [
        { image: require('../../assets/images/about-us/01.png') },
        { image: require('../../assets/images/about-us/02.png') },
        { image: require('../../assets/images/about-us/03.png') },
        { image: require('../../assets/images/about-us/05.png') },
        { image: require('../../assets/images/about-us/01.png') },
        { image: require('../../assets/images/about-us/02.png') },
        { image: require('../../assets/images/about-us/03.png') }
      ]
    }
  }
}
</script>
