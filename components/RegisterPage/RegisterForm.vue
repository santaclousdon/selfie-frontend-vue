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
              <div>
                <label for="email">Enter your email address</label>
                <input type="text" name="your-email" class="form-control text " placeholder="your@email.com">
              </div>
              <div>
                <label for="gender">Choose your gender</label>
                <ul class="row nav nav-pills mb-3 justify-content-between" id="pills-tab" role="tablist">
                  <li class="nav-item col-lg-6 col-md-6 text-center">
                    <a class="nav-link active pill" id="pills-female-tab" data-toggle="pill" href="#pills-female"
                      role="tab" aria-controls="pills-female" aria-selected="false">Female</a>
                  </li>
                  <li class="nav-item col-lg-6 col-md-6 text-center">
                    <a class="nav-link pill" id="pills-male-tab" data-toggle="pill" href="#pills-male" role="tab"
                      aria-controls="pills-male" aria-selected="false">Male</a>
                  </li>
                </ul>
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control text " placeholder="password here">
              </div>
              <div>
                <label for="password-repeat">Repeat password</label>
                <input type="password" name="password-repeat" class="form-control text " placeholder="repeat password">
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                <label class="form-check-labelcol-lg-11 col-md-11 " for="flexCheckIndeterminate">
                  I hereby confirm I have fully read and agree
                  with the <a href="">terms & conditions</a> .
                </label>
              </div>
              <div>
                <div class="row align-items-center justify-content-center mr-0 create-btn">
                  <div class="col-lg-12 col-md-12 col-sm-12 text-right">
                    <a id="submitLogin" href="/auth" name="submit" type="submit" value="Send"
                      class="button blue-btn btn-sm d-block w-55">
                      Create an account <span> <img src="../../assets/images/Arrow 3.png" alt=""> </span>
                  </a>
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
  margin-top: 10px;
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

label {
  color: #222222;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.btn-check {
  display: none;
}

a.pill {
  background-color: white;
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  border: 1px #DFDFDF solid;
  border-radius: 8px;
}

a.active {
  background-color: #673CF6 !important;
}

input.form-check-input {
  width: 15px;
  margin-right: 15px;
  margin-top: -10px;
}
.create-btn {
  margin: 3em 0 3em 3em;
}
</style>

