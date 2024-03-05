<template>
  <section class="">
    <div class="container login-section">
      <div class="col-sm-6 alert alert-danger" role="alert" v-if="alert">
        <div class="row aligin-items-center">
          <div class="col-md-11 col-lg-11 col-sm-11"><img src="../../assets/images/warningIcon.png" alt="">
            {{ message }}
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 text-right"><span class="text-right alert-close" @click="closeAlert"> <i
                class="fa fa-times"></i> </span></div>
        </div>
      </div>
      <div class="col-sm-6 alert alert-success" role="alert" v-if="successalert">
        <span class="mr-3"><img src="../../assets/images/pending.png" alt=""></span>
        {{ message }}
        <span class="text-right alert-close" @click="closeAlert"> <i class="fa fa-times"></i> </span>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 login-form p-5">
          <h2 class="text-left mb-4 sub-title">
            Forgot password
          </h2>
          <div class="response-output" />
          <form @submit.prevent="HandleReset">
            <div class="contact-form">
              <div class="details">
                <p>Forgot your password? Don’t worry! Resetting your
                  password is easy. Just type in the email you registered to Selfie.cash.</p>
              </div>
              <div> <input type="email" v-model="email" name="your-email" class="form-control text "
                  placeholder="Your Email"> </div>
              <div>
                <div class="row justify-content-center pt-3 ">
                  <div class="col-lg-6 col-md-6 col-sm-12 text-right align-items-center">
                    <button name="submit" type="submit" class="button blue-btn btn-sm d-block">
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
import { axios } from '~/nuxt.config';

export default {
  name: 'ForgotPassForm',
  data() {
    return {
      message: "",
      alert: false,
      successalert: false,
      email: ""
    };
  },
  methods: {
    closeAlert() {
      this.alert = false
      this.successalert = false
    },
    async HandleReset() {
      try {

        if (!this.email) {
          this.message = "Please type your email."
          this.alert = true
          return
        }

        const res = await this.$axios.$post("/api/auth/passwordreset", {
          email: this.email
        });

        const resetEmail = await this.$axios.$post("/api/auth/resetEmail", {
          password: res.password,
          email: this.email
        })

        this.message = res.message
        this.successalert = true

      } catch (error) {
          this.message = "Please type your email registered in selfie.cash"
          this.alert = true
      }

    }
  }
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

.alert-close {
  float: right;
  cursor: pointer;
}
.alert-success {
  background: rgb(0, 172, 92);
}
</style>

