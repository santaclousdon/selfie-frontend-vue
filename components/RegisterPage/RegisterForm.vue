<template>
  <section class="">
    <div class="container login-section justify-content-center">
      <div class="col-sm-5 alert alert-danger" role="alert">
        <span class="mr-3"><img src="../../assets/images/warningIcon.png" alt=""></span>
        You have entered an incorrect email address.
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-5 login-form">
          <div class="iq-accordion-block">
            <div class="active-faq clearfix">
              <div class="container">
                <div class="row align-items-center">
                  <div class="faq-title">
                    <a href="javascript:void(0)" class="accordion-title"><span> Create an account
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-details">
              <div class="row mt-4">
                <div class="col-lg-12 mb-lg-0">
                  <p>Don’t have an account yet? <br>
                    Create a free account and get paid today!</p>
                </div>
              </div>
            </div>
          </div>
          <img src="../../assets/images/Line 1.png" width="100%" alt="">
          <div class="response-output" />
          <form action="#" method="post" class=" p-3">
            <div class="contact-form">
              <div> <input type="text" name="your-name" class="form-control text " placeholder="Your Name"> </div>
              <div> <input type="text" name="your-email" class="form-control text " placeholder="Your Email"> </div>
              <div>
                <div class="row align-items-center justify-content-center ">
                  <div class="col-lg-6 col-md-6 col-sm-12 forgot-pass">
                    <a href="/forgot-pass">Forgot password?</a>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 text-right">
                    <button id="submitLogin" click="/contact-us" name="submit" type="submit" value="Send"
                      class="button blue-btn d-block w-55">
                      Login <span> <img src="../../assets/images/Arrow 3.png" alt=""> </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'RegisterForm'
}
</script>
<style scoped >
.sub-title {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque;
  font-weight: 700;
  word-wrap: break-word
}

.forgot-pass a {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.login-form {
  background-color: #F5F6FD;
  border-radius: 8px;
}

input.text {
  background: white;
  border-radius: 8px;
  border: 1px #DFDFDF solid
}

#submitLogin {
  float: right;
}

.login-section {
  margin-top: 30px;
}

.detail-form {
  border: #EDEFFD 1px solid;
  border-radius: 8px;
}

.accordion-title span {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word
}

.get-started {
  color: black;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word
}

.accordion-details {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
.accordion-details p {
  padding-bottom: 0;
  margin-bottom: 0;
}

.blue-btn-arrow {
  background: #673CF6;
  border-radius: 9999px;
  padding: 2px 5px;
}

.alert {
  margin-left: auto;
  margin-right: auto;
  background-color: #E35D5D;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}
.iq-accordion-block {
  padding: 3em 1em 0em 1em;
}
</style>

