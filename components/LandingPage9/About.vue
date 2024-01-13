<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-12">
          <img
            width="537"
            height="750"
            :src="require('../../assets/images/about-us/19.png')"
            class="attachment-full"
            alt="about-us"
            sizes="100vw"
          >
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12">
          <div class="title-box wow fadeInUp ">
            <span class="title-design">ABOUT ME</span>
            <h2>I'm Professional Data Scientist having 10 Years Of Experience</h2>
            <p>Consectetur fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          </div>
          <ul class="iq-address">
            <li><a><i class="fa fa-home mr-2" /><span class="header">Location</span><span class="content">: 1234 North Avenue Luke Lane, South Bend, IN 360001</span></a></li>
            <li class="list-inline">
              <a href="tel:+0123456789"><i class="fa fa-phone mr-2" /><span class="header">Phone</span><span class="content"> : +0123456789</span></a>
            </li>
            <li class="list-inline">
              <a href="mailto:support@iqnonicthemes.com"><i class="fa fa-envelope mr-2" /><span class="header">Email</span><span class="content"> : support@iqnonicthemes.com</span></a>
            </li>
            <li><a><i class="fa fa-address-book-o mr-2" /><span class="header">Age</span><span class="content"> : 31 Years</span></a></li>
          </ul>
          <div class="text-left">
            <a class="button blue-btn button-icon" href="/landing-page-9"><span class="btn-effect"> Download CV</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About'
}
</script>
