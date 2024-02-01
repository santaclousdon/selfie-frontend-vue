<template>
  <section class="">
    <div class="container login-section justify-content-center">
      <div class="col-sm-6 alert alert-danger" role="alert" v-if="alert">
        <span class="mr-3"><img src="../../assets/images/warningIcon.png" alt=""></span>
        {{ message }}
        <span class="text-right alert-close" @click="closeAlert"> <i class="fa fa-times"></i> </span>
      </div>
      <div class="col-sm-6 alert alert-success" role="alert" v-if="successalert">
        <span class="mr-3"><img src="../../assets/images/pending.png" alt=""></span>
        {{ message }}
        <a href="/login-page" class="text-dark" >login now</a>
        <span class="text-right alert-close" @click="closeAlert"> <i class="fa fa-times"></i> </span>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 login-form">
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
          <form @submit.prevent="register" class=" p-3">
            <div class="contact-form">
              <!-- <div>
                <label for="name">Enter your full name</label>
                <input type="text" name="your-name" class="form-control text " placeholder="your name"
                  v-model="registerData.fullname">
              </div> -->
              <div>
                <label for="email">Enter your email address</label>
                <input type="text" name="your-email" class="form-control text " placeholder="your@email.com"
                  v-model="registerData.email">
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
                <input type="password" name="password" class="form-control text " placeholder="password here"
                  v-model="registerData.password">
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
                    <button id="submitLogin" name="submit" type="submit" value="Send"
                      class="button blue-btn btn-sm d-block w-55">
                      Create an account <span> <img src="../../assets/images/Arrow 3.png" alt=""> </span>
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
  name: 'RegisterForm',
  data() {
    return {
      registerData: {
        fullname: "",
        email: "",
        password: ""
      },
      message: "You have entered an incorrect email address or password.",
      alert: false,
      successalert: false
    };
  },
  methods: {
    async register() {
      try {
        console.log('register')
        const res = await this.$axios.$post("/api/auth/signin", {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password
        });

        console.log(res)
        this.message = "Successfully registered new user."
        this.successalert = true
      } catch (err) {
        console.log(err);
        this.message = "Error occupied during register. Please try again."
        this.alert = true
      }
    },
    closeAlert() {
      this.alert = false
      this.successalert = false
    }
  }
}
</script>
<style scoped >
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

.accordion-title span {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
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

.alert-success {
  background: rgb(0, 172, 92);
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
.alert-close {
  float: right;
  cursor: pointer;
}
</style>

