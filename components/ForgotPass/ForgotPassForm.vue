<template>
  <section class="">
    <div class="container login-section">
      <div class="col-sm-6 alert alert-danger" role="alert">
        <span class="mr-3"><img src="../../assets/images/warningIcon.png" alt=""></span>
        You have entered an incorrect email address.
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 login-form p-5">
          <h2 class="text-left mb-4 sub-title">
            Forgot password
          </h2>
          <div class="response-output" />
          <form action="#" method="post">
            <div class="contact-form">
              <div class="details">
                <p>Forgot your password? Don’t worry! Resetting your
                  password is easy. Just type in the email you registered to Selfie.cash.</p>
              </div>
              <div> <input type="text" name="your-email" class="form-control text " placeholder="Your Email"> </div>
              <div>
                <div class="row justify-content-center pt-3 ">
                  <div class="col-lg-6 col-md-6 col-sm-12 text-right align-items-center">
                    <button id="submitLogin" click="/contact-us" name="submit" type="submit" value="Send"
                      class="button blue-btn btn-sm d-block">
                      Reset password
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
  name: 'ForgotPassForm'
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
  margin-left: auto;
  margin-right: auto;
}

.login-section {
  margin-top: 40px;
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
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.details {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
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
</style>

