<template>
  <section class="xamin-blue-bg" id="howitworks">
    <div class="row container-paid-mobile">
      <div class="col-sm-9">
        <div class="title-box text-white text-left">
          <span class="sub-title">Get Paid for Your Selfies</span>
          <h2 class="sub-title1">How does it work?</h2>
        </div>
        <div class="detail text-white text-left">
          <p>
            Selfie.cash is an online platform that enables women to sell their selfies for
            cash. <br />
            The process is straightforward: begin by creating a free account, fill in your
            personal details, and get verified.
          </p>
          <p>
            Next, upload your selfies and await approval. Once approved, your payment will
            be processed instantly through your preferred payment method.
          </p>
          <p>
            We offer various rates for different types of selfies, ranging from 1 euro to
            as much as 8 euros per photo! For more information on how much you can earn by
            selling your selfies, check out our rates.
          </p>
        </div>
        <div class="row learn-more">
          <div class="col-lg-10 col-md-12 col-sm-12">
            <a href=""
              >Check our rates
              <span class="blue-btn ml-2"
                ><img src="../../assets/images/Arrow_3.png" width="15" alt="->"
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
  name: "Customer",
};
</script>

<style scoped>
.sub-title {
  color: white;
  font-size: 50px;
  font-family: Darker Grotesque normal;
  font-weight: 400;
  word-wrap: break-word;
}

.detail {
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word;
}

.learn-more a {
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}
.learn-more span.blue-btn {
  background-color: #ffce4f;
  border-radius: 100px;
  color: white;
  padding: 2px 5px;
  cursor: pointer;
}
h2.sub-title1 {
  color: white;
  font-size: 50px;
  font-family: Darker Grotesque;
  font-weight: 800;
  word-wrap: break-word;
}
</style>
