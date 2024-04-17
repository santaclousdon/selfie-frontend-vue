<template>
  <section class="">
    <div class="container login-section justify-content-center">
      <div class="col-sm-7 alert alert-danger" v-if="alert" role="alert">
        <span class="mr-3"><img src="../../assets/images/warningIcon.png" alt=""></span>
        You have entered an incorrect email address or password.
        <span class="text-right alert-close" @click="closeAlert"> <i class="fa fa-times"></i> </span>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-7 login-form p-5">
          <h2 class="text-left mb-4 sub-title">
            Login
          </h2>
          <div class="response-output" />
          <form @submit.prevent="login">
            <div class="contact-form">
              <div> <input type="text" name="your-email" class="form-control text " placeholder="Your Email"
                  v-model="loginData.email"> </div>
              <div> <input type="password" name="your-password" class="form-control text " placeholder="Your password"
                  v-model="loginData.password"> </div>
              <div>
                <div class="row align-items-center justify-content-center ">
                  <div class="col-lg-6 col-md-6 col-sm-12 forgot-pass">
                    <a href="/forgot-pass">Forgot password?</a>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 text-right">
                    <button id="submitLogin" name="submit" type="submit" value="Send"
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
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-7 p-5 mt-3 detail-form">
          <div class="iq-accordion-block">
            <div class="active-faq clearfix">
              <div class="container">
                <div class="row align-items-center">
                  <div class="signup-title">
                    <a href="javascript:void(0)" class="accordion-title"><span> Create an account
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-details">
              <div class="row mt-4">
                <div class="col-lg-12 mb-4 mb-lg-0">
                  <p>Don’t have an account yet? <br>
                    Create a free account and get paid today!</p>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 contact-nav text-left">
                  <a href="/register-page" class="get-started">Get started <span class="blue-btn-arrow ml-3"><img
                        src="../../assets/images/Arrow 3.png" width="15" alt="->"></span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import jquery from 'jquery';
// import * as jwtDecode from 'jwt-decode';

export default {
  name: 'LoginForm',
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      alert: false
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData
        });

        if (response.data.emailStatus) {

          // const referrals = await this.$axios.$post("/api/referrals", {
          //   id: this.$store.$auth.$state.user._id
          // });

          // console.log("referrals", referrals)

          this.$store.commit('setReferrals', response.data.referrals)

          this.$router.push("/auth/dashboard");
        }
        else {
          this.$auth.logout()

          console.log("logonData", this.loginData)
          
          const result = await this.$axios.$post("/api/auth/sendVerifyMail", {
            email: this.loginData.email,
            token: response.data.token,
            password: this.loginData.password
          });
          window.location.replace('/confirm-mail')
        }
      } catch (err) {
        console.log(err);
        this.alert = true
      }
    },
    closeAlert() {
      this.alert = false
    }
  }
}
</script>

<style scoped >
.sub-title {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
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
  word-wrap: break-word;
}

.alert-close {
  float: right;
  cursor: pointer;
}
</style>

