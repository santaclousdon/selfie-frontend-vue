<template>
  <section class="position-relative">
    <img :src="require('../../assets/images/about-us/06.png')" class="about-box-img " alt="">
    <div class="container">
      <div class="row">
        <div class="col-lg-6"> </div>
        <div class="col-lg-6 wow fadeInUp align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <span class="title-design">About us</span>
            <h2>What is Sentiment Analysis?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
          </div>
          <div class="text-left">
            <ul class="iq-list">
              <li> <i class="fa fa-check-square-o"></i> <span>Polarity: if the speaker express a positive or negative opinion,</span> </li>
              <li> <i class="fa fa-check-square-o"></i> <span>Subject: the thing that is being talked about</span> </li>
              <li> <i class="fa fa-check-square-o"></i> <span> Opinion holder: the person, or entity that expresses the opinion.</span> </li>
            </ul>
          </div>
          <div class=" text-left mt-5 ">
            <a class="button button-icon" href="/about-1"> <span class="btn-effect"> View Details</span> </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutUs'
}
</script>