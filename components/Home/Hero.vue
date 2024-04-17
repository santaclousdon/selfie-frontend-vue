<template>
  <section id="hero">
    <div class="row">
      <div class="col-sm-6">
        <div class="title-box text-black text-left">
          <!-- <span class="sub-title">Get Paid for Your Selfies</span> -->
          <h2 class="sub-title1">Snap, Sell, Earn: <br />Cash in on Your Selfies</h2>
        </div>
        <div class="snap-text-medium">
          Discover how your everyday selfies can quickly turn into cash.
        </div>
        <div class="snap-text-medium">Snap, upload, and get paid instantly!</div>
      </div>
      <div class="col-sm-6">
        <div class="hero-image">
          <img src="revslider/assets/hero/illustration.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Customer",
};
</script>

<style scoped>
#hero {
  padding-top: 150px;
  padding-bottom: 50px;
}
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
  background-color: #ffce4f;
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
  line-height: 50px;
}
.link-button {
  color: white !important;
  padding: 15px 35px;
  width: 100%;
  border-radius: 8px;
  background-color: #673cf6;
  font-family: Darker Grotesque;
  font-size: 24px;
  font-weight: SemiBold !important;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
