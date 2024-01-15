<template>
  <section>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-sm-12 col-lg-3 col-md-3 right wow fadeInUp" style="background-color: #F5F6FD;">
          <div class="consult-services xamin-circle  text-left" data-wow-delay="0.6s">
            <div class="circle-effect">
              <img :src="require('../../assets/images/how/how1.png')" alt="create">
            </div>
            <h5 class="mb-2">1. Create a free account.</h5>
            <p class="mt-5">Sign up and verify your account to prepare to upload your selfies.</p>
          </div>
          <div class="row learn-more">
            <div class="col-lg-10 col-md-12 col-sm-12">
              <a href="">Get started <span class="blue-btn ml-2"><img src="../../assets/images/Arrow 3.png" width="15"
                    alt="->"></span> </a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 right col-md-3 mt-4 mt-md-0 wow fadeInUp" style="background-color: #F5F6FD;">
          <div class="consult-services xamin-circle  text-left" style="background-color: #F5F6FD;"
            data-wow-delay="1s">
            <div class="circle-effect">
              <img :src="require('../../assets/images/how/how2.png')" alt="upload">
            </div>
            <h5 class="mb-2">2. Upload your selfies</h5>
            <p class="mt-5">Effortlessly upload both new and existing selfies.</p>
            <p class="second-line">Use our inspirational guidance and tips.</p>
          </div>
          <div class="row learn-more">
            <div class="col-lg-10 col-md-12 col-sm-12">
              <a href="">Get started <span class="blue-btn ml-2"><img src="../../assets/images/Arrow 3.png" width="15"
                    alt="->"></span> </a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 col-md-3 mt-4 mt-md-0 wow fadeInUp" style="background-color: #F5F6FD;">
          <div class="consult-services xamin-circle text-left" style="background-color: #F5F6FD;" data-wow-delay="1.4s">
            <div class="circle-effect">
              <img :src="require('../../assets/images/how/how3.png')" alt="getPaid">
            </div>
            <h5 class="mb-2">3. Get paid</h5>
            <p class="mb-0 mt-5">Once your photos are approved, payment will be sent through your selected payment method.
            </p>
          </div>
          <div class="row learn-more">
            <div class="col-lg-10 col-md-12 col-sm-12">
              <a href="">Get started <span class="blue-btn ml-2"><img src="../../assets/images/Arrow 3.png" width="15"
                    alt="->"></span> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HowItWorks'
}
</script>
<style scoped>
.right {
  position: relative;
}
.right:before {
  background-image: url('../../assets/images/how/ArrowRight.png');
  content: "";
  display: inline-block;
  position: absolute;
  right: -100%;
  top: 40%;
  background-repeat: no-repeat;
  width: 240px;
  height: 200px;
}
.fadeInUp {
  height: 450px;
}
.consult-services h5 {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque;
  font-weight: 700;
  word-wrap: break-word;
  line-height: 20px;
}

.consult-services p {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
}

.second-line {
  margin-top: 30px;
}

.learn-more a {
  color: black;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word
}
.learn-more {
  position: absolute;
  bottom: 20px;
  display: block;
  width: 100%;
}
.learn-more span.blue-btn {
  background-color: #673CF6;
  border-radius: 100px;
  color: white;
  padding: 2px 5px;
  cursor: pointer;
}
</style>