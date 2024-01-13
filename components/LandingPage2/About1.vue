<template>
  <section class="pt-0">
    <div class="container">
      <div class="row iq-how-it-works">
        <div class="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
          <img alt="img" class="single_image-img attachment-full" height="954" :src="require('../../assets/images/about-us/03.png')" width="1260">
        </div>
        <div class="fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <span class="title-design">About us</span>
            <h2>Human Behaviour, Data Science</h2>
            <p> It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout. </p>
          </div>
          <div class="text-left">
            <ul class="iq-list">
              <li v-for="(item,index) of list" :key="index">
                <i :class="item.icon" /><span>{{ item.title }}</span>
              </li>
            </ul>
          </div>
          <div class=" text-left mt-5">
            <a class="button button-icon" href="/about-1">
              <span class="btn-effect"> Read More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About1',
  data () {
    return {
      list: [
        {
          icon: 'fa fa-check-square-o',
          title: 'Advance Advisory Team'
        },
        {
          icon: 'fa fa-check-square-o',
          title: 'Professional Consulting Services'
        },
        {
          icon: 'fa fa-check-square-o',
          title: '24/7 Support Help Center'
        },
        {
          icon: 'fa fa-check-square-o',
          title: 'Customer Service & Operations'
        }
      ]
    }
  }
}
</script>
