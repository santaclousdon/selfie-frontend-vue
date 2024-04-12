<template>
  <section class="xamin-gray-bg">
    <div class="row">
      <div class="col-lg-5 col-md-5"></div>
      <div class="col-lg-7 col-md-7 col-sm-7">
        <div class="title-box text-black text-left">
          <h2 class="sub-title1">Why do we pay?</h2>
        </div>
        <div class="detail text-black text-left">
          <p>
            Our platform collaborates with a variety of mainstream and adult entertainment
            applications worldwide. These applications may use your selfies to engage
            their audience.
          </p>
          <p>Rest assured, we will never publish your name or any personal details.</p>
        </div>
        <div class="row learn-more">
          <div class="col-lg-10 col-md-12 col-sm-12">
            <a href=""
              >Read our terms
              <span class="blue-btn ml-2"
                ><img src="../../assets/images/Arrow 3.png" width="15" alt="->"
              /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyPay",
};
</script>

<style scoped>
.sub-title {
  color: #222222;
  font-size: 50px;
  font-family: Darker Grotesque normal;
  font-weight: 400;
  word-wrap: break-word;
}

.detail {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}

.learn-more a {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}

.learn-more span.blue-btn {
  background-color: #673cf6;
  border-radius: 100px;
  color: #222222;
  padding: 2px 5px;
  cursor: pointer;
}

h2.sub-title1 {
  color: #222222;
  font-size: 50px;
  font-family: Darker Grotesque;
  font-weight: 800;
  word-wrap: break-word;
}
</style>
